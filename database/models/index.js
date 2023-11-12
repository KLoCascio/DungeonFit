const mongoose = require('mongoose')
const achievementsSchema = require('./achievement')
const attributeSchema = require('./attribute')
// const currentActivitySchema = require('./currentActivity')
const failureSchema = require('./failure')
// const previousActivitySchema = require('./user')
const userSchema = require('./user')
// const activitiesSchema = require('./activities')
const activitySchema = require('./activities')

const Achievements = mongoose.model('achievements', achievementsSchema)
const Attributes = mongoose.model('attributes', attributeSchema)
// const CurrentActivity = mongoose.model('currentWorkout', currentActivitySchema)
const Failures = mongoose.model('failures', failureSchema)
// const PreviousActivity = mongoose.model('previousWorkouts', previousActivitySchema)
const User = mongoose.model('user', userSchema)
const Activities = mongoose.model('activities', activitySchema)

module.exports = {
    User,
    Achievements,
    Attributes,
    // CurrentActivity,
    Failures,
    // PreviousActivity,
    Activities
  }