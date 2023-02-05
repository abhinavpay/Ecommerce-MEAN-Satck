//1 import mongoose

const mongoose = require('mongoose')

//2 define connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to mongodb');
})


//3 create a model for the products , Product should be capital

const Product = mongoose.model('Product',{

    //schema creation

    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number,
    }

})

//create a model for wishlist , Wishlist should be capital

const Wishlist=mongoose.model('wishlist',{

    id:Number,
    title:String,
    price:Number,
    image:String,
    description:String

})




module.exports={
    Product,
    Wishlist


}

