//1 import express

const express = require('express')

//5 import cors

 const cors = require('cors')


 //7 import data service

  const dataservices = require('./services/dataService')

//2 create an application using express

const app = express()

// 3 .use json parser for server creation for converting json data

app.use(express.json())


//6 using cors specify the origin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))


//4 set up a port number

app.listen(3000,()=>{
    console.log('listening on port 3000');
})


//8 api call to get all products

app.get('/all-products',(req,res)=>{

    
    dataservices.getProduct().then(
        result=>{

            
            res.status(result.statusCode).json(result)
        }
    )
})


//api call to add wishlist


app.post('/addtowishlist',(req,res)=>{
//   console.log(req.body);

  dataservices.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
    result=>{

            
        res.status(result.statusCode).json(result)
    }
)  
})



// api call to get wislist products

app.get('/getwishlist',(req,res)=>{

    
    dataservices.getwishlist().then(
        result=>{

            
            res.status(result.statusCode).json(result)
        }
    )
})

// api call to delete wislist products

app.delete('/deletewish/:id',(req,res)=>{

    
    dataservices.deletewish(req.params.id).then(
        result=>{
            console.log(result);
            
            res.status(result.statusCode).json(result)
        }
    )
})






