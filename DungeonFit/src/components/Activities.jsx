// WORKOUTS CREATE / PAST WORKOUTS

import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function Activities() {

    // setup a useEffect 

    return (
        <div className="Activities">
            <div className="Completed-Activities">
                {/* grid 2x4, first card = "Create New Work Out", and then the last 7 work outs */}
            </div>
            <div id="activity-modal" className="modal">
                <h2>Add an Activity</h2>
                <div className="activity-content">
                    <button className="activity-btn">ACTIVITY</button> <button className="activity-btn">CUSTOM</button>
                    {/* ACTIVITY TAB */}
                    <div className="activity-tab">
                        <h3>Activity:</h3>
                        <select name="activities" id="activity-select">
                            <option value="select">Select Activity</option>
                        </select>
                        <h3>Duration:</h3>
                        <select name="duration" id="duration-select">
                            <option value="select">Select Duration</option>
                        </select>
                    </div>

                    {/* CUSTOM TAB */}
                    {/* <div className="custom-tab">
                        <h3>Name of Activity:</h3>
                        <label htmlFor="custom-input">Activity Name</label>
                        <input type="text" id="custom-input" className="custom-input" />

                        <h3>Type of Activity:</h3>
                        <select name="activity-type-select" id="activity-type-select">
                            <option value="select">Select Type</option>
                        </select>

                        <h3>Duration:</h3>
                        <select name="duration-select" id="duration-select">
                            <option value="select">Select Duration</option>
                        </select>
                    </div> */}
                </div>
                <h3>Difficulty Level:</h3>
                <div className="difficulty-btn-container">
                <button className="difficulty-btn">Level 1</button>
                <button className="difficulty-btn">Level 2</button>
                <button className="difficulty-btn">Level 3</button>
                </div>

                <button className="add-activity-btn">ADD</button>
            </div>
        </div>
    )
}