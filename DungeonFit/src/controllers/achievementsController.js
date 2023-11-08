const { Achievement } = require('../models');

const getAllAchievements = async (req, res) => {
    try {
        const Achievements = await Achievement.find()
        res.json(Achievements)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createAchievement = async (req, res) => {
    try {
        const Achievements = await new Achievement(req.body)
        await Achievements.save()
        return res.status(201).json({
            Achievements
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteAchievement = async (req, res) => {
    try {
        const id = req.params.id
        const userAchievement = await Achievement.findByIdAndDelete(id)
        if (userAchievement) {
            return res.status(200).send('Comment Deleted')
        }
        throw new Error("Comment not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateAchievement = async (req, res) => {
    try {
        const id = req.params.id
        const AchievementUpdate = await Achievement.findByIdAndUpdate(id, req.body, { new: true })
        if (AchievementUpdate) {
            return res.status(200).json(AchievementUpdate)
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