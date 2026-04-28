import React from "react";
import "../styles/input.css";

function InputBox({ setSearch, handleSearch }) {
    return(
        <div className="input-box">
            <input 
                type="text" 
                className="search-input"
                onChange={(e) => setSearch(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' ? handleSearch() : null} 
                placeholder="Enter Pokemon" 
            />
            <button className="search-btn" onClick={handleSearch}>Submit</button>
        </div>
    );
}

export default InputBox;