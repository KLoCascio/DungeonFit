const CheckIn = require("../models/checkIn");

// Post a new check-in
exports.createCheckIn = async (req, res) => {
  try {
    const newCheckIn = new CheckIn({
      user: req.body.user,
      activity: req.body.activity,
      location: req.body.location,
    });
    await newCheckIn.save();
    res.status(201).json(newCheckIn);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating check-in", error: error.message });
  }
};

// Get all check-ins
exports.getAllCheckIns = async (req, res) => {
  try {
    const checkIns = await CheckIn.find().populate("user").populate("activity");
    res.status(200).json(checkIns);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching check-ins", error: error.message });
  }
};
