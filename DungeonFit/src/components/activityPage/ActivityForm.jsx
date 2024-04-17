import React from "react";

const ActivityForm = ({ onSubmit, onCancel }) => {
  return (
    <form className='activity-form' onSubmit={onSubmit}>
      <label htmlFor='activityName'>Name of Activity:</label>
      <input type='text' id='activityName' name='activityName' />

      <label htmlFor='activityType'>Type of Activity:</label>
      <input type='text' id='activityType' name='activityType' />

      <label htmlFor='bodyPart'>Part of Body:</label>
      <input type='text' id='bodyPart' name='bodyPart' />

      <label htmlFor='timeFrame'>Timeframe to Complete:</label>
      <input type='text' id='timeFrame' name='timeFrame' />

      <label htmlFor='distance'>Distance:</label>
      <input type='text' id='distance' name='distance' />

      <label htmlFor='sets'>Number of Sets:</label>
      <input type='text' id='sets' name='sets' />

      <label htmlFor='reps'>Number of Reps:</label>
      <input type='text' id='reps' name='reps' />

      <button className='checkIn-btn' type='button' onClick={onCancel}>
        Back
      </button>

      <button className='checkIn-btn' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default ActivityForm;
