import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ActivityForm from "./ActivityForm";

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  // const [selectedTab, setSelectedTab] = useState("activity");
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

  // const handleTabChange = (tab) => {
  //   setSelectedTab(tab);
  // };

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
      <button
        onClick={() => setModalVisible(true)}
        className='add-activity-btn'
      >
        <img src='./src/assets/icons/PlusIcon.png' alt='Plus Symbol' />
        Add Activity
      </button>
      {error && <div className='error-message'>{error}</div>}
      {modalVisible && (
        <ActivityForm
          onSubmit={handleAddActivity}
          onCancel={() => setModalVisible(false)}
        />
      )}
      <div className='activities-grid'>
        {activities.map((activity) => (
          <Link
            to={`/activities/${activity._id}`}
            key={activity._id}
            className='activity-card'
          >
            <img
              className='activity-icon'
              src={activity.activityIcon}
              alt='Activity Icon'
            />
            <div>
              <h2>{activity.activityTitle}</h2>
              <h3>{activity.activityDay}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
