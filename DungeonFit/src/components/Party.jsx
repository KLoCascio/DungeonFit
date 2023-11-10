import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import axios from 'axios'
import { DateRangePicker } from "react-date-range"

export default function Party() {

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }

  


    const handleSelect = (ranges) => {
        console.log(ranges)
    }

    return (
        <div className="Party">
            {/* map function to show everyone added to your group? */}
            <div className="members">
                <h4>Members:</h4>
              

                <button className="add-members"><Link to="/invite">Invite</Link></button>

            </div>
            <h3>Setup Party Challenge</h3>
            <form className="challenge">
                <label 
                htmlFor="challenge-name">Pick a Name for Challenge:</label>
                <input 
                type="text" 
                id="challenge"
                className="challenge-name" 
                placeholder="Name of challenge..."
                value={''}
                />

                <label 
                htmlFor="challenge-description">Challenge Description</label>
                <input 
                type="text" 
                id="description"
                className="challenge-description"
                placeholder="description" 
                value={''} 
                />

                <label htmlFor="challenge-duration">Select a Duration:</label>
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                />
            </form>
        </div>
    )
}
