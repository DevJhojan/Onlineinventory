import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ListPorductsComponent } from './Components/list-porducts/list-porducts.component';
import { FormsModule } from '@angular/forms';
import { ListRegisterComponent } from './Components/list-register/list-register.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListPorductsComponent,
    ListRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
