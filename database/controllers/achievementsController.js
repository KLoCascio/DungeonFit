const { Achievements } = require('../models')

const getAllAchievements = async (req, res) => {
    try {
        const achievements = await Achievements.find()
        res.json(achievements)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createAchievement = async (req, res) => {
    try {
        const achievement = new Achievements(req.body)
        await achievement.save()
        return res.status(201).json({
            achievement
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteAchievement = async (req, res) => {
    try {
        const id = req.params.id
        const userAchievement = await Achievements.findByIdAndDelete(id)
        if (userAchievement) {
            return res.status(200).send('Achievement Deleted')
        }
        throw new Error("Achievement not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateAchievement = async (req, res) => {
    try {
        const id = req.params.id
        const achievementUpdate = await Achievements.findByIdAndUpdate(id, req.body, { new: true })
        if (achievementUpdate) {
            return res.status(200).json(achievementUpdate)
        } 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllAchievements,
    createAchievement,
    deleteAchievement,
    updateAchievement
}