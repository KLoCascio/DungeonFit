const { Schema } = require('mongoose')

const achievementsSchema = new Schema(
    {
        achieveIcon: { type: String, required: true },
        achieveTitle: { type: String, required: true },
        achieveDescription: { type: String, required: true },
        achievePrereq: { type: String, reuired: false },
    },
    { timestamps: true }
)

module.exports = achievementsSchema