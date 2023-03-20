import express from 'express'
import treatment from '../Models/treatments.js'

const treatmentRouter = express.Router() 
/**
 * @api {get} /treatments Gets all treatment products in database
 * @apiName GetTreatment
 * @apiGroup Treatment
 *
 * @apiSuccess {String} brand name of brand
 * @apiSuccess {String} name item in brand
 * @apiSuccess {String} price item price
 * @apiSuccess {String} n_of_loves number of people who love product
 * @apiSuccess {Number} review_score score based on reviews
 * @apiSuccess {String} clean_product if the product is clean/vegan 
 * @apiSuccess {String} catergory item placement category
 */
treatmentRouter.get('/treatment', async (req,res) => {
    const Treatments = await treatment.find({})
    res.json(Treatments)
})
/**
 * @api {get} /treatments/:id Gets all treatment products by ID number
 * @apiName GetTreatment
 * @apiGroup Treatment
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
treatmentRouter.get('/treatment/:id', async (req,res) => {
    const Treatments = await treatment.findById(req.params.id)
    res.json(Treatments)
})

/**
 * @api {post} /treatments Creates a new treatment product/brand.
 * @apiName postTreatment
 * @apiGroup Treatment
 *
 * @apiSuccess {String} brand name of brand
 * @apiSuccess {String} name item in brand
 * @apiSuccess {String} price item price
 * @apiSuccess {String} n_of_loves number of people who love product
 * @apiSuccess {Number} review_score score based on reviews
 * @apiSuccess {String} clean_product if the product is clean/vegan 
 * @apiSuccess {String} catergory item placement category
 */
treatmentRouter.post('/treatment', async (req,res) => {
    const Treatments = await treatment.create(req.body)
    res.json(Treatments)
})

/** @api {put} /treatments/:id Find and Update by ID number
* @apiName putTreatment
* @apiGroup Treatment
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

treatmentRouter.put('/treatment/:id', async (req,res) => {
    let Treatments = await treatment.findByIdAndUpdate(
        req.params.id,
        { $set: req.body},
        {new: true}
        )
        res.json(Treatments)
    })
/** @api {delete} /treatments/:id Find and Delete a set of data by ID
* @apiName deleteTreatment
* @apiGroup Treatment
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

   treatmentRouter.delete('/treatment/:id', (req,res) =>{
        treatment.findByIdAndDelete( {_id: req.params.id})
            .then(Treatments => {
                res.json(Treatments)
            }
        )
    })

export default treatmentRouter