const { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        userName: { type: String, required: true },
        password: { type: String, required: true },
        userClass: { type: String },
        userLevel: { type: Number },
        achievements: [{ type: Schema.Types.ObjectId, ref: 'achievements'}],
        health: { type: Number },
        mana: { type: Number },
        exp: { type: Number },
        attributes: [{ type: Object }]
    },
    { timestamps: true }
)

module.exports = userSchema