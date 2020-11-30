import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
	// Array to store the ingredients
	ingredients: Ingredient[];

	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit(): void {
		// Getting the array of ingredients on page load
		this.ingredients = this.shoppingListService.getIngredients();

		// Subscribing to the changes when they're done
		this.shoppingListService.ingredientsChanged.subscribe((newIngredients) => {
			this.ingredients = newIngredients;
		});
	}
}
