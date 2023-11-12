// PROFILE
import Inventory from './Inventory'
import Abilities from './Abilities'
import Quests from './Quests'
import Hero from '../assets/Heros/MageFull1.png'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

// MVP: component shows user's most recently completed achievements on the home page.
// Stretch: component shows user's friends/group's recently completed achievements on the home page.

// route should be /character

export default function Character() {
    // useState for toggle between inventory/quests/abilities
    const [isInventoryVisible, setIsInventoryVisible] = useState(true)
    const [isQuestsVisible, setIsQuestsVisible] = useState(false)
    const [isAbilitiesVisible, setIsAbilitiesVisible] = useState(false)

    const toggleInventory = () => {
        setIsInventoryVisible(true)
        setIsQuestsVisible(false)
        setIsAbilitiesVisible(false)
    }

    const toggleQuests = () => {
        setIsInventoryVisible(false)
        setIsQuestsVisible(true)
        setIsAbilitiesVisible(false)
    }

    const toggleAbilities = () => {
        setIsInventoryVisible(false)
        setIsQuestsVisible(false)
        setIsAbilitiesVisible(true)
    }



    return (
        <div className="Character">

            <img src={Hero} alt="Hero Portrait" className="hero-full-image"/>
            {/* <h2> {user.userName} {user.userClass} {user.userLevel} </h2> */}
            <ul>Defensive</ul>
            {/* <li>HP: {user.attHP}</li>
            <li>MP: {user.attMP}</li>
            <li>XP: {user.attXP}/100</li> */}

            <ul>Offensive</ul>
            {/* <li>STR: {user.attSTR}</li>
            <li>AGI: {user.attAGI}</li>
            <li>INT: {user.attINT}</li>
            <li>CHA: {user.attCHA}</li> */}

            <p className="achievements"><Link to="/achievements"> Achievements</Link></p>

            <button onClick={toggleInventory} className="inventory-button">INVENTORY</button>
            <button onClick={toggleQuests} className="quests-button">QUESTS</button>
            <button onClick={toggleAbilities} className="abilities-button">ABILITIES</button>

            {isInventoryVisible && (
                <div className="inventory-tab">
                    <Inventory />
                </div>
            )}

            {isQuestsVisible && (
                <div className="quests-tab">
                    <Quests />
                </div>
            )}

            {isAbilitiesVisible && (
                <div className="abilities-tab">
                    <Abilities />
                </div>
            )}

        </div>
    )
}
