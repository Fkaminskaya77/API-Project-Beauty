import express from 'express'
import wellness from '../Models/wellness.js'

const wellnessRouter = express.Router()

wellnessRouter.get('/wellness', async (req, res) => {
    const Wellness = await wellness.find({})
    res.json(Wellness)
}) 

wellnessRouter.get('/wellness/:id', async (req,res) => {
    const Wellness = await wellness.findById(req.params.id)
    res.json(Wellness)
})

wellnessRouter.post('/wellness', async (req,res) => {
    const Wellness = await wellness.create(req.body)
    res.json(Wellness)
})

wellnessRouter.put('/wellness/:id', async (req,res) => {
    let Wellness = await wellness.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        {new: true}
        )
        res.json(Wellness)
    })

 wellnessRouter.delete('/wellness/:id', (req,res) =>{
     wellness.findByIdAndDelete( {_id: req.params.id})
        .then(Wellness => {
        res.json(Wellness)
            }
        )
    })

export default wellnessRouter