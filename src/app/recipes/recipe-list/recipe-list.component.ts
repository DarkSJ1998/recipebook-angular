import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
	// Just the instance variable to store the array of recipes
	recipes: Recipe[];

	constructor(private recipeService: RecipeService) {}

	ngOnInit(): void {
		// Retrieves the list of recipes from service
		this.recipes = this.recipeService.getRecipes();
	}
}
