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

	// To return the copy of the ingredients array
	getIngredients() {
		return this.ingredients.slice();
	}

	// To add a new ingredient to the array
	addIngredient(newIngredient: Ingredient) {
		// Adding the element
		this.ingredients.push(newIngredient);

		// To trigger the signal for component to get updated data
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	// To add the recipe's ingredients to the array
	addRecipeIngredients(recipeIngredients: Ingredient[]) {
		// Adding the elements
		this.ingredients = [...this.ingredients, ...recipeIngredients];

		// To trigger the signal for component to get updated data
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}
