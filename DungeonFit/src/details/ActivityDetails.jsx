// Clickable Cards
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function ActivityDetails() {
    const [activity, setActivity] = useState(null)
    const { id } = useParams()

    

    useEffect(() => {
        const getActivityDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/activities/${id}`)
                console.log(response.data)
                setActivity(response.data)
            } catch (e) {
                console.error("Error Fetching Activity Details:", e)
            }
        }
        getActivityDetails()
    }, [id])

    return activity ? (
        <div className="activity-details">
            <img className="details-icon" src={activity.activityIcon} alt="Activity Icon" />
                  <h2 className="activity-title">{activity.activityTitle}</h2>
                  <h3 className="activity-day">{activity.activityDay}</h3>
                  <Link to="/activities" className="return-link">Return</Link>
        </div>
    ) : <h2 className="Loading">Loading Activity!</h2>
}

