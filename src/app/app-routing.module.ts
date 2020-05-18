import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component'
import { ShoppingCarsComponent } from './shopping-cars/shopping-cars.component'
import { ProductsComponent } from './products/products.component'

const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'shoppingcars/:idClient', component: ShoppingCarsComponent },
  { path: 'products/:idCar', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
