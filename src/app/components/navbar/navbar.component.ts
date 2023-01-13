import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../shared/interfaces/CartItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isSticky: boolean = false;
  cart: CartItem[] = [];
  totalCart = 0;
  shoppingCartFlat = true;

  totalPrice = 0;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (window.pageYOffset > 0) {
      return this.isSticky = true
    }
      return this.isSticky = false;
  }

  constructor(private cartService: CartService) { 
    this.cartService.getCartObservable()
    .subscribe((cart) => {
      this.totalCart = cart.length;
      this.cart = cart;
      this.totalPrice = this.cartService.totalPrice;
    });
   
  }

  total() {
    return this.cart.reduce((prev, curr) => prev + curr.price, 0 );
  }

  removeFromCart(product: CartItem){
    this.cartService.removeFromCart(product);
  }

  toggleShoppingCart() {
    this.shoppingCartFlat = !this.shoppingCartFlat;
  }

  ngOnInit(): void {

  }

}
