import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

// MVP: component shows user's quests on the home page.
// Stretch: component shows user's quests AND close-to-completion achievements

export default function GoalsFeed() {
    return (
        <div className="Goals">
            <h2>Today's To-Do's:</h2>
            <p>ACHIEVEMENT1</p>
            <p>ACHIEVEMENT2</p>
            <p>ACHIEVEMENT3</p>
        </div>
    )

}
