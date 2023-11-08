import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

// MVP: component shows user's most recently completed achievements on the home page.
// Stretch: component shows user's friends/group's recently completed achievements on the home page.

export default function CharacterSummary() {

    return (
        <div className="Character-Summary">
            <img src="#" alt="Hero Portrait" />
            <h2> USERNAME HERE </h2>
            <p>Class: CLASS HERE</p>
            <p>Level: LEVEL HERE</p>
            <p>XP: XP/100 </p>
            <p>Streak: # OF DAYS HERE</p>
        </div>
    )
}
