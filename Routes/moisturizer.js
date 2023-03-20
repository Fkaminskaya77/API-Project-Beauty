import express from 'express'
import moisturizer from '../Models/moisturizer.js'

const moisturizersRouter = express.Router()
/**
 * @api {get} /moisturizer Gets all moisturizer products in database
 * @apiName GetMoisturizer
 * @apiGroup Moisturizer
 *
 * @apiSuccess {String} brand_name name
 * @apiSuccess {String} item_name item in brand
 * @apiSuccess {String} base_price starting price of any item in specific brand
 * @apiSuccess {String} high_price high price of any item in specific brand
 */
moisturizersRouter.get('/moisturizer', async (req, res) => {
    const Moisturizer = await moisturizer.find({})
    res.json(Moisturizer)
})
/**
 * @api {get} /moisturizer/:id Gets all moisturizer products by ID number
 * @apiName GetMoisturizer
 * @apiGroup Moisturizer
 * 
 * @apiParam {Number} ID of Moisturizer product ID
 * 
 * @apiSuccess {Number} Moisturizer product ID
 * @apiSuccess {String} brand_name name
 * @apiSuccess {String} item_name item in brand
 * @apiSuccess {String} base_price starting price of any item in specific brand
 * @apiSuccess {String} high_price high price of any item in specific brand
 */
 
moisturizersRouter.get('/moisturizer/:id', async (req,res) => {
    const Moisturizer = await moisturizer.findById(req.params.id)
    res.json(Moisturizer)
})
/**
 * @api {post} /moisturizer Creates a new moisturizing product/brand.
 * @apiName CreateMoisturizer
 * @apiGroup Moisturizer
 * 
 * 
 * @apiSuccess {String} brand_name name
 * @apiSuccess {String} item_name  specific item in brand
 * @apiSuccess {String} base_price starting of any item in specific brand
 * @apiSuccess {String} high_price high price of any item in specific brand
 
 */
moisturizersRouter.post('/moisturizer', async (req,res) => {
    const Moisturizer = await moisturizer.create(req.body)
    res.json(Moisturizer)
})
/**
 * @api {put} /moisturizer/:id Find and Update by ID number
 * @apiName EditMoisturizer
 * @apiGroup Moisturizer
 * 
 * @apiParam {Number}  ID moisturizer product ID
 * 
 * @apiSuccess {String} brand_name name
 * @apiSuccess {String} item_name  specific item in brand
 * @apiSuccess {String} base_price starting price of any item in specific brand
 * @apiSuccess {String} high_price high price of any item in specific brand
 * 
 * 
 * 
 */
moisturizersRouter.put('/moisturizer/:id', async (req,res) => {
    const Moisturizer = await moisturizer.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        {new: true}
        )
        res.json(Moisturizer)
    })
/**
 * @api {delete} /moisturizer/:id  Find and Delete a set of data by ID
 * @apiName DeleteMoisturizer
 * @apiGroup Moisturizer
 * 
 * @apiParam {Number}  ID moisturizer product ID
 * 
 * @apiSuccess {String} brand_name name
 * @apiSuccess {String} item_name  specific item in brand
 * @apiSuccess {String} base_price starting price of any item in specific brand
 * @apiSuccess {String} high_price high price of any item in specific brand
 * 
 * 
 * 
 * 
 */
moisturizersRouter.delete('/moisturizer/:id', (req,res) =>{
        moisturizer.findByIdAndDelete( {_id: req.params.id})
            .then(Moisturizer => {
                res.json(Moisturizer)
            }
        )
    })


export default moisturizersRouter