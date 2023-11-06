// PROFILE

import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'


export default function Achievements() {
    return (
        <div className="Achievements">
            <img src="#" alt="Hero Portrait" />
            <h1>Achievements</h1>
            {/* map function for UL of achievement data? */}
            <li><img src="#" alt="Achieve Icon"></img>-ACHIEVEMENT-</li>
            <li><img src="#" alt="Achieve Icon"></img>-ACHIEVEMENT-</li>
            <li><img src="#" alt="Achieve Icon"></img>-ACHIEVEMENT-</li>
            <li><img src="#" alt="Achieve Icon"></img>-ACHIEVEMENT-</li>
            <li><img src="#" alt="Achieve Icon"></img>-ACHIEVEMENT-</li>
        </div>

    )

}