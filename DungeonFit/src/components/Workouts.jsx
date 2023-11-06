// WORKOUTS CREATE / PAST WORKOUTS

import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function Workouts() {
    return (
        <div className="Worksouts">
            <button>Current Workouts</button>
            <button>Past Workouts</button>
            <button>+</button>
            {/* modal to switch between current-workout, and past-workouts modals depending on the button selected? */}
            <div className="current-workout">

            </div>
            <div className="past-workouts">

            </div>
        </div>
    )
}