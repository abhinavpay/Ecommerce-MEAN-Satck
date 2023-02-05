
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements  OnInit {

  allproducts:any=[];//array of data products

  searchTerm:any=[]

  constructor(private api:ApiService , private cart:CartService){}

  ngOnInit(): void {

    this.api.getallproducts().subscribe(
      (data:any)=>{

        this.allproducts = data.product

      }
    )

   this.api.searchKey.subscribe(
    (data:any)=>{
      this.searchTerm=data
    }
   )
    
  }


  //wishlist

  addtowishlist(product:any){

    this.api.addtowishlist(product)
    .subscribe(
      (result:any)=>{

        console.log(result);
        
        alert(result.message)//true

      },
      (result:any)=>{
        alert(result.error.message)//false
      }
    )



  }


  addtocart(product:any){
    this.cart.addtocart(product)
  }



}
