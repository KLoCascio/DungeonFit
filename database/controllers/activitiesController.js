const { Activities } = require('../models')

async function getActivity(req, res) {
    try {
        const activities = await Activities.find()
        res.status(200).send(activities)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getActivityById(req, res) {
    try {
        const activity = await Activities.findById(req.params.id)
        res.status(200).send(activity)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function createActivity(req, res) {
    try {
        const newActivity = await new Activity(req.body);
        const savedActivity = await newActivity.save();
        return res.status(201).json(savedActivity);
    } catch (e) {
        console.error('Error creating activity:', e);
        console.error('Request Body:', req.body); 
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function updateActivity(req, res) {
    try {
        const id = req.params.id
        const updatedActivity = await Activities.findByIdAndUpdate(id, req.body, { new: true })
        if (updatedActivity) {
            return res.status(200).json(updatedActivity)
        }
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function deleteActivity(req, res) {
    try {
        const id = req.params.id
        const deletedActivity = await Activities.findByIdAndDelete(id, req.body, { new: true })
        if (deletedActivity) {
            return res.status(200).send('Activity Deleted')
        }
        throw new Error("Activity not found")
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

module.exports = {
    getActivity,
    getActivityById,
    createActivity,
    updateActivity,
    deleteActivity
}
