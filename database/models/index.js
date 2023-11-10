const mongoose = require('mongoose')
const achievementSchema = require('./achievement')
const attributeSchema = require('./attribute')
const currentActivitySchema = require('./currentActivity')
const failureSchema = require('./failure')
const previousActivitySchema = require('./user')
const userSchema = require('./user')

const Achievement = mongoose.model('achievement', achievementSchema)
const Attributes = mongoose.model('attributes', attributeSchema)
const CurrentActivity = mongoose.model('currentWorkout', currentActivitySchema)
const Failures = mongoose.model('failures', failureSchema)
const PreviousActivity = mongoose.model('previousWorkouts', previousActivitySchema)
const User = mongoose.model('user', userSchema)

module.exports = {
    User,
    Achievement,
    Attributes,
    CurrentActivity,
    Failures,
    PreviousActivity
  }