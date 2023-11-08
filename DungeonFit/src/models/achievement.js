const { Schema } = require('mongoose')

const achievementsSchema = new Schema(
    {
        title: { type: String, required: true },
        prerequisites: { type: String, reuired: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = achievementsSchema