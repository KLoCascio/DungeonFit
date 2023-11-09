// PROFILE

import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Inventory from './Inventory'
import Quests from './Quests'
import Abilities from './Abilities'

// MVP: component shows user's most recently completed achievements on the home page.
// Stretch: component shows user's friends/group's recently completed achievements on the home page.

// route should be /character

export default function Character() {
    const [activeTab, setActiveTab] = useState('')

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }







    return (
        <div className="Character">
            <img src="#" alt="Hero Portrait" />
            <h2> -USERNAME HERE- -CLASS HERE- -LEVEL HERE-</h2>
            <ul>Defensive</ul>
            <li>HP: HPVALUE</li>
            <li>MP: MPVALUE</li>
            <li>XP: ##/100</li>

            <ul>Offensive</ul>
            <li>STR: STRVALUE</li>
            <li>AGI: AGIVALUE</li>
            <li>INT: INTVALUE</li>
            <li>CHA: CHAVALUE</li>

            
            <button className={`inventory-button ${activeTab === 'inventory' ? 'active' : ''}`} onClick={() => handleTabClick('inventory')}>
                <Link to="/character/inventory">INVENTORY</Link>
            </button>
            <button className={`quests-button ${activeTab === 'quests' ? 'active' : ''}`} onClick={() => handleTabClick('quests')}>
                <Link to="/character/quests">QUESTS</Link>
            </button>
            <button className={`abilities-button ${activeTab === 'abilities' ? 'active' : ''}`} onClick={() => handleTabClick('abilities')}>
                <Link to="/character/abilities">ABILITIES</Link>
            </button>

            {/* Route to conditionally render the selected component */}
            <div>
                
            </div>
        </div>
    )
}
