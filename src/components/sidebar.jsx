import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';

const pokemonTypes = [
    { name: 'Normal', icon: 'stars' },
    { name: 'Fire', icon: 'local_fire_department' },
    { name: 'Water', icon: 'water_drop' },
    { name: 'Grass', icon: 'grass' },
    { name: 'Electric', icon: 'bolt' },
    { name: 'Ice', icon: 'ac_unit' },
    { name: 'Fighting', icon: 'sports_martial_arts' },
    { name: 'Poison', icon: 'vaccines' },
    { name: 'Ground', icon: 'landscape' },
    { name: 'Flying', icon: 'air' },
    { name: 'Psychic', icon: 'psychology' },
    { name: 'Bug', icon: 'bug_report' },
    { name: 'Rock', icon: 'volcano' },
    { name: 'Ghost', icon: 'visibility_off' },
    { name: 'Dragon', icon: 'auto_awesome' },
    { name: 'Dark', icon: 'dark_mode' },
    { name: 'Steel', icon: 'hardware' },
    { name: 'Fairy', icon: 'flare' }
];

function Sidebar() {
    const navigate = useNavigate();
    const [activeType, setActiveType] = useState(null);

    function handleTypeClick(typeName) {
        setActiveType(typeName);
        navigate(`/type/${typeName.toLowerCase()}`);
    }

    return (
        <aside className="poke-sidebar">
            <div className="poke-sidebar-header">
                <h3 className="poke-sidebar-title">Type Filters</h3>
                <p className="poke-sidebar-subtitle">Archived by Affinity</p>
            </div>
            
            <nav className="poke-nav">
                {pokemonTypes.map((type) => (
                    <div 
                        key={type.name} 
                        className={`poke-nav-item ${activeType === type.name ? 'active' : ''}`}
                        onClick={() => handleTypeClick(type.name)}
                    >
                        <span className="material-symbols-outlined">{type.icon}</span>
                        <span className="poke-nav-label">{type.name}</span>
                    </div>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
