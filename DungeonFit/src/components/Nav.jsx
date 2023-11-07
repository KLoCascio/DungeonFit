// PROFILE

import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import { GiBrutalHelm, GiCompass } from 'react-icons/gi'
import { CiDumbbell } from 'react-icons/ci'
import { GrTrophy } from 'react-icons/gr'
import { FaPeopleGroup } from "react-icons/fa6"
import Logo from "../assets/logo/Logo/logo.svg"

import axios from 'axios'

export default function Navbar() {
    return (
        <>
        // this Navbar is for larger screens.
        <div className="Navbar">
            <button className="nav-link"><Link to="/character">Character</Link> </button>
            <button className="nav-link"><Link to="/workouts"> Workouts</Link></button>
            {/* logo as the home button? */}
            <button className="nav-link"><Link to="/"><img src={Logo} alt="Logo"></img></Link></button>
            <button className="nav-link"><Link to="/checkin"> Check-In</Link></button>
            <button className="nav-link"><Link to="/achievements"> Achievements</Link></button>
            <button className="nav-link"><Link to="/party"> Party</Link></button>
        </div>

        <div className="logo">
        <button className="nav-link"><Link to="/"><img src={Logo} alt="Logo"></img></Link></button>
        </div>

        <div>
            <button className="nav-link"><Link to="/character"><GiBrutalHelm /></Link></button>
            <button className="nav-link"><Link to="/workouts"><CiDumbbell /></Link></button>
            <button className="nav-link"><Link to="/achievements"><GrTrophy /></Link></button>
            <button className="nav-link"><Link to="/checkin"> <GiCompass /></Link></button>
            <button className="nav-link"><Link to="/party"> <FaPeopleGroup/></Link></button>
        </div>
        </>
    )
}