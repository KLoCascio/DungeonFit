import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Hero from '../assets/Heros/MageHeadshot1.png'


import axios from 'axios'

// MVP: component shows user's most recently completed achievements on the home page.
// Stretch: component shows user's friends/group's recently completed achievements on the home page.

export default function CharacterSummary() {

    return (
        <div className="Character-Summary">
            <img src={Hero} alt="Hero Portrait" />
            <h2> CHALUPACABRAS </h2>
            <p>Class: MAGE</p>
            <p>Level: 57</p>
            <p>XP: XP/100 </p>
            <p>Streak: # OF DAYS HERE</p>
        </div>
    )
}
