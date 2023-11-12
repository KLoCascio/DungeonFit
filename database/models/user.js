const { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        userName: { type: String, required: true },
        password: { type: String, required: true },
        userClass: { type: String, required: true },
        userLevel: { type: Number, required: true},
        achievements: [{ type: Schema.Types.ObjectId, ref: 'achievements'}],
        health: { type: Number, required: true },
        mana: { type: Number, required: true },
        exp: { type: Number, required: true },
        attributes: [{ type: Object }]
    },
    { timestamps: true }
)

module.exports = userSchema