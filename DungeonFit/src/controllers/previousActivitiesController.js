const { PreviousActivity } = require('../models');

const getPreviousActivity = async (req, res) => {
    try {
        const PreviousActivities = await PreviousActivity.find()
        res.json(PreviousActivities)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPreviousActivity = async (req, res) => {
    try {
        const PreviousActivities = await new PreviousActivity(req.body)
        await PreviousActivities.save()
        return res.status(201).json({
            PreviousActivities
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deletePreviousActivity = async (req, res) => {
    try {
        const id = req.params.id
        const PreviousActivities = await PreviousActivity.findByIdAndDelete(id)
        if (PreviousActivities) {
            return res.status(200).send('Previous activity Deleted')
        }
        throw new Error("Previous activity not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updatePreviousActivity = async (req, res) => {
    try {
        const id = req.params.id
        const PreviousActivities = await PreviousActivity.findByIdAndUpdate(id, req.body, { new: true })
        if (PreviousActivities) {
            return res.status(200).json(Users)
        } 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports = {
    getPreviousActivity,
    createPreviousActivity,
    deletePreviousActivity,
    updatePreviousActivity
}