const { Schema } = require("mongoose");

const checkInSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  activity: { type: Schema.Types.ObjectId, ref: "Activities", required: false },
  location: {
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = checkInSchema;
