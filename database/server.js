const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 3001

const activitiesController = require('./controllers/activitiesController')
const usersController = require('./controllers/usersController')

// const currentActivitiesController = require('./controllers/currentActivitiesController')
// const previousActivitiesController = require('./controllers/previousActivitiesController')


app.use(methodOverride('_method'))
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.urlencoded( { extended: true}))

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Internal Server Error' })
  })

app.get('/user', usersController.getAllUsers)
app.post('/user', usersController.createUser)
app.delete('/user/:id', usersController.deleteUser)
app.put('/user/:id', usersController.updateUser)

app.post('/register', usersController.registerUser)

app.get('/activities', activitiesController.getActivity)
app.get('/activities/:id', activitiesController.getActivityById)
app.post('/activities', activitiesController.createActivity)
app.delete('/activities/:id', activitiesController.deleteActivity)
app.put('/activities/:id', activitiesController.updateActivity)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))