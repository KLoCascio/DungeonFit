const { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        userName: { type: String, required: true },
        password: { type: String, required: true },
        confirmPassword: { type: Boolean, required: true },
        userClass: { type: String, required: true },
        userLevel: { type: Number, required: true},
        achievements: [{ type: Schema.Types.ObjectId, ref: 'achievements'}]
    },
    { timestamps: true }
)

module.exports = userSchema