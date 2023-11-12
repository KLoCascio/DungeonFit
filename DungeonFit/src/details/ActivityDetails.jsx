import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function ActivityDetails() {
    const [activity, setActivity] = useState(null)
    const { id } = useParams()

    const handleUpdateActivity = async () => {
        const newTitle = prompt('Enter the new title for the activity:')
        if (newTitle !== null) {
            try {
                const response = await axios.put(`http://localhost:3001/activities/${id}`, {
                    activityTitle: newTitle,
                })

                const updatedActivity = response.data

                setActivity(updatedActivity)
            } catch (error) {
                console.error('Error updating activity:', error)
            }
        }
    }

    const handleDeleteActivity = async () => {
        try {
            await axios.delete(`http://localhost:3001/activities/${id}`)
            window.location.href = '/activities'
        } catch (error) {
            console.error('Error deleting activity:', error)
        }
    }

    useEffect(() => {
        const getActivityDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/activities/${id}`)
                setActivity(response.data)
            } catch (error) {
                console.error('Error Fetching Activity Details:', error)
            }
        }

        getActivityDetails()
    }, [id])

    return activity ? (
        <>
            <div className="activity-details">
                <img className="activity-icon" src={`/${activity.activityIcon}`} alt="Activity Icon" />
                <h2 className="activity-title">{activity.activityTitle}</h2>
                <h3 className="activity-day">{activity.activityDay}</h3>
                <div className="details-button-container">
                    <button onClick={handleUpdateActivity} className="update-button">
                        Update
                    </button>
                    <button onClick={handleDeleteActivity} className="delete-button">
                        Delete
                    </button>
                </div>
            </div>
            <Link to="/activities" className="return-link">
                <img src="../src/assets/icons/BackIcon.png" />
            </Link>
        </>
    ) : (
        <h2 className="Loading">Loading Activity!</h2>
    )
}
