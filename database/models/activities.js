const { Schema } = require('mongoose')

const activitySchema = new Schema(
    {
        activityDay: { type: String, required: true },
        activityIcon: { type: String, required: false },
        activityTitle: { type: String, required: true },
        activityType: { type: String, required: false }
    },
    { timestamps: true }
)

module.exports = activitySchema