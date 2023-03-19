import express from 'express'
import treatment from '../Models/treatments.js'

const treatmentRouter = express.Router()

treatmentRouter.get('/', async (req,res) => {
    const Treatments = await treatment.find({})
    res.json(Treatments)
})

export default treatmentRouter