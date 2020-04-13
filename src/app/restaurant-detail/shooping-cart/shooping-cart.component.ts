import { Component, OnInit } from "@angular/core";

import { ShoppingCartService } from "./shooping-cart.service";
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./shopping-cart.model";

@Component({
  selector: "mt-shooping-cart",
  templateUrl: "./shooping-cart.component.html",
})
export class ShoopingCartComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  clear() {
    this.shoppingCartService.clear();
  }

  removeItem(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: MenuItem) {
    this.shoppingCartService.addItem(item);
  }

  items(): CartItem[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }
}
