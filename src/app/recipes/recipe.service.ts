import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
	// It is used by the "recipes-item" component to emit
	// the recipe to the "recipes" component and then, this
	// selected recipe is passed down.
	recipeSelected = new EventEmitter<Recipe>();

	// The list of recipes
	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnitzel',
			'A super-tasty Schnitzel - just awesome!',
			'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
			[new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
		),
		new Recipe(
			'Bit Fat Burger',
			'What else do you need to say?',
			'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
			[new Ingredient('Buns', 2), new Ingredient('Veg Pattie', 1)]
		),
		new Recipe(
			'Test Recipe 1',
			'Test Description 1',
			'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?webp=true&quality=90&crop=1px%2C328px%2C597px%2C257px&resize=556%2C236',
			[]
		),
		new Recipe(
			'Test Recipe 2',
			'Test Description 2',
			'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',
			[]
		),
		new Recipe(
			'Test Recipe 3',
			'Test Description 3',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/5/1/WU0306H_perfect-french-fries_s4x3.jpg.rend.hgtvcom.826.620.suffix/1589465976850.jpeg',
			[]
		),
	];

	constructor(private shoppingListService: ShoppingListService) {}

	// We're returning a copy of the recipes array, if we simply return it,
	// it will be pass by reference
	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		// Call the Shopping Service method that will add all the ingredients
		// of the selected recipe to the Shopping List array
		this.shoppingListService.addRecipeIngredients(ingredients);
	}
}
