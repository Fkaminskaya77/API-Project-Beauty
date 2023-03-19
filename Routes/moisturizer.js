import express from 'express'
import moisturizer from '../Models/moisturizer.js'

const moisturizersRouter = express.Router()

moisturizersRouter.get('/moisturizer', async (req, res) => {
    const Moisturizer = await moisturizer.find({})
    res.json(Moisturizer)
})

moisturizersRouter.get('/moisturizer/:id', async (req,res) => {
    const Moisturizer = await moisturizer.findById(req.params.id)
    res.json(Moisturizer)
})

moisturizersRouter.post('/moisturizer', async (req,res) => {
    const Moisturizer = await moisturizer.create(req.body)
    res.json(Moisturizer)
})

moisturizersRouter.put('/moisturizer/:id', async (req,res) => {
    const Moisturizer = await moisturizer.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        {new: true}
        )
        res.json(Moisturizer)
    })

moisturizersRouter.delete('/moisturizer/:id', (req,res) =>{
        moisturizer.findByIdAndDelete( {_id: req.params.id})
            .then(Moisturizer => {
                res.json(Moisturizer)
            }
        )
    })


export default moisturizersRouter