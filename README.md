# 🤖 AI Pokédex

An AI-powered Pokédex built with React and Vite, combining the PokéAPI with Google Gemini AI to deliver intelligent Pokémon information and insights.

🔗 **Live Site:** [ai-pokedex-theta.vercel.app](https://ai-pokedex-theta.vercel.app)

---

## ✨ Features

- 🔍 Search for any Pokémon by name or ID
- 🧠 AI Agent powered by Google Gemini for intelligent Pokémon insights
- 📊 Detailed stats, types, and abilities via PokéAPI
- 🎨 Filter Pokémon by type
- ✨ Interactive animations — click sparks and animated dot grid background
- ⚡ Fast and lightweight build with Vite
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **AI:** Google Gemini API
- **Data:** PokéAPI
- **Deployment:** Vercel

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/VedV2046/AI-Pokedex.git

# Navigate into the project
cd AI-Pokedex

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file at the root of the project and add your Gemini API key:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

You can get a free API key from [Google AI Studio](https://aistudio.google.com/).

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 📁 Project Structure

```
AI-Pokedex/
├── index.html
├── vite.config.js
├── public/
│   └── images/
└── src/
    ├── index.jsx
    ├── components/
    │   ├── app.jsx          # Root component
    │   ├── AIAgent.jsx      # Gemini AI chat interface
    │   ├── pokedex.jsx      # Main Pokédex display
    │   ├── sidebar.jsx      # Pokémon list / navigation
    │   ├── typePage.jsx     # Type-based filtering view
    │   ├── input.jsx        # Search input
    │   ├── pokeball.jsx     # Animated Pokéball component
    │   ├── header.jsx
    │   └── footer.jsx
    ├── ReactBits/
    │   ├── ClickSpark.jsx   # Click spark animation
    │   └── DotGrid.jsx      # Animated dot grid background
    └── styles/              # CSS per component
```

---

## 🙌 Acknowledgements

- [PokéAPI](https://pokeapi.co/) — for the Pokémon data
- [Google Gemini](https://ai.google.dev/) — for the AI capabilities

---

## 👤 Author

**Ved Vharamble**
- **Portfolio:** [portfolio-ved-vharamble.vercel.app](https://portfolio-ved-vharamble.vercel.app)
- **GitHub:** [@VedV2046](https://github.com/VedV2046)
- **LinkedIn:** [Ved Vharamble](https://linkedin.com/in/ved-vharamble)

---

> Built with 💙 by Ved Vharamble