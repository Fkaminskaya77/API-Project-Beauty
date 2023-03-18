import mongoose from '../db/connection.js'

const treatmentsSchema = new mongoose.Schema({
    brand: String,
    name: String,
    price: String,
    n_of_loves: Number,
    review_score: Number,
    clean_product: Number,
    catergory: String
})

export default mongoose.model("treatment", treatmentsSchema)