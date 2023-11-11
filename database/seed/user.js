const db = require('../db')
const { User } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

   const userData = [
      {
         userName: "Asger1415",
         password: 'werwer',
         confirmPassword: true,
         userClass: 'Ranger',
         userLevel: 50,
         achievements: []
      },
      {
         userName: "GluteGoblin",
         password: 'erwer',
         confirmPassword: true,
         userClass: 'Druid',
         userLevel: 55,
         achievements: []
      },
      {
         userName: "FitKing",
         password: 'werwer',
         confirmPassword: true,
         userClass: 'Bard',
         userLevel: 68,
         achievements: []
      },
      {
         userName: "SneakySquatter",
         password: 'erwr',
         confirmPassword: true,
         userClass: 'Rogue',
         userLevel: 1,
         achievements: []
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