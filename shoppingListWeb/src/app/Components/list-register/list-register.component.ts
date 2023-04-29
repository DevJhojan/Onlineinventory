import { Component, Input } from '@angular/core';
import Product from '../Models/product.model';

@Component({
  selector: 'list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss']
})
export class ListRegisterComponent {
  variable: boolean;
  total: number;
  @Input() products: Product[];
  constructor(){
    this.products = [];
    this.variable = true;
    this.total = 0;
  }

  shoppingProduct(productSho: Product) {
    if (this.variable == true) {
      alert(productSho.name + ": Comprado")
    }
  }
  calculateTotal():number {
    this.total = 0;
    for(let product of this.products){
      this.total += product.price*product.amount;
    }

    return this.total;
  }

  AddProduct(productSho: Product) {
      productSho.amount++;
  }
  substracProduct(productDelete: Product, index: any) {
    if(productDelete.amount <= 1){
      this.products.splice(index, 1);
    }else{
      productDelete.amount--;
    }
  }
}
