import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

// data: activities, activityIcon, activityTitle, idActivity, activityType
// activiities.activityTitle, activities.activityIcon

// I couldn't get the activity-btn and custom-btn to change to #652f7b when active.

export default function Activities() {
  // activity grid
  let { cats } = useParams()
  const [activities, setActivity] = useState([])


  // activity modal
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isActivitySelected, setIsActivitySelected] = useState(true)
  const [isCustomSelected, setIsCustomSelected] = useState(false)
  const [isLevelOneSelected, setIsLevelOneSelected] = useState(true)
  const [isLevelTwoSelected, setIsLevelTwoSelected] = useState(false)
  const [isLevelThreeSelected, setIsLevelThreeSelected] = useState(false)


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

  // activity grid
  useEffect(() => {
    const getActivity = async () => {
      try {
        const response = await axios.get('http://localhost:3001/activities')
        const recentActivities = response.data.slice(0, 5)
        response.data.forEach(activity => {
          console.log(activity)
        })
        setActivity(recentActivities)
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

  // New Custom Activity
  const [newActivity, setNewActivity] = useState({
    activityTitle: '',
    activityType: '',
  })
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setNewActivity((Activity) => ({
      Activity,
      [id]: value,
    }))
  }
  const handleAddActivity = () => {
    if (newActivity.activityTitle && newActivity.activityType) {
      console.log("Activity:", newActivity)
      setNewActivity({
        activityTitle: '',
        activityType: '',
      })
      setIsModalVisible(false)
    } else {
      alert('Please Make All Selections')
      console.log('Please Make All Selections')
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
          {activities && activities.map((activity) => (
            <Link to={`/activities/${activity._id}`} key={activity._id} className="activity-card">
              <div className="details">
                <img className="activity-icon" src={activity.activityIcon} alt="Activity Icon" />
                <h2 className="activity-title">{activity.activityTitle}</h2>
                <h3 className="activity-day">{activity.activityDay}</h3>
              </div>
            </Link>
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
                  type="text"
                  id="activityTitle"
                  className="custom-input"
                  value={newActivity.activityTitle}
                  onChange={handleInputChange}
                  maxLength="10" />

                {/* Upper Body, Lower Body, Full Body, Cardio, Rest, Other */}
                {/* UpperBodyIcon.svg, LowerBodyIcon.svg, FullBodyIcon.svg, CardioIcon.svg, RestIcon.svg, OtherIcon.svg */}
                {/* Corresponding Icons to Upper Body, Lower Body, Full Body Cardio, Rest, Other */}

                <h3>Type of Activity:</h3>
                <select
                  name="activity-type-select"
                  id="activity-type-select"
                  value={newActivity.activityType}
                  onChange={handleInputChange}>
                  <option value="select">Select Type</option>
                  <option value="upper-body">Upper Body</option>
                  <option value="lower-body">Lower Body</option>
                  <option value="whole-body">Whole Body</option>
                  <option value="cardio">Cardio</option>
                </select>

              </div>
            )}

            <h3>Difficulty Level:</h3>
            <div className="difficulty-btn-container">
              <button onClick={toggleLevelOne} className="difficulty-btn">Level 1</button>
              <button onClick={toggleLevelTwo} className="difficulty-btn">Level 2</button>
              <button onClick={toggleLevelThree} className="difficulty-btn">Level 3</button>
            </div>
            <div className="add-activity-btn-container">
              <button type='submit' onClick={handleAddActivity}
                className="add-activity-btn">ADD</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

