const db = require('../db')
const { User } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

   const userData = [
      {
         userName: "Asger1415",
         password: 'werwer',
         class: 'Ranger',
         level: 50,
         achievements: [],
         health: 110,
         mana: 10,
         exp: 1000000000

      },
      {
         userName: "GluteGoblin",
         password: 'erwer',
         class: 'Druid',
         level: 55,
         achievements: [],
         health: 100,
         mana: 70,
         exp: 100000
      },
      {
         userName: "FitKing",
         password: 'werwer',
         class: 'Bard',
         level: 68,
         achievements: [],
         health: 100,
         mana: 50,
         exp: 10
      },
      {
         userName: "SneakySquatter",
         password: 'erwr',
         class: 'Rogue',
         level: 1,
         achievements: [],
         health: 100,
         mana: 5,
         exp: 35000000
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