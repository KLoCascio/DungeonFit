import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

// MVP: component shows app news, ie. Patches, Events, Announcements

export default function NewsFeed() {
    return (
        <div className="NewsFeed">
        <h2>News: </h2>
        <p>Happy Halloween! It's that time of year! Enjoy our spooky Halloween-themed event.</p>
        <p>Patch 1.01 is here, and many fixes have been included. Click here for more details.</p>
        </div>
    )
}
