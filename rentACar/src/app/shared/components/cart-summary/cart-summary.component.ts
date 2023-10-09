import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/models/car';
import { CartItem } from 'src/app/shared/models/cart-item';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent  implements OnInit{

  cartItems:CartItem[]=[];
  constructor( private cartService:CartService){}
  
  ngOnInit(): void {
    this.getCart();
  }
  
  getCart(){
    this.cartItems=this.cartService.list();
  }
  removeCart(car: Car){
  this.cartService.removeFromCart(car);
  }


}
