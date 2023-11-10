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
         class: 'Ranger',
         level: 50,
         achievements: []
      },
      {
         userName: "GluteGoblin",
         password: 'erwer',
         confirmPassword: true,
         class: 'Druid',
         level: 55,
         achievements: []
      },
      {
         userName: "FitKing",
         password: 'werwer',
         confirmPassword: true,
         class: 'Bard',
         level: 68,
         achievements: []
      },
      {
         userName: "SneakySquatter",
         password: 'erwr',
         confirmPassword: true,
         class: 'Rogue',
         level: 1,
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