// PROFILE

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

// MVP: component shows user's most recently completed achievements on the home page.
// Stretch: component shows user's friends/group's recently completed achievements on the home page.

export default function Abilities() {
    const [activeTab, setActiveTab] = useState('')

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }
    return (
        <>
        <h1>hello</h1>
    <p>This is the Abilities Component being rendered.</p>    
    </>
    )

}
