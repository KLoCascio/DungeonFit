const db = require('../db')
const { User } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

   const userData = [
      {
        type: { type: String, required: true },
        durationInSeconds: { type: Number, required: true  },
        avgHeartRate: { type: Number, required: true },
        distance: { type: Number, required: true },
        weight: { type: Number, required: true },
        repititions: { type: Number, required: true },
        changesInElevation: { type: Number }
      }
   ]

   await User.insertMany(userData)
   console.log('created User')
}

const run = async () => {
   await main()
   db.close()
}

run()