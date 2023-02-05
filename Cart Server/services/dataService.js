//1 import db


const db = require('./db')

 //2 get all products from db

 const getProduct=()=>{
   return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                status:true,
                statusCode:200,
                    //displaying complete products
                    product:result
                

                }
                
            }
            else{
                return{
                    status:false,
                statusCode:402,
                message:'product not found'

                }
            }
        }
    )
 }



 const addtowishlist= (id,title,price,image,description)=>{

    return db.Wishlist.findOne({id}).then(

        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:"product already added"
                }
            }

            else{

                const newProduct = new db.Wishlist({
                    id,title,price,image,description
                })

                newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"product added successfully"
                }
            }
        }

    )

 }

//  get wislist products from db

const getwishlist=()=>{

    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                status:true,
                statusCode:200,
                    //displaying complete products
                    product:result
                

                }
                
            }
            else{
                return{
                    status:false,
                statusCode:402,
                message:'product not found'

                }
            }
        }
    )

}

//delete wishlist pdt from db


const deletewish=(id)=>{

    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                status:true,
                statusCode:200,
                    //displaying complete products
                    product:result,
                    message:"product removed sucessfully"
                

                }
                
            }
            else{
                return{
                    status:false,
                statusCode:402,
                message:'wislist is empty'

                }
            }
        }

    )
}






module.exports={
    getProduct,
    addtowishlist,
    getwishlist,
    deletewish

}