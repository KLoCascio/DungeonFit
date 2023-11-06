// PROFILE

import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function Navbar() {
    return (
        <div className="Navbar">
            <button className="nav-link"><Link to="/">Character</Link> </button>
            <button className="nav-link"><Link to="/workouts"> Workouts</Link></button>
            {/* logo as the home button? */}
            <button className="nav-link"><Link to="/"><img src="" alt="Logo"></img></Link></button>
            <button className="nav-link"><Link to="/checkin"> Check-In</Link></button>
            <button className="nav-link"><Link to="/party"> Party</Link></button>

        </div>
    )
}