import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
wishlist:any=[];
error:any
  constructor(private api:ApiService,private router:Router,private cart:CartService){}

  ngOnInit(): void {

    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.product
        if(this.wishlist.length==0){
          this.error="empty wishlist"
        }
      },

      //error message if there is no data
      (data:any)=>{
        this.error=data.error.message
      }
    )
  
  }

  deletewish(product:any){
    
    this.api.deletewish(product.id).subscribe(
      (result:any)=>{
        alert(result.message)
        this.wishlist=result.wishlist
        if(this.wishlist.length==0){
          this.error='empty wishlist'
        }
        // this.router.navigateByUrl()
        // window.location.reload()
        // this.router.navigateByUrl('wishlist')
      },
      (result:any)=>{
        alert(result.error.message)
      }

    )



  }
  
  addtocart(product:any){

    this.cart.addtocart(product)
    this.deletewish(product)
    window.location.reload()


  }



}
