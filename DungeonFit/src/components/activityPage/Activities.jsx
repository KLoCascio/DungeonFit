import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ActivityForm from "./ActivityForm";
import {
  GiRunningNinja,
  GiCycling,
  GiWeightLiftingUp,
  GiEnergise,
  GiEmbrassedEnergy,
} from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";

const icons = {
  Running: GiRunningNinja,
  Biking: GiCycling,
  Strength: GiWeightLiftingUp,
  Calisthenics: IoFitnessOutline,
  Yoga: GiEmbrassedEnergy,
  Rest: GiEnergise,
};

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await axios.get("http://localhost:3001/activities");
      setActivities(response.data);
    } catch (error) {
      console.error("Error fetching activities:", error);
      setError("Failed to load activities.");
    }
  };

  const handleModalToggle = () => {
    setModalVisible(!modalVisible);
  };

  const handleAddActivity = async (newActivityData) => {
    console.log("Submitting:", newActivityData);
    try {
      const response = await axios.post(
        "http://localhost:3001/activities",
        newActivityData
      );
      setActivities((prevActivities) => [response.data, ...prevActivities]);
      handleModalToggle();
    } catch (error) {
      console.error("Error adding activity:", error);
      setError("Failed to add activity.");
    }
  };

  return (
    <div className='Activities'>
      <button onClick={handleModalToggle} className='add-activity-btn'>
        {/* THIS BUTTON NEEDS TO BE ADJUSTED */}
        <img src='./src/assets/icons/PlusIcon.png' alt='Plus Symbol' />
        Add Activity
      </button>
      {error && <div className='error-message'>{error}</div>}
      {modalVisible && (
        <ActivityForm
          onSubmit={handleAddActivity}
          onCancel={handleModalToggle}
        />
      )}
      <div className='activities-grid'>
        {activities.map((activity) => (
          <Link
            to={`/activities/${activity._id}`}
            key={activity._id}
            className='activity-card'
          >
            {icons[activity.activityIcon] ? (
              React.createElement(icons[activity.activityIcon], { size: 40 })
            ) : (
              <span>No Icon</span>
            )}
            <div>
              <h2>{activity.activityName}</h2>
              <h3>{activity.activityType}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
