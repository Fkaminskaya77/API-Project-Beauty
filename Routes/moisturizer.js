import express from 'express'
import moisturizer from '../Models/moisturizer.js'

const moisturizersRouter = express.Router()

moisturizersRouter.get('/', async (req, res) => {
    const Moisturizer = await moisturizer.find({})
    res.json(Moisturizer)
})

moisturizersRouter.get('/moisturizer/:id', async (req,res) => {
    const Moisturizer = await moisturizer.findById(req.params.id)
    res.json(Moisturizer)
})




export default moisturizersRouter