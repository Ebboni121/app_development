//import libraries, dependencies
const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')

// import libraries, dependencies
const express = require



// create app using express
const app= express(

    //use the body parse middleware to handle data sent in body of http
    app.use(bodyParser.json()))
    //use express to server static files. any fiels in the public folder will be accesible freom the root url of webserver

    app.use(express.static('public'))

    //use express bodyparser for parsing URL encoded request bodies (typically from HTML forms)
    app.use(bodyParser.urlendoded({extended: true}))

    //connect to the datbase using mongoos
    //{userNewUrlParser: true, useUnifiedTopology: true} option to make sure that uses the new Parser and new Server and Monitoring Enginee.

    mongoose.connect('mongodb://localhose/userlogin',{useNewUrlParser: true, useUnifiedTopology: true})

    //check connection
    mongoose.connection
    .once('open', function(){console.log('Connected to userlogin database')})
    .on('error', function(e){console.log('error connection...',e)})

    //create checking page
    app.get('/',function(request, response){
        response.redirect('index.html')
    }).listen(3000)

    //posting the form
    app.post('/login',async (request,response)=>{
        try{//get the data from index.html form
            const username = request.body.username
            const password = request.body.password

            //testing
            console.log(`enter ussername = ${username} and entered password =${password}`)

//get data from database,MongoDB
const user= await mongoose.connection.db.collection('users').findOne({username: username})

//check if username matches
if (!user){
    console.log('information doesn not match');

}

//check if password matches
if (!user.password == password){
    console.log('logged in sucess');
} else {
    console.log('password does not match');
}


        } catch (error) {
           response.status(500).send (`internal server error`);// 500 statuse error meands internal server error
        }
    })

    //create checking page
    app.get('/',function (request,response){
        response.redirect('index.html')
    }).listen(3000)
