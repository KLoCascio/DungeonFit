import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'
import NavMobile from './NavMobile'

// MVP: component shows app news, ie. Patches, Events, Announcements

export default function Footer() {
    return (
        <div className="Footer">
           <NavMobile />
        </div>
    )

}
