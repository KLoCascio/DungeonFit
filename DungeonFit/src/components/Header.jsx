import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from './Nav'


import axios from 'axios'

// MVP: component shows app news, ie. Patches, Events, Announcements

export default function Header() {
    return (
        <div className="Header">
            
            <Navbar />
        </div>
    )

}
