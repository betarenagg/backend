const express = require('express')
const mongoose = require('mongoose')
const Users = require('./routes/Users')
const cors = require('cors');

require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', Users)

mongoose.set('strictQuery', false);

// connect database
mongoose.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result)=>  console.log('Database connected'))
    .catch((err)=> console.log(err))
app.listen(process.env.PORT, ()=>{
    console.log("Running on port "+ process.env.PORT)
})