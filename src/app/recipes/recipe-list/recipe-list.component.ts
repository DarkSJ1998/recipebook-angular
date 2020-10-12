import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
	// Event Emitter which the Parent calls, ie, Recipes component to tell which recipe has been clicked
	@Output() selectRecipeFromList = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
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

	constructor() {}

	ngOnInit(): void {}

	onSelect(recipe: Recipe) {
		this.selectRecipeFromList.emit(recipe);
	}
}
