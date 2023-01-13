import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartItem } from '../shared/interfaces/CartItem';
import { Food } from '../shared/interfaces/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalPrice: number = 0;
  cart: any = [];

  private cartSubject: Subject<CartItem[]> = this.cart;

  constructor() { 
    this.cartSubject = new Subject();
  }

  getCartObservable(): Observable<any> {
    return this.cartSubject.asObservable();
  }
  

  addToCart(product: Food) {
    let cartItem = this.cart.find((item: CartItem) => item.id == product.id );
    let { id, title, price } = product;

    if (!cartItem) {
      let productCart = {
        id,
        title,
        price,
        quantity: 1
      }

      this.cart.push(productCart);
      this.cartSubject.next(this.cart);
      return;
    }

    this.changeQuantity(product, cartItem.quantity + 1);
    this.cartSubject.next(this.cart);
  }

  changeQuantity(product: Food, quantity: number ): void {
    let cartItem = this.cart.find((item: CartItem) => item.id == product.id );
    
    if ( !cartItem ) {
      return;
    }


    cartItem.quantity = quantity;
    cartItem.price = quantity * product.price;
  }

  removeFromCart(product: CartItem) {
    this.cart = this.cart.filter((item: CartItem) => item.id !== product.id );
    return this.cartSubject.next(this.cart);
  }

}