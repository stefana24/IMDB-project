const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const User = require('./model/user_schema');

require('dotenv').config();

const db = process.env.DBURL
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("MongoDB connected...")
})
.catch(err=>console.log(err));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.sendFile('./client/index.html',{root: __dirname});
})

app.get('/movies',(req,res)=>{
    res.sendFile('./client/movies.html',{root:__dirname});
})


app.get('/tvshows',(req,res)=>{
    res.sendFile('./client/tvshows.html',{root:__dirname});
})

app.get('/about',(req,res)=>{
    res.sendFile('./client/about.html',{root: __dirname});
})

app.get('/register',(req,res)=>{
    res.sendFile('./client/register.html',{root: __dirname});
})

app.get('/login',(req,res)=>{
    res.sendFile('./client/login.html',{root: __dirname});
})

app.post('/addUser',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // console.log(name,email,password);
    
    const myData = new User({
        name:name,
        email:email,
        password:password
    });

    myData.save()
    .then(data=>{
        if(!data){
            res.status(400).send("unable to save to database");
        }
        res.send(data);
    })

})


// app.get('/addUser',(req,res)=>{
//     res.sendFile('./client/successfulReg.html', {root:__dirname});
// })

//middleware
app.use(function(req,res){
    res.status(404).sendFile('./client/404.html',{root:__dirname});
})


app.listen(3000,()=>{
    console.log('Server is running...');

});