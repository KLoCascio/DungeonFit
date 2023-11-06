import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

// MVP: component shows app news, ie. Patches, Events, Announcements

export default function Footer() {
    return (
        <div className="Footer">
            {/* Character, Workouts, Achievements, Check-Ins, Party */}
            <img src="#" alt="Character Page" />
            <img src="#" alt="Workout Page" />
            <img src="#" alt="Achievement Page" />
            <img src="#" alt="Check-In Page" />
            <img src="#" alt="Party Page" />
        </div>
    )

}
