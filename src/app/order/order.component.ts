import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'money'},
    {label: 'Débito', value:'debit'},
    {label: 'Cretito', value:'credit'}
  ]

  constructor( private orderService: OrderService, private router:Router) { }
  
  ngOnInit() {
  
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => {
      return new OrderItem(item.quantity, item.menuItem.id)
    });
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        console.log(`Compra concluída: ${orderId}`);
        this.orderService.clear();
        this.router.navigate(['order-summary'])
      } );
  }

}
