import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from '../Models/product.model';

@Component({
  selector: 'list-porducts',
  templateUrl: './list-porducts.component.html',
  styleUrls: ['./list-porducts.component.scss'],
})
export class ListPorductsComponent {
  @Input() products: Product[];
  
  @Output() productsShopping: EventEmitter<Product>;
  @Output() AllDeletedProduct: EventEmitter<Int32Array>;
  constructor() {
    this.products = [];
    this.productsShopping = new EventEmitter();
    this.AllDeletedProduct = new EventEmitter();
  }




  shoppingProduct(productSho: Product) {
    this.productsShopping.emit(productSho);
  }

  DeleteProduct(productDeleted: Product, index: any) {
    if (productDeleted.amount <= 1) this.products.splice(index, 1);
    else productDeleted.amount--;
  }
  DeleteProductAll(index: any){
    this.products.splice(index, 1);
    this.AllDeletedProduct.emit(index);
  }
}
