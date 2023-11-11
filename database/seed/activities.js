const db = require('../db')
const { Activities } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

   const activitiesData = [
      {
        activityDay: "Sunday",
        activityIcon: "../DungeonFit/src/assets/icons/CardioIcon.png",
        activityTitle: "Jogging",
        activityType: "Cardio"
      },
      {
        activityDay: "Monday",
        activityIcon: "DungeonFit/src/assets/icons/LiftIcon.png",
        activityTitle: "Chest Push",
        activityType: "Upper Body"
      },
      {
        activityDay: "Tuesday",
        activityIcon: "../DungeonFit/src/assets/icons/RestIcon.png",
        activityTitle: "Rest",
        activityType: "Rest Day"
      },
      {
        activityDay: "Wednesday",
        activityIcon: "DungeonFit/src/assets/icons/LiftIcon.png",
        activityTitle: "Lats and Triceps",
        activityType: "Upper Body"
      },
      {
        activityDay: "Thursday",
        activityIcon: "DungeonFit/src/assets/icons/LiftIcon.png",
        activityTitle: "Back Pull",
        activityType: "Upper Body"
      },
      {
        activityDay: "Friday",
        activityIcon: "DungeonFit/src/assets/icons/LiftIcon.png",
        activityTitle: "Leg Push",
        activityType: "Lower Body"
      },
      {
        activityDay: "Saturday",
        activityIcon: "DungeonFit/src/assets/icons/LiftIcon.png",
        activityTitle: "Chest and Biceps",
        activityType: "Upper Body"
      },
      {
        activityDay: "Sunday",
        activityIcon: "../DungeonFit/src/assets/icons/RestIcon.png",
        activityTitle: "Rest",
        activityType: "Rest Day"
      },
   ]

   await Activities.insertMany(activitiesData)
   console.log('Created Activities')
}

const run = async () => {
   await main()
   db.close()
}

run()