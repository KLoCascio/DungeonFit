// PROFILE
import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import Logo from "../assets/logo/logo.svg"
import axios from 'axios'

export default function Navbar() {
    return (
        <>
         {/* this Navbar is for larger screens. */}
        <div className="Navbar">
            <button className="nav-link"><Link to="/character">Character</Link> </button>
            <button className="nav-link"><Link to="/activities"> Activities</Link></button>
            <button className="nav-logo"><Link to="/"><img src={Logo} alt="Logo"></img></Link></button>
            <button className="nav-link"><Link to="/checkin"> Check-In</Link></button>
            <button className="nav-link"><Link to="/party"> Party</Link></button>
        </div>
        </>
    )
}