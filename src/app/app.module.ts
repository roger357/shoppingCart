import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';

import { FormsModule } from '@angular/forms';
import { ShoppingCarsComponent } from './shopping-cars/shopping-cars.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ShoppingCarsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
