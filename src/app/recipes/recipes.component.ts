import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
	// Variable to store the details of the Recipe that is selected
	selectedRecipe: Recipe;

	constructor() {}

	ngOnInit(): void {}
}
