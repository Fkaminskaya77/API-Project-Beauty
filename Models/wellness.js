import mongoose from '../db/connection.js'

const wellnessSchema = new mongoose.Schema({
    brand: String,
    name: String,
    price: Number,
    n_of_loves: Number,
    review_score: Number,
    clean_product: Number,
    catergory: String 
})

export default mongoose.model("wellness", wellnessSchema)