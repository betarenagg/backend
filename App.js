const express = require('express')
const mongoose = require('mongoose')
const Users = require('./routes/Users')
const cors = require('cors');

var bodyParser = require('body-parser')


require('dotenv').config()
const app = express()


const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())
app.use(cors())

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('User Disconnected');
    });
  socket.on('example_message', function(msg){
      console.log('message: ' + msg);
    });
  });
  io.listen(8500)

app.use('/api/users', Users)

mongoose.set('strictQuery', false);

// connect database
mongoose.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result)=>  console.log('Database connected'))
    .catch((err)=> console.log(err))
app.listen(process.env.PORT, ()=>{
    console.log("Running on port "+ process.env.PORT)
})