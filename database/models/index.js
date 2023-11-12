const mongoose = require('mongoose')
const achievementsSchema = require('./achievement')
const activitySchema = require('./activities')
const attributeSchema = require('./attribute')
const failureSchema = require('./failure')
const userSchema = require('./user')

const Achievements = mongoose.model('achievements', achievementsSchema)
const Activities = mongoose.model('activities', activitySchema)
const Attributes = mongoose.model('attributes', attributeSchema)
const Failures = mongoose.model('failures', failureSchema)
const User = mongoose.model('user', userSchema)

module.exports = {
    User,
    Achievements,
    Attributes,
    Failures,
    Activities
  }