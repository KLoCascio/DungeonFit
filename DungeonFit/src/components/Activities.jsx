import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function Activities() {
  let { cats } = useParams()
  const [activities, setActivity] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isActivitySelected, setIsActivitySelected] = useState(true)
  const [isCustomSelected, setIsCustomSelected] = useState(false)

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
  const toggleLevelOne = () => {
    setIsLevelOneSelected(true)
    setIsLevelTwoSelected(false)
    setIsLevelThreeSelected(false)
  }
  const toggleLevelTwo = () => {
    setIsLevelTwoSelected(true)
    setIsLevelOneSelected(false)
    setIsLevelThreeSelected(false)
  }
  const toggleLevelThree = () => {
    setIsLevelThreeSelected(true)
    setIsLevelOneSelected(false)
    setIsLevelTwoSelected(false)
  }
  const closeOnOutsideClick = (e) => {
    if (isModalVisible && !e.target.closest('.activity-content')) {
      setIsModalVisible(false)
    }
  }

  useEffect(() => {
    const getActivity = async () => {
      try {
        const response = await axios.get('http://localhost:3001/activities')
        const recentActivities = response.data.slice(0, 5)
        setActivity(recentActivities)
      } catch (error) {
        console.error('Error fetching activities:', error)
      }
    }
    getActivity()
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
    }
  }, [isModalVisible])

  const [newActivity, setNewActivity] = useState({
    activityTitle: '',
    activityType: '',
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    console.log(`id: ${id}, value: ${value}`)
    setNewActivity((prevActivity) => ({
      ...prevActivity,
      [id]: value,
    }))
  }

  const handleAddActivity = async () => {
    const { activityTitle, activityIcon, activityDay, activityType } = newActivity
  
    try {
      if (!activityType) {
        console.error('Activity type is required.')
        return
      }
  
      const response = await axios.post('http://localhost:3001/activities', {
        activityTitle,
        activityIcon,
        activityDay,
        activityType,
      })
        const newActivityData = response.data
  
      setActivity((prevActivities) => [newActivityData, ...prevActivities])
        toggleModal()
    } catch (error) {
      console.error('Error adding activity:', error)
    }
  }
  return (
    <div className="Activities">
      <div className="Completed-Activities">
        <div className="activities-grid">
          <button onClick={toggleModal} className="add-activity-btn">
            <img src="./src/assets/icons/PlusIcon.png" alt="Plus Symbol" />
            <h3>ADD ACTIVITY</h3>
          </button>
          {activities &&
            activities.map((activity) => (
              <div key={activity._id} className="activity-card">
                <Link to={`/activities/${activity._id}`} key={activity._id} className="activity-card">
                  <div className="details">
                    <img className="activity-icon" src={activity.activityIcon} alt="Activity Icon" />
                    <h2 className="activity-title">{activity.activityTitle}</h2>
                    <h3 className="activity-day">{activity.activityDay}</h3>
                  </div>
                </Link>
              </div>
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
              </div>
            )}

            {isCustomSelected && (
              <div className="custom-tab">
                <h3>Name of Activity:</h3>
                <input
                  name="string"
                  type="text"
                  id="activityTitle"
                  className="custom-input"
                  value={newActivity.activityTitle}
                  onChange={handleInputChange}
                  maxLength="10"
                />

                <h3>Rest Day:</h3>
                <select
                  name="string"
                  type="text"
                  id="activityIcon"
                  value={newActivity.activityIcon}
                  onChange={handleInputChange}
                >
                  <option value="select">Rest Day?</option>
                  <option value="./src/assets/icons/RestIcon.png">Yes</option>
                  <option value="./src/assets/icons/LiftIcon.png">No</option>
                </select>

                <h3>Day of Workout:</h3>
                <select
                  name="string"
                  type="text"
                  id="activityDay"
                  value={newActivity.activityDay}
                  onChange={handleInputChange}
                >
                  <option value="select">Select Day</option>
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>

                <h3>Type of Workout:</h3>
                <select
                  name="string"
                  type="type"
                  id="activityType"
                  value={newActivity.activityType}
                  onChange={handleInputChange}
                >
                  <option value="Select">Select Type</option>
                  <option value="Upper Body">Upper Body</option>
                  <option value="Lower Body">Lower Body</option>
                  <option value="Full Body">Full Body</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Rest">Rest</option>
                  <option value="Other">Other</option>
                </select>


              </div>
            )}

            <div className="add-activity-btn-container">
              <button onClick={handleAddActivity} className="add-activity-btn">
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
