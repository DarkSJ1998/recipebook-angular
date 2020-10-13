import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
	// Array to store the ingredients
	ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomato', 10),
	];

	constructor() {}

	ngOnInit(): void {}

	addIngredient(newIngredient: Ingredient) {
		this.ingredients.push(newIngredient);
	}
}
