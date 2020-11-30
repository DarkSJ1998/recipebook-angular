import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	// To inform the component that a new data is available
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	// Array to store the ingredients
	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomato', 10),
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(newIngredient: Ingredient) {
		this.ingredients.push(newIngredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}
