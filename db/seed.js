//import models
import moisturizer from '../Models/moisturizer.js';
//import data from json 
import moisturizerData from "../sephora-moisturizer-2023.json" assert {type: "json" };
//insert data into the database with models

async function seed() {
    await moisturizer.deleteMany({})

    await moisturizer.create(moisturizerData)
    
    process.exit()
}
seed()