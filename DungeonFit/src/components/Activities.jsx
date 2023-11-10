import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

// I couldn't get the activity-btn and custom-btn to change to #652f7b when active.

export default function Activities() {
  // activity grid
  let { cats } = useParams()
  const [category, setActivity] = useState([])
  
  // activity modal
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isActivitySelected, setIsActivitySelected] = useState(true)
  const [isCustomSelected, setIsCustomSelected] = useState(false)

  // activity modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const toggleActivity = () => {
    setIsActivitySelected(true)
    setIsCustomSelected(false)
  }

  const toggleCustom = () => {
    setIsCustomSelected(true)
    setIsActivitySelected(false)
  }

  const closeOnOutsideClick = (e) => {
    if (isModalVisible && !e.target.closest('.activity-content')) {
      setIsModalVisible(false)
    }
  }

  // activity grid
  useEffect(() => {
    const getActivity = async () => {
      try {
        const response = await axios.get('http://localhost:5173/activities')
        setActivity(response.data.activities)
      } catch (error) {
        console.error('Error fetching activities:', error)
      }
    }
    getActivity()
  }, [])

  // activity modal
  useEffect(() => {
    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
    }
  }, [isModalVisible])

  return (
    <div className="Activities">
      <div className="Completed-Activities">
        <button onClick={toggleModal} className="add-activity-btn">
          ADD ACTIVITY
        </button>
        <div className="activities-grid">
          {category.map((activities) => (
            <Link to={`/activities/${activities.idActivity}`} key={activities.idActivity}>
              <div className="details">
                <img className="activity-icon" src={activities.activityIcon} alt="Activity Icon"></img>
                <p className="activity-title">{activities.activityTitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {isModalVisible && (
        <div id="activity-modal" className="activity-modal">
          <div className="activity-content">
            <h2>Add an Activity</h2>
            <button onClick={toggleActivity} className="activity-btn">
              ACTIVITY
            </button>
            <button onClick={toggleCustom} className="custom-btn">
              CUSTOM
            </button>

            {isActivitySelected && (
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
            )}

            {isCustomSelected && (
              <div className="custom-tab">
                <h3>Name of Activity:</h3>
                <input type="text" id="custom-input" className="custom-input" />

                <h3>Type of Activity:</h3>
                <select name="activity-type-select" id="activity-type-select">
                  <option value="select">Select Type</option>
                </select>

                <h3>Duration:</h3>
                <select name="duration-select" id="duration-select">
                  <option value="select">Select Duration</option>
                </select>
              </div>
            )}

            <h3>Difficulty Level:</h3>
            <div className="difficulty-btn-container">
              <button className="difficulty-btn">Level 1</button>
              <button className="difficulty-btn">Level 2</button>
              <button className="difficulty-btn">Level 3</button>
            </div>
            <div className="add-activity-btn-container">
              <button className="add-activity-btn">ADD</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}