const { Schema } = require('mongoose')

const attributeSchema = new Schema(
    {
        endurance: { type: Number, required: true },
        strength: { type: Number, required: true },
        willpower: { type: Number, required: true },
        charisma: { type: Number, required: true },
        dexterity: { type: Number, required: true },
        agility: { type: Number, required: true },
        userid: { type: Schema.Types.ObjectId, ref: 'user', required: true }
    },
    { timestamps: true }
)

module.exports = attributeSchema