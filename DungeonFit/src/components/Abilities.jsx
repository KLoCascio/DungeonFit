import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function Abilities() {
    const [activeTab, setActiveTab] = useState('')

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }
    return (
        <>
            <p>Thies is the Abilities Component being rendered.</p>
        </>
    )

}
