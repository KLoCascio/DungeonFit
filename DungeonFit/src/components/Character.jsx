// PROFILE
import Inventory from './Inventory'
import Abilities from './Abilities'
import Quests from './Quests'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'



// MVP: component shows user's most recently completed achievements on the home page.
// Stretch: component shows user's friends/group's recently completed achievements on the home page.

// route should be /character

export default function Character() {
    const [isInventoryVisible, setIsInventoryVisible] = useState(true)
    const [isQuestsVisible, setIsQuestsVisible] = useState(false)
    const [isAbilitiesVisible, setIsAbilitiesVisible] = useState(false)
    const [character, setCharacter] = useState([])
    console.log(character)

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

    useEffect(() => {
        const getCharacter = async () => {
            const response = await axios.get('http://localhost:3001/user')
            setCharacter(response.data)

        }   
        getCharacter()
      }, []);

      
      console.log('hello my World')

    return (
        <div className="Character">
            <img src="#" alt="Hero Portrait" />
            <h2>{character[0].userName}-{character[0].class}-{character[0].level}</h2>
            <ul>Defensive</ul>
            <li>HP: {character[0].health}</li>
            <li>MP: {character[0].mana}</li>
            <li>XP: {character[0].exp}/100</li>

            <ul>Offensive</ul>
            <li>STR: STRVALUE</li>
            <li>AGI: AGIVALUE</li>
            <li>INT: INTVALUE</li>
            <li>CHA: CHAVALUE</li>


            {/* buttons for modals? bottom section of character panel that will show inventory, quests or abilities -- depending on the button clicked. */}
            <button onClick={toggleInventory} className="inventory-button">INVENTORY</button>
            <button onClick={toggleQuests} className="quests-button">QUESTS</button>
            <button onClick={toggleAbilities} className="abilities-button">ABILITIES</button>
            {/* conditional rendering */}

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
