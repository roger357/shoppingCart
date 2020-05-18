import { ShoppingCar } from '../model/shoppingCar'

export interface ShoppingCarProduct {
  id: number;
  shoppingCar: ShoppingCar;
  productid: number;
  name:string;
  inside: boolean;
  value: number;
}
