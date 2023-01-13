import { Injectable } from '@angular/core';
import { Food } from '../shared/interfaces/Food';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

   products: Food[] = [
    {
      id: 1,
      title: 'Hamburguesa de Res',
      caption: '450gr / 5 Unidades',
      price: 7900,
      img: '../../../assets/img/res.png'
    },
    {
      id: 2,
      title: 'Hamburguesa de Pollo',
      caption: '450gr / 5 Unidades',
      price: 7900,
      img: '../../../assets/img/pollo.png'
    },
    {
      id: 3,
      title: 'Salchicha Perro',
      caption: '500gr / 12 Unidades',
      price: 8350,
      img: '../../../assets/img/salchicha.png'
    },
    {
      id: 4,
      title: 'Mortadela de Res',
      caption: '250gr / 12 Unidades',
      price: 3700,
      img: '../../../assets/img/mortadela.png'
    },
    {
      id: 5,
      title: 'Chorizo Méxicano',
      caption: '450gr / 5 Unidades o 10 Unidades',
      price: 11400,
      img: '../../../assets/img/chorizo.png'
    },
    {
      id: 6,
      title: 'Chorizo Cóctel',
      caption: '250gr / 14 Unidades',
      price: 7000,
      img: '../../../assets/img/coctel.png'
    },
    {
      id: 7,
      title: 'Jamón de Cerdo Ahumado',
      caption: '250gr',
      price: 7150,
      img: '../../../assets/img/jamon-ahumado.png'
    },
    {
      id: 8,
      title: 'Jamón Sándwich',
      caption: '250gr',
      price: 5200,
      img: '../../../assets/img/jamon-sandwich.png'
    },
    {
      id: 9,
      title: 'Pernil de Cerdo',
      caption: '250gr',
      price: 19200,
      img: '../../../assets/img/pernil.png'
    }
  ];

  
  getProducts(): Food[] {
    return this.products;
  }

  constructor() { }

}