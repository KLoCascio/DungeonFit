const express = require('express');
const db = require('./db');
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 3001;

const usersController = require('./controllers/');
const attributesController = require('./controllers/');
const currentActivitiesController = require('./controllers/');
const failuresController = require('./controllers/');
const previousActivitiesController = require('./controllers/');
const achievementsController = require('./controllers/');



app.use(methodOverride('_method'))
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.urlencoded( { extended: true}))



app.get('/user', usersController.getAllUsers)
app.post('user', usersController.createUser)
app.delete('/user/:id', usersController.deleteUser)
app.put('/user/:id', usersController.updateUser)

app.get('/attributes', attributesController.getAllAttributes)
app.post('/attributes', attributesController.createAttribute)
app.delete('/attributes/:id', attributesController.deleteAttributes)
app.put('/attributes/:id', attributesController.updateAttributes)

app.get('/current-activity', currentActivitiesController.getCurrentActivity)
app.post('/current-activity', currentActivitiesController.createActivity)
app.delete('/current-activity/:id', currentActivitiesController.deleteCurrentActivity)
app.put('/current-activity/:id', currentActivitiesController.updateCurrentActivity)

app.get('/failures', failuresController.getAllFailures)
app.post('/failures', failuresController.createFailures)
app.delete('/failures/:id', failuresController.deleteFailures)
app.put('/failures/:id', failuresController.updateFailures)

app.get('/previous-activities', previousActivitiesController.getPreviousActivity)
app.post('/previous-activities', previousActivitiesController.createPreviousActivity)
app.delete('/previous-activities/:id', previousActivitiesController.deletePreviousActivity)
app.put('/previous-activities/:id', previousActivitiesController.updatePreviousActivity)

app.get('/achievements', achievementsController.getAllAchievements)
app.post('/achievements', achievementsController.createAchievement)
app.delete('/achievements/:id', achievementsController.deleteAchievement)
app.put('/achievements/:id', achievementsController.updateAchievement)





app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))