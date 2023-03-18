//import models
import moisturizer from '../Models/moisturizer.js';
import treatments from '../Models/treatments.js';
import wellness from '../Models/wellness.js';
//import data from json 
import moisturizerData from "../sephora-moisturizer-2023.json" assert {type: "json" };
import treatmentsData from '../treatments.json' assert {type: "json" };
import wellnessData from '../wellness.json' assert {type: "json" };

//insert data into the database with models

async function seed() {
    await moisturizer.deleteMany({})
    await treatments.deleteMany({})
    await wellness.deleteMany({})

    await moisturizer.create(moisturizerData)
    await treatments.create(treatmentsData)
    await wellness.create(wellnessData)
    
    process.exit()
}
seed()