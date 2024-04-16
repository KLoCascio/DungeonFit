import React from "react";

const ActivityForm = ({ onSubmit, onCancel }) => {
  return (
    <form className='activity-form' onSubmit={onSubmit}>
      <label htmlFor='activityName'>Activity Name:</label>
      <input type='text' id='activityName' name='activityName' />
      <label htmlFor='description'>Description:</label>
      <textarea id='description' name='description'></textarea>
      <button type='submit'>Submit</button>
      <button type='button' onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default ActivityForm;
