import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import '../styles/AIAgent.css';

const AIAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ role: 'model', content: 'Hello! I am your AI Pokedex Assistant. Ask me anything about Pokémon, their stats, or their anime appearances!' }]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Read API key from environment variable
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            
            if (!apiKey) {
                setMessages((prev) => [...prev, { role: 'model', content: 'API key is missing! Please create a .env file and set VITE_GEMINI_API_KEY to your Gemini API key.' }]);
                setIsLoading(false);
                return;
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            
            const systemInstruction = "You are Rotom Dex, a highly knowledgeable Pokemon expert AI. Answer questions related to Pokemon, their stats, lore, general knowledge, and anime appearances. Be helpful, concise, enthusiastic, and occasionally use Pokemon-related puns or catchphrases. Format your responses with simple markdown like bolding for emphasis.";

            const model = genAI.getGenerativeModel({ 
                model: 'gemini-1.5-flash',
                systemInstruction: systemInstruction,
            });

            const firstUserIndex = messages.findIndex(msg => msg.role === 'user');
            const validHistory = firstUserIndex === -1 ? [] : messages.slice(firstUserIndex);

            const chatHistory = validHistory.map(msg => ({
                role: msg.role === 'model' ? 'model' : 'user',
                parts: [{ text: msg.content }]
            }));

            const chat = model.startChat({
                history: chatHistory,
                generationConfig: {
                    temperature: 0.7,
                }
            });

            const result = await chat.sendMessage(userMessage.content);
            const replyText = result.response.text();
            
            setMessages((prev) => [...prev, { role: 'model', content: replyText }]);

        } catch (error) {
            console.error('Error generating response:', error);
            setMessages((prev) => [...prev, { role: 'model', content: `Oops! Something went wrong: ${error.message || error}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Parse simple markdown-like syntax for basic formatting
    const formatMessage = (text) => {
        // Handle bold (**text**)
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            // Handle basic line breaks
            return <span key={i}>{part.split('\n').map((line, j) => (
                <React.Fragment key={j}>
                    {line}
                    {j < part.split('\n').length - 1 && <br />}
                </React.Fragment>
            ))}</span>;
        });
    };

    return (
        <div className="ai-agent-container">
            {isOpen && (
                <div className="ai-chat-window">
                    <div className="ai-chat-header">
                        <div className="ai-header-title">Rotom Dex</div>
                        <button className="ai-close-btn" onClick={toggleChat} title="Close">×</button>
                    </div>
                    <div className="ai-chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`ai-message ${msg.role}`}>
                                <div className="ai-message-content">{formatMessage(msg.content)}</div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="ai-message model loading">
                                <div className="ai-message-content">Processing</div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="ai-chat-input-area">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask about a Pokemon..."
                            className="ai-chat-input"
                        />
                        <button onClick={handleSend} disabled={isLoading || !input.trim()} className="ai-send-btn">
                            Send
                        </button>
                    </div>
                </div>
            )}
            
            <button className={`ai-toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleChat} title="Chat with Rotom Dex">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 19.9966 9.87812 19.6883 8.7 19.1L3 21L4.9 15.3C4.31175 14.1219 4.00341 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.31175 11.1801 3.00341 12.5 3C14.0782 3.00061 15.6251 3.44061 16.9674 4.27072C18.3098 5.10083 19.3944 6.28825 20.1 7.70003C20.6951 8.87812 21.0034 10.1801 21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    );
};

export default AIAgent;
