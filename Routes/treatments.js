import express from 'express'
import treatment from '../Models/treatments.js'

const treatmentRouter = express.Router()

treatmentRouter.get('/treatment', async (req,res) => {
    const Treatments = await treatment.find({})
    res.json(Treatments)
})

treatmentRouter.get('/treatment/:id', async (req,res) => {
    const Treatments = await treatment.findById(req.params.id)
    res.json(Treatments)
})

treatmentRouter.post('/treatment', async (req,res) => {
    const Treatments = await treatment.create(req.body)
    res.json(Treatments)
})

treatmentRouter.put('/treatment/:id', async (req,res) => {
    let Treatments = await treatment.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        {new: true}
        )
        res.json(Treatments)
    })

   treatmentRouter.delete('/treatment/:id', (req,res) =>{
        treatment.findByIdAndDelete( {_id: req.params.id})
            .then(Treatments => {
                res.json(Treatments)
            }
        )
    })

export default treatmentRouter