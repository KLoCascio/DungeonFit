const db = require('../db')
const { User } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

   const userData = [
      {
         userName: "Asger1415",
         password: 'werwer',
         userClass: 'Ranger',
         userLevel: 50,
         achievements: [],
         health: 100,
         mana: 20,
         exp: 100000000,
         attributes: [{ 
            endurance: 10,
            strength: 5,
            willpower: 5,
            charisma: 5,
            dexterity: 10,
            agility: 10
          }]
      },
      {
         userName: "GluteGoblin",
         password: 'erwer',
         userClass: 'Druid',
         userLevel: 55,
         achievements: [],
         health: 100,
         mana: 20,
         exp: 100000000,
         attributes: [{ 
            endurance: 10,
            strength: 5,
            willpower: 5,
            charisma: 5,
            dexterity: 10,
            agility: 10
          }]
      },
      {
         userName: "FitKing",
         password: 'werwer',
         userClass: 'Bard',
         userLevel: 68,
         achievements: [],
         health: 100,
         mana: 20,
         exp: 100000000,
         attributes: [{ 
            endurance: 10,
            strength: 5,
            willpower: 5,
            charisma: 5,
            dexterity: 10,
            agility: 10
          }]
      },
      {
         userName: "SneakySquatter",
         password: 'erwr',
         userClass: 'Rogue',
         userLevel: 1,
         achievements: [],
         health: 100,
         mana: 20,
         exp: 100000000,
         attributes: [{ 
            endurance: 10,
            strength: 5,
            willpower: 5,
            charisma: 5,
            dexterity: 10,
            agility: 10
          }]
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