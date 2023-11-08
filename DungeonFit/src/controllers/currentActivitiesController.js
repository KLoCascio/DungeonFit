const { CurrentActivity } = require('../models');

const getCurrentActivity = async (req, res) => {
    try {
        const CurrentActivities = await CurrentActivity.find()
        res.json(CurrentActivities)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createActivity = async (req, res) => {
    try {
        const Activities = await new CurrentActivity(req.body)
        await Activities.save()
        return res.status(201).json({
            comment
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteCurrentActivity = async (req, res) => {
    try {
        const id = req.params.id
        const CurrentActivity = await CurrentActivity.findByIdAndDelete(id)
        if (CurrentActivity) {
            return res.status(200).send('Activity Deleted')
        }
        throw new Error("Activity not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateCurrentActivity = async (req, res) => {
    try {
        const id = req.params.id
        const CurrentActivityUpdate = await CurrentActivity.findByIdAndUpdate(id, req.body, { new: true })
        if (CurrentActivityUpdate) {
            return res.status(200).json(CurrentActivityUpdate)
        } 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports = {
    getCurrentActivity,
    createActivity,
    deleteCurrentActivity,
    updateCurrentActivity
}