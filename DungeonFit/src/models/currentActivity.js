const { Schema } = require('mongoose')

const currentActivitySchema = new Schema(
    {
        type: { type: String, required: true },
        durationInSeconds: { type: Number, required: true  },
        avgHeartRate: { type: Number, required: true },
        distance: { type: Number, required: true },
        weight: { type: Number, required: true },
        repititions: { type: Number, required: true },
        changesInElevation: { type: Number }
    },
    { timestamps: true }
)

module.exports = currentActivitySchema