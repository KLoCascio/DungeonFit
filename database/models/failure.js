const { Schema } = require('mongoose')

const failureSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = failureSchema