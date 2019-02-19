import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];
  @Output() increaseQty: EventEmitter<CartItem> = new EventEmitter()
  @Output() decreaseQty: EventEmitter<CartItem> = new EventEmitter()
  @Output() remove: EventEmitter<CartItem> = new EventEmitter()


  constructor() { }

  ngOnInit() {
    console.log(this.items)
  }

  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }

  

}
