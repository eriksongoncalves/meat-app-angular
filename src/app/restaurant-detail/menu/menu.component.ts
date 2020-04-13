import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MenuItem } from "../menu-item/menu-item.model";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(
      this.routes.parent.snapshot.params["id"]
    );
  }
}
