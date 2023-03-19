const express = require('express')
const mongoose = require('mongoose')
const Users = require('./routes/Users')
const Profile = require('./routes/Profile')
const Crash = require('./routes/Crash')
const Admin = require('./routes/AdminWallet')
const cors = require('cors');



require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', Users)
app.use('/api/profile', Profile)
app.use('/api/crash', Crash)
app.use('/api/admin', Admin)

mongoose.set('strictQuery', false);

const URL = 'mongodb+srv://Highscoretech:Keys2541@highscore.muku4gg.mongodb.net/betarena?retryWrites=true&w=majority'

// connect database
mongoose.connect(URL, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result)=>  console.log('Database connected'))
    .catch((err)=> console.log(err))
app.listen(process.env.PORT, ()=>{
    console.log("Running on port "+ process.env.PORT)
})