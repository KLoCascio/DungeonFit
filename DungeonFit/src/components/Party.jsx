import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Calendar from "react-calendar";
// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'
import axios from "axios";
import { DateRangePicker } from "react-date-range";

export default function Party() {
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [challengeName, setChallengeName] = useState("")
  const [challengeDescription, setChallengeDescription] = useState("")
  const [groupMembers, setGroupMembers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchAllUsers();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    const newMember = { id: Date.now() }
    setGroupMembers((prevMembers) => [...prevMembers])
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const closeOnOutsideClick = (e) => {
    if (isModalVisible && !e.target.closest('.activity-content')) {
      setIsModalVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
    }
  }, [isModalVisible])

  return (
    <div className="Party">
      {/* map function to show everyone added to your group? */}
      <div className="members">
        <h4>Members:</h4>
        <ul>
          <li>Asger1415 - Ranger</li>
          <li>GluteGoblin - Druid</li>
          <li>Ferocious Fiddler - Barbaric Bard</li>
          <li>SneakySquatter - Rogue</li>
        </ul>

        <button className="add-members">
          <Link to="/invite">Invite</Link>
        </button>

        <button onClick={toggleModal} className="add-members">Calendar</button>
      </div>

      {isModalVisible && (
        <div id="activity-modal" className="activity-modal">
          <div className="activity-content">
            <h3>Setup Party Challenge</h3>
            <form className="challenge">
              <label htmlFor="challenge-name">Pick a Name for Challenge:</label>
              <br />
              <input
                type="text"
                id="challenge"
                className="challenge-name"
                placeholder="Name of challenge..."
                value={challengeName}
                onChange={(e) => setChallengeName(e.target.value)}
              />
              <br />

              <label htmlFor="challenge-description">Challenge Description</label>
              <br />
              <input
                type="text"
                id="description"
                className="challenge-description"
                placeholder="description"
                value={challengeDescription}
                onChange={(e) => setChallengeDescription(e.target.value)}
              />

              <div className="challenge-duration">
                <h2 className="calendar-header">Select Challenge Duration:</h2>
                <div className="calendar-container">
                  <Calendar onChange={setDate} value={date} />
                </div>
                <div className="selected-date-center">
                  Selected date: {date.toDateString()}
                </div>
              </div>
              <button type="submit" className="add-members">Submit Challenge!</button>
            </form>
          </div>
          </div>)}
        </div>
  );
}
