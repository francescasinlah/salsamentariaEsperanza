import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  products: any[] = [];

  constructor(private productsService: ProductosService, private cartService: CartService) {
    this.products = this.productsService.getProducts();
    // console.log(this.products);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
  }

}
