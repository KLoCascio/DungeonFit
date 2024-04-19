const mongoose = require("mongoose");
const db = require("../db");
const Activities = require("../models/activities");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const seedActivities = [
  {
    activityName: "Jogging",
    activityType: "Cardio",
    bodyPart: "Lower",
    timeFrame: 1,
    distance: 5,
    sets: 1,
    reps: 1,
  },
  {
    activityName: "Push Ups",
    activityType: "Strength",
    bodyPart: "Upper",
    timeFrame: 1,
    distance: 0,
    sets: 3,
    reps: 20,
  },
];

const seedDB = async () => {
  await db;
  await Activities.deleteMany({});
  await Activities.insertMany(seedActivities);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB().catch((err) => {
  console.error("Failed to seed database:", err);
  mongoose.connection.close();
});
