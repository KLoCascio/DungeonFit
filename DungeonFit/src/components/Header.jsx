import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from './Nav'

import axios from 'axios'

export default function Header() {
    return (
        <div className="Header">
            
            <Navbar />
        </div>
    )

}
