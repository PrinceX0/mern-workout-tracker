require('dotenv').config()

const express = require('express');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes 

// app.get('/', (req, res) => {
//     res.json({ mssg: 'Welcome to the app' })
// })

//this was just to test the API

//routes
app.use('/api/workouts', workoutRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


// //listen for requests
// app.listen(process.env.PORT, () => {
//     console.log('Listening on port ', process.env.PORT)
// })
// //test for request
//only listen once we are connected to the DB