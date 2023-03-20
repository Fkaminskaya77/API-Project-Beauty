import express from 'express'
import wellness from '../Models/wellness.js'

const wellnessRouter = express.Router()
/**
 * @api {get} /wellness Gets all treatment products in database
 * @apiName GetWellness
 * @apiGroup Wellness
 *
 * @apiSuccess {String} brand name of brand
 * @apiSuccess {String} name item in brand
 * @apiSuccess {String} price item price
 * @apiSuccess {String} n_of_loves number of people who love product
 * @apiSuccess {Number} review_score score based on reviews
 * @apiSuccess {String} clean_product if the product is clean/vegan 
 * @apiSuccess {String} catergory item placement category
 */
wellnessRouter.get('/wellness', async (req, res) => {
    const Wellness = await wellness.find({})
    res.json(Wellness)
}) 
/**
 * @api {get} /wellness/:id Gets all treatment products by ID number
 * @apiName GetWellness
 * @apiGroup Wellness
 *
 * 
 *  @apiParam {Number}  ID moisturizer product ID
 * 
 * @apiSuccess {String} brand name of brand
 * @apiSuccess {String} name item in brand
 * @apiSuccess {String} price item price
 * @apiSuccess {String} n_of_loves number of people who love product
 * @apiSuccess {Number} review_score score based on reviews
 * @apiSuccess {String} clean_product if the product is clean/vegan 
 * @apiSuccess {String} catergory item placement category
 */
wellnessRouter.get('/wellness/:id', async (req,res) => {
    const Wellness = await wellness.findById(req.params.id)
    res.json(Wellness)
})
/**
 * @api {post} /wellness Creates a new wellness product/brand.
 * @apiName postWellness
 * @apiGroup Wellness
 *
 * @apiSuccess {String} brand name of brand
 * @apiSuccess {String} name item in brand
 * @apiSuccess {String} price item price
 * @apiSuccess {String} n_of_loves number of people who love product
 * @apiSuccess {Number} review_score score based on reviews
 * @apiSuccess {String} clean_product if the product is clean/vegan 
 * @apiSuccess {String} catergory item placement category
 */

wellnessRouter.post('/wellness', async (req,res) => {
    const Wellness = await wellness.create(req.body)
    res.json(Wellness)
})
/**
 * @api {put} /wellness/:id  Find and Update by ID number
 * @apiName putWellness
 * @apiGroup Wellness
 *
 * @apiParam {Number}  ID moisturizer product ID
 * 
 * @apiSuccess {String} brand name of brand
 * @apiSuccess {String} name item in brand
 * @apiSuccess {String} price item price
 * @apiSuccess {String} n_of_loves number of people who love product
 * @apiSuccess {Number} review_score score based on reviews
 * @apiSuccess {String} clean_product if the product is clean/vegan 
 * @apiSuccess {String} catergory item placement category
 */

wellnessRouter.put('/wellness/:id', async (req,res) => {
    let Wellness = await wellness.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        {new: true}
        )
        res.json(Wellness)
    })
/**
 * @api {delete} /wellness/:id  Find and Delete a set of data by ID
 * @apiName deleteWellness
 * @apiGroup Wellness
 *
 *  @apiParam {Number}  ID moisturizer product ID
 * 
 * @apiSuccess {String} brand name of brand
 * @apiSuccess {String} name item in brand
 * @apiSuccess {String} price item price
 * @apiSuccess {String} n_of_loves number of people who love product
 * @apiSuccess {Number} review_score score based on reviews
 * @apiSuccess {String} clean_product if the product is clean/vegan 
 * @apiSuccess {String} catergory item placement category
 */

 wellnessRouter.delete('/wellness/:id', (req,res) =>{
     wellness.findByIdAndDelete( {_id: req.params.id})
        .then(Wellness => {
        res.json(Wellness)
            }
        )
    })

export default wellnessRouter