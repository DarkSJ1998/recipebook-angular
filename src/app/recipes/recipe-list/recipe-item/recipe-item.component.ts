import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
	// Getting the selected recipe from Parent, ie, from Recipe List component
	@Input() recipe: Recipe;

	// Event Emitter which the Parent calls, ie, Recipe List component to tell that an item has been clicked
	@Output() selectRecipeFromItem = new EventEmitter<void>();

	constructor() {}

	ngOnInit(): void {}

	onSelect() {
		this.selectRecipeFromItem.emit();
	}
}
