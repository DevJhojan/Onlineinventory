import { Component } from '@angular/core';
import Product from './Components/Models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: Product[] = [];
  productsShow: Product[] = [];

  onProductAdd($event: any) {
    this.products.push($event);
  }

  onProductShow($event: any) {
    const productFind = this.productsShow.find(
      (product) => product.name === $event.name
    );
    if (productFind) {
      productFind.amount+=1;
    } else {
      this.productsShow.push($event);
    }
  }

  onDeleteProduct($event:any){
    this.products.splice($event,1);
    this.productsShow.splice($event,1);
  }
}
