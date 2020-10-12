import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
	// Getting the selected recipe from Parent, ie, from Recipes component
	@Input() recipe: Recipe;

	constructor() {}

	ngOnInit(): void {}
}
