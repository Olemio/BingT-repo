import express from 'express'
import mongoose from 'mongoose'
import TimeData from './TimeData.js'

const app = express()
// Connecting to the mongodb on my linux viritual machine, through ssh tunnel on prot 27017 to port 27017
// mongoose.connect('mongodb://localhost:27017/bingtdb', { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('Connected to MongoDB '))
// .catch((err) => console.error('Could not connect to MongoDB', err));

const user = new TimeData({ scramble: "B2 D2 L F2 U B R D' U' B' L F' R2 D L F' R2 U' B2 L", time: 10.94, date: "Mon Mar 06 2023 20:57:02" })
user.save().then(() => console.log("User Saved"))
app.get('/', (req, res) => {
    console.log(user)
    res.send(user)
})

app.listen(3000)