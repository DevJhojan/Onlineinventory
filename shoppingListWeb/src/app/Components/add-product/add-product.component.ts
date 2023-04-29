import { Component, EventEmitter, Output } from '@angular/core';
import Product from '../Models/product.model';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  @Output() productAdded: EventEmitter<Product>;

  product: Product;

  

  constructor(){
    this.product = new Product();
    this.productAdded = new EventEmitter();
  }

  addProduct(product1:Product){
    this.productAdded.emit(product1);
    this.product = new Product();
  }


}
