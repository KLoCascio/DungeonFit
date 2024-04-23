import React, { useState } from "react";
import {
  GiRunningNinja,
  GiCycling,
  GiWeightLiftingUp,
  GiEnergise,
  GiEmbrassedEnergy,
} from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";

const ActivityForm = ({ onSubmit, onCancel }) => {
  const iconOptions = [
    { label: "Running", IconComponent: GiRunningNinja },
    { label: "Biking", IconComponent: GiCycling },
    { label: "Strength", IconComponent: GiWeightLiftingUp },
    { label: "Calisthenics", IconComponent: IoFitnessOutline },
    { label: "Yoga", IconComponent: GiEmbrassedEnergy },
    { label: "Rest", IconComponent: GiEnergise },
  ];

  const [formData, setFormData] = useState({
    activityName: "",
    activityType: "",
    bodyPart: "",
    timeFrame: "",
    distance: "",
    sets: "",
    reps: "",
    activityIcon: "",
  });

  const handleChange = (iconLabel) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      activityIcon: iconLabel,
    }));
  };

  // const handleIconSelect = (iconName) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     activityIcon: iconName,
  //   }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted with:", formData);
    onSubmit(formData);
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <form className='activity-form' onSubmit={handleSubmit}>
          <label htmlFor='activityName'>Name of Activity:</label>
          <input
            type='text'
            id='activityName'
            name='activityName'
            className='checkIn-modal-input'
            value={formData.activityName}
            onChange={handleChange}
          />

          <div className='icon-selection'>
            {iconOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => handleIconSelect(option.label)}
                type='button'
                className={
                  formData.activityIcon === option.label
                    ? "icon-button selected"
                    : "icon-button"
                }
              >
                <option.IconComponent size={30} />
                <span>{option.label}</span>
              </button>
            ))}
          </div>

          <label htmlFor='activityType'>Type of Activity:</label>
          <select
            id='activityType'
            name='activityType'
            className='checkIn-modal-input'
            value={formData.activityType}
            onChange={handleChange}
          >
            <option value=''>Select a Type</option>
            <option value='Running'>Running</option>
            <option value='Biking'>Biking</option>
            <option value='Strength'>Strength</option>
            <option value='Calisthenics'>Bodyweight</option>
            <option value='Yoga'>Yoga</option>
            <option value='Resting'>Resting</option>
          </select>

          <label htmlFor='bodyPart'>Part of Body:</label>
          <select
            id='bodyPart'
            name='bodyPart'
            className='checkIn-modal-input'
            value={formData.bodyPart}
            onChange={handleChange}
          >
            <option value=''>Select a part of the body</option>
            <option value='Upper'>Upper Body</option>
            <option value='Lower'>Lower Body</option>
            <option value='Whole'>Whole Body</option>
          </select>

          <label htmlFor='timeFrame'>Timeframe to Complete:</label>
          <select
            id='timeFrame'
            name='timeFrame'
            className='checkIn-modal-input'
            value={formData.timeFrame}
            onChange={handleChange}
          >
            <option value=''>Select a Timeframe</option>
            <option value='1 hour'>1 hour</option>
            <option value='2 hours'>2 hours</option>
            <option value='3 hours'>3 hours</option>
            <option value='4 hours'>4 hours</option>
            <option value='5 hours'>5 hours</option>
          </select>

          <label htmlFor='distance'>Distance:</label>
          <select
            id='distance'
            name='distance'
            className='checkIn-modal-input'
            value={formData.distance}
            onChange={handleChange}
          >
            <option value=''>Select a Distance</option>
            <option value='Quarter'>1/4 mile</option>
            <option value='Half'>1/2 mile</option>
            <option value='1 mile'>1 mile</option>
            <option value='2 miles'>2 miles</option>
            <option value='3 miles'>3 miles</option>
            <option value='4 miles'>4 miles</option>
            <option value='5 miles'>5 miles</option>
            <option value='10 miles'>10 miles</option>
          </select>

          <label htmlFor='sets'>Number of Sets:</label>
          <select
            id='sets'
            name='sets'
            className='checkIn-modal-input'
            value={formData.sets}
            onChange={handleChange}
          >
            <option value=''>Select # of Sets</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>

          <label htmlFor='reps'>Number of Reps:</label>
          <select
            id='reps'
            name='reps'
            className='checkIn-modal-input'
            value={formData.reps}
            onChange={handleChange}
          >
            <option value=''>Select # of Reps</option>
            <option value='5'>5 Reps</option>
            <option value='10'>10 Reps</option>
            <option value='15'>15 Reps</option>
            <option value='20'>20 Reps</option>
          </select>

          <button className='checkIn-btn-back' type='button' onClick={onCancel}>
            Back
          </button>

          <button className='checkIn-btn-modal' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActivityForm;
