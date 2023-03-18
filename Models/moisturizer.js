import mongoose from '../db/connection.js'


const moisturizerSchema = new mongoose.Schema({
    
    brand_name: String,
    item_name: String,
    base_price: String,
    high_price: String,

})

export default mongoose.model("moisturizer", moisturizerSchema)