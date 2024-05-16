import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import ActivityForm from "../activityPage/ActivityForm";

import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const Checkin = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setError("");
          setLoading(false);
        },
        (err) => {
          setError(
            "Failed to retrieve your location. Please ensure location services are enabled and try again."
          );
          console.error(err);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  };

  const handleCreateActivity = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/activities",
        formData
      );
      console.log("Server response:", response.data);
      setShowForm(false);
      setLocation(null);
    } catch (err) {
      console.error("Failed to submit activity:", err);
      setSubmissionError("Failed to submit activity. Please try again");
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <>
      <h2>Check-In to gain Bonus XP!</h2>
      <div>
        <button onClick={getUserLocation} className='checkIn-btn'>
          Check In
        </button>
        {loading && <div className='loading-spinner'></div>}
        {location && (
          <>
            <div className='checkIn-map'>
              <MapContainer
                center={[location.lat, location.lng]}
                zoom={13}
                style={{ height: "300px", width: "50%" }}
                className='checkIn-map'
                whenReady={() => setLoading(false)}
              >
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker position={[location.lat, location.lng]}>
                  <Popup>You are here.</Popup>
                </Marker>
              </MapContainer>
            </div>
            <button onClick={handleCreateActivity} className='checkIn-btn'>
              Create Activity
            </button>
            {showForm && (
              <div className='modal-overlay'>
                <div className='modal-content'>
                  <button onClick={handleCancel} className='modal-close'>
                    &times;
                  </button>
                  <ActivityForm
                    onSubmit={handleFormSubmit}
                    onCancel={handleCancel}
                  />
                </div>
              </div>
            )}
          </>
        )}
        {error && <p>Error: {error}</p>}
        {submissionError && <p className='error-message'>{submissionError}</p>}
      </div>
    </>
  );
};

export default Checkin;
