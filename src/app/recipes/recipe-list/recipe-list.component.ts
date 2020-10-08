import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe(
			'Test Recipe',
			'Test Description',
			'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?webp=true&quality=90&crop=1px%2C328px%2C597px%2C257px&resize=556%2C236'
		),
		new Recipe(
			'Test Recipe 2',
			'Test Description 2',
			'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?webp=true&quality=90&crop=1px%2C328px%2C597px%2C257px&resize=556%2C236'
		),
		new Recipe(
			'Test Recipe 3',
			'Test Description 3',
			'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?webp=true&quality=90&crop=1px%2C328px%2C597px%2C257px&resize=556%2C236'
		),
	];

	constructor() {}

	ngOnInit(): void {}
}
