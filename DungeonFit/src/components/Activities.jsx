// Activities.jsx

import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function Activities() {
  let { cats } = useParams()
  const [activities, setActivity] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isActivitySelected, setIsActivitySelected] = useState(true)
  const [isCustomSelected, setIsCustomSelected] = useState(false)
  // const [isLevelOneSelected, setIsLevelOneSelected] = useState(true)
  // const [isLevelTwoSelected, setIsLevelTwoSelected] = useState(false)
  // const [isLevelThreeSelected, setIsLevelThreeSelected] = useState(false)

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

  // Add Activity Function Here
  const handleAddActivity = async () => {
    const { activityTitle, activityIcon, activityDay, activityType } = newActivity;
  
    try {
      // Check if activityType is provided; modify this condition based on your validation needs
      if (!activityType) {
        console.error('Activity type is required.');
        return;
      }
  
      const response = await axios.post('http://localhost:3001/activities', {
        activityTitle,
        activityIcon,
        activityDay,
        activityType,
      });
  
      // Assuming the response includes the newly added activity data
      const newActivityData = response.data;
  
      // Update the state with the newly added activity
      setActivity((prevActivities) => [newActivityData, ...prevActivities]);
  
      // Close the modal
      toggleModal();
    } catch (error) {
      console.error('Error adding activity:', error);
    }
  };
  
  
  // Update Activity Function
  const handleUpdateActivity = async (activityId) => {
    const newTitle = prompt('Enter the new title for the activity:')
    if (newTitle !== null) {
      try {
        const response = await axios.put(`http://localhost:3001/activities/${activityId}`, {
          activityTitle: newTitle,
        })

        // Update the activities in the state with the new title
        const updatedActivities = activities.map((activity) =>
          activity._id === activityId ? { ...activity, activityTitle: newTitle } : activity
        )
        setActivity(updatedActivities)
      } catch (error) {
        console.error('Error updating activity:', error)
      }
    }
  }

  // Delete Activity Function
  const handleDeleteActivity = async (activityId) => {
    try {
      await axios.delete(`http://localhost:3001/activities/${activityId}`)

      // Optionally, you can re-fetch the updated list of activities after deletion
      const updatedActivities = activities.filter((activity) => activity._id !== activityId)
      setActivity(updatedActivities)
    } catch (error) {
      console.error('Error deleting activity:', error)
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
                <button onClick={() => handleUpdateActivity(activity._id)} className="update-button">
                  Update
                </button>
                <button onClick={() => handleDeleteActivity(activity._id)} className="delete-button">
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* MODAL SECTION */}
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
                  <option value="select">Select Icon</option>
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

            {/* <h3>Difficulty Level:</h3>
            <div className="difficulty-btn-container">
              <button onClick={toggleLevelOne} className="difficulty-btn">
                Level 1
              </button>
              <button onClick={toggleLevelTwo} className="difficulty-btn">
                Level 2
              </button>
              <button onClick={toggleLevelThree} className="difficulty-btn">
                Level 3
              </button>
            </div> */}
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
