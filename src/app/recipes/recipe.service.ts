import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
	// It is used by the "recipes-item" component to emit
	// the recipe to the "recipes" component and then, this
	// selected recipe is passed down.
	recipeSelected = new EventEmitter<Recipe>();

	// The list of recipes
	private recipes: Recipe[] = [
		new Recipe(
			'Test Recipe 1',
			'Test Description 1',
			'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?webp=true&quality=90&crop=1px%2C328px%2C597px%2C257px&resize=556%2C236'
		),
		new Recipe(
			'Test Recipe 2',
			'Test Description 2',
			'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg'
		),
		new Recipe(
			'Test Recipe 3',
			'Test Description 3',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/5/1/WU0306H_perfect-french-fries_s4x3.jpg.rend.hgtvcom.826.620.suffix/1589465976850.jpeg'
		),
	];

	// We're returning a copy of the recipes array, if we simply return it,
	// it will be pass by reference
	getRecipes() {
		return this.recipes.slice();
	}
}
