const express = require('express')
const cats=require('./cats')
const logger=require('./logger')
const cors=require('cors')
const app = express() //starting the server

//for use middlware
app.use(cors()) // because cors is a middle ware
app.use(logger)
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello cat!!')
})
//get from cats and send to server
app.get('/cats',(req,res) => {
    res.send(cats)
})

//get cats individually


app.get('/cats/:id',(req,res)=>{
    //res.send('it worked!')
    console.log(req.params) //in terminal we will see id what we write //in brouser
    const idx=req.params.id
    const cat=cats[idx-1]
    if (!cat) {res.status(404).json({message:`Cat with id ${idx} not found` })

    } 
    else {

    res.send(cat) 
    }

})
//trying to do post smth with hopscotch
app.post('/cats',(req,res) => {
    
    //res.send("the post request worked") //you cant sen twice thats why comment this
 //I want to retrieve information from hoppscotch
 //from this info I want to create a cat
 const cat=req.body
 //and want to add to my cats array
 //in hopscotch click body and set to application.json
 //write in raw request Body fruit {"name":"plum"}
 cats.push(cat)
 console.log("line 44", req.body) //it doesn't work write app.use(express.json()) in middleware
 res.status(201).send(cat)
})

module.exports=app
