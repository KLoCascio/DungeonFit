import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import axios from 'axios'
import Header from './Header'
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
            <Header />
            {/* map function to show everyone added to your group? */}
            <ul>Members:</ul>
            <li>ROB</li>
            <li>KYNDAL</li>
            <li>BEN</li>
            <h3>Setup Party Challenge</h3>
            <form className="challenge">
                <label htmlFor="challenge-name">Pick a Name for Challenge:</label>
                <input type="text" className="challenge-name" value="Name of Challenge" />
                <label htmlFor="challenge-description">Challenge Description</label>
                <input type="text" className="challenge-description" value="Type Description Here..." />
                <label htmlFor="challenge-duration">Pick a Duration:</label>
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                />
            </form>
        </div>
    )
}
