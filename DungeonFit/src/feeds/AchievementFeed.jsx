import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

// MVP: component shows user's most recently completed achievements on the home page.
// Stretch: component shows user's friends/group's recently completed achievements on the home page.

export default function AchievementFeed() {
    return (
        <div className="AchievementFeed">
            <h1>Achievements:</h1>
            <p>ACHIEVEMENT LINKED HERE.</p>
        </div>
    )
}
