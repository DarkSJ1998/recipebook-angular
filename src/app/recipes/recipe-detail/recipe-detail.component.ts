import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
	// Getting the selected recipe from Parent, ie, from Recipes component
	@Input() recipe: Recipe;

	constructor(private recipeService: RecipeService) {}

	ngOnInit(): void {}

	addToShoppingList() {
		// Call the Recipe Service method that will add all the ingredients
		// of the selected recipe to the Shopping List array
		this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
	}
}
