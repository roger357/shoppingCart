import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Client } from '../model/client'
import { ShoppingCar } from '../model/shoppingCar';
import { ShoppingCarProduct } from '../model/shoppingCarProduct';
import { ShoppingCarService } from '../shopping-car.service'

@Component({
  selector: 'app-shopping-cars',
  templateUrl: './shopping-cars.component.html',
  styleUrls: ['./shopping-cars.component.css']
})
export class ShoppingCarsComponent implements OnInit {

  client: Client;
  shoppingCars: ShoppingCar[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private service: ShoppingCarService
  ) { }

  ngOnInit(): void {
    this.getClient();
    //this.getShoppingCars();
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('idClient');
    console.log(id);
    this.service.getClient(id).subscribe(client => this.client = client,
    () => console.log('Error getting Client'),
    () => this.getShoppingCars());
    console.log(this.client);
  }

  getShoppingCars(): void {
    this.service.getCars(this.client.id).subscribe(shoppingCars => this.shoppingCars = shoppingCars);
  }

  newShoppingCar(): void {
    this.service.createCar(this.client.id).subscribe(shoppingCars => {
      this.shoppingCars.push(shoppingCars)
    });
  }

  deleteShoppingCar(carId: number): void {
    console.log('Car number');
    console.log(carId);
    this.service.deleteCar(carId).subscribe(result => console.log('Deleting'),
    () => console.log('Error deleting Car'),
    () => this.getShoppingCars());
  }

  goBack(): void {
    this.location.back();
  }

}
