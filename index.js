import express from 'express'
import moisturizersRouter from './Routes/moisturizer.js'
import treatmentRouter from './Routes/treatments.js';
import wellnessRouter from './Routes/wellness.js';

const app = express();

//middleware
app.use(express.json())

//routes

app.get('/', async (req,res) => {
    res.send("Beauty Products are life!")
   
})

app.use('/moisturizer', moisturizersRouter)
app.use('/treatment', treatmentRouter)
app.use('/wellness', wellnessRouter)



app.listen(4000, () => {
    console.log("your server is running on 4000!")
})