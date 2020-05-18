import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ShoppingCarService } from '../shopping-car.service'
import { Product } from '../model/product';
import { ShoppingCar } from '../model/shoppingCar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  carId: number;
  products: Product[];
  prodInCar: number;
  shoppingCar: ShoppingCar;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private service: ShoppingCarService
  ) { }

  ngOnInit(): void {
    this.carId = +this.route.snapshot.paramMap.get('idCar');
    this.getProducts();
  }

  getProducts(): void {
    this.service.getProducts().subscribe(products => this.products = products,
      () => console.log('Error getting Products'),
      () => this.getShoppingCar());
  }

  getShoppingCar(): void {
    this.service.getCar(this.carId).subscribe(shoppingCar => this.shoppingCar = shoppingCar);
  }

  addProductToCar(prodId: number): void {
    this.shoppingCar = <ShoppingCar>{};
    this.service.addProductCar(this.carId, prodId).subscribe(shoppingCar => this.shoppingCar = shoppingCar);
  }

  removeProductFromCar(prodId: number): void {
    this.shoppingCar = <ShoppingCar>{};
    this.service.deleteProductCar(this.carId, prodId).subscribe(shoppingCar => this.shoppingCar = shoppingCar);
  }

  checkoutCar(): void {
    this.service.purchaseCar(this.carId).subscribe(shoppingCar => this.shoppingCar = shoppingCar);
  }

  goBack(): void {
    this.location.back();
  }


}
