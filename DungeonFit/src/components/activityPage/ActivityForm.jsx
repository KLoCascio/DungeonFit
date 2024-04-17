import React, { useState } from "react";

const ActivityForm = ({ onSubmit, onCancel }) => {
  const [activityType, setActivityType] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [distance, setDistance] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const handleActivityTypeChange = (event) => {
    setActivityType(event.target.value);
  };
  const handleBodyPartChange = (event) => {
    setBodyPart(event.target.value);
  };
  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };
  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };
  const handleSetsChange = (event) => {
    setSets(event.target.value);
  };
  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  return (
    <form className='activity-form' onSubmit={onSubmit}>
      <label htmlFor='activityName'>Name of Activity:</label>
      <input
        type='text'
        id='activityName'
        name='activityName'
        className='checkIn-modal-input'
      />

      <label htmlFor='activityType'>Type of Activity:</label>
      <select
        id='activityType'
        name='activityType'
        className='checkIn-modal-input'
        value={activityType}
        onChange={handleActivityTypeChange}
      >
        <option value=''>Select a Type</option>
        <option value='Cardio'>Cardio</option>
        <option value='Strength'>Strength</option>
        <option value='Calisthenics'>Bodyweight</option>
        <option value='Flexibility'>Flexibility</option>
      </select>

      <label htmlFor='bodyPart'>Part of Body:</label>
      <select
        id='bodyPart'
        name='bodyPart'
        className='checkIn-modal-input'
        value={bodyPart}
        onChange={handleBodyPartChange}
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
        value={timeFrame}
        onChange={handleTimeFrameChange}
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
        value={distance}
        onChange={handleDistanceChange}
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
        value={sets}
        onChange={handleSetsChange}
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
        value={reps}
        onChange={handleRepsChange}
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
  );
};

export default ActivityForm;
