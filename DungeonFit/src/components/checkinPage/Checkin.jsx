import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setError("");
        },
        (err) => {
          setError(
            "Failed to retrieve your location. Please ensure location services are enabled and try again."
          );
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <>
      <h2>Check-In to gain Bonus XP!</h2>
      <div>
        <button onClick={getUserLocation} className='checkIn-btn'>
          Check In
        </button>
        {location && (
          <div className='checkIn-map'>
            <MapContainer
              center={[location.lat, location.lng]}
              zoom={13}
              style={{ height: "400px", width: "80%" }}
              className='checkIn-map'
            >
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={[location.lat, location.lng]}>
                <Popup>You are here.</Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
        {error && <p>Error: {error}</p>}
      </div>
    </>
  );
};

export default Checkin;
