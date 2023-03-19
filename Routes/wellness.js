import express from 'express'
import wellness from '../Models/wellness.js'

const wellnessRouter = express.Router()

wellnessRouter.get('/', async (req, res) => {
    const Wellness = await wellness.find({})
    res.json(Wellness)
}) 

export default wellnessRouter