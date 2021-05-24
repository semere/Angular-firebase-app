import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    { id:1, productId:1, productName: 'test 1', qty: 2, price: 100},
    { id:2, productId:2, productName: 'test 2', qty: 3, price: 150}
  ];

  cartTotal = 0;
  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
