const { Schema } = require("mongoose");

const activitySchema = new Schema(
  {
    activityName: { type: String, required: true },
    activityType: { type: String, required: true },
    bodyPart: { type: String, required: false },
    timeFrame: { type: String, required: false },
    distance: { type: String, required: false },
    sets: { type: Number, required: false },
    reps: { type: Number, required: false },
  },
  { timestamps: true }
);

module.exports = activitySchema;
