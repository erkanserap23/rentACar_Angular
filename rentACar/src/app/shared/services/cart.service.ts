import { Injectable } from '@angular/core';
import { CartItems } from '../models/cart-items';
import { Car } from '../../features/vehicle/models/car';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(car: Car) {
    let item = CartItems.find((c) => c.car.id === car.id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeFromCart(car: Car) {
    let item = CartItems.find((c) => car.id == car.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }
  

  // *! splice (bastan, birtane) sil
  // *! find  ara
  // *! indexOf  index numarasını bul
}
