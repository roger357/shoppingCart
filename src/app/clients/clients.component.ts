import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client'
import { ShoppingCarService } from '../shopping-car.service'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  clients: Client[];

  constructor(private service: ShoppingCarService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.service.getClients().subscribe(clients => this.clients = clients);
   }

}
