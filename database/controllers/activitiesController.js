const { Activities } = require("../models/index");

// Get all activities
async function getActivity(req, res) {
  try {
    const activities = await Activities.find();
    res.status(200).json(activities);
  } catch (e) {
    console.error("Error fetching activities:", e);
    return res.status(500).json({ error: e.message });
  }
}

// Get a single activity by ID
async function getActivityById(req, res) {
  try {
    const activity = await Activities.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }
    res.status(200).send(activity);
  } catch (e) {
    console.error("Error fetching activity:", e);
    return res.status(500).json({ error: e.message });
  }
}

// Create a new activity
async function createActivity(req, res) {
  try {
    console.log("Received data for new activity:", req.body);
    const newActivity = await new Activities(req.body);
    await newActivity.save();
    return res.status(201).json(newActivity);
  } catch (e) {
    console.error("Error creating activity:", e);
    console.error("Request Body:", req.body);
    return res.status(500).json({ error: e.message });
  }
}

// Update an existing activity
async function updateActivity(req, res) {
  try {
    const { id } = req.params;
    const updatedActivity = await Activities.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedActivity) {
      return res.status(404).json({ error: "Activity not found" });
    }
    res.status(200).json(updatedActivity);
  } catch (e) {
    console.error("Error updating activity:", e);
    return res.status(500).json({ error: e.message });
  }
}

// Delete an activity
async function deleteActivity(req, res) {
  try {
    const { id } = req.params;
    const deletedActivity = await Activities.findByIdAndDelete(id);
    if (!deletedActivity) {
      return res.status(404).json({ error: "Activity not found" });
    }
    res.status(200).json({ message: "Activity deleted", id });
  } catch (e) {
    console.error("Error deleting activity:", e);
    return res.status(500).json({ error: e.message });
  }
}

module.exports = {
  getActivity,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
};
