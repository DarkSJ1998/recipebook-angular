import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.css'],
	providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
	// Variable to store the details of the Recipe that is selected
	selectedRecipe: Recipe;

	constructor(private recipeService: RecipeService) {}

	ngOnInit(): void {
		// We subscribe to receive any changes done
		this.recipeService.recipeSelected.subscribe(
			(recipeSelected: Recipe) => (this.selectedRecipe = recipeSelected)
		);
	}
}
