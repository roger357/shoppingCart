import { Client } from '../model/client'
import { ShoppingCarProduct } from '../model/shoppingCarProduct'

export interface ShoppingCar {
  id: number;
  client: Client;
  type: string;
  state: string;
  products: ShoppingCarProduct[];
  creationDateTime: string;
  value: number;
}
