import { Component, OnInit } from "@angular/core";

import { RestaurantsService } from "../restaurants/restaurants.service";
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-restaurant-detail",
  templateUrl: "./restaurant-detail.component.html",
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    this.restaurantsService
      .restaurantById(this.routes.snapshot.params["id"])
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
}
