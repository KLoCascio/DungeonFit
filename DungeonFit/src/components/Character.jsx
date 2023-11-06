// PROFILE

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

// MVP: component shows user's most recently completed achievements on the home page.
// Stretch: component shows user's friends/group's recently completed achievements on the home page.

export default function Character() {

    return (
        <div className="Character">
            <img src="#" alt="Hero Portrait" />
            <h1> -USERNAME HERE- -CLASS HERE- -LEVEL HERE-</h1>
            <ul>Defensive</ul>
            <li>HP: HPVALUE</li>
            <li>MP: MPVALUE</li>
            <li>XP: ##/100</li>

            <ul>Offensive</ul>
            <li>STR: STRVALUE</li>
            <li>AGI: AGIVALUE</li>
            <li>INT: INTVALUE</li>
            <li>CHA: CHAVALUE</li>

            {/* buttons for modals? bottom section of character panel that will show inventory, quests or abilities -- depending on the button clicked. */}
            <button className="inventory-button"><Link to="/inventory">INVENTORY</Link></button>
            <button className="quests-button"><Link to="/quests">QUESTS</Link></button>
            <button className="abilities-button"><Link to="/abilities">ABILITIES</Link></button>

        </div>
    )
}
