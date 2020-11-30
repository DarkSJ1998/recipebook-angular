import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
	// Getting the selected recipe from Parent, ie, from Recipe List component
	@Input() recipe: Recipe;

	// Event Emitter which the Parent calls, ie, Recipe List component to tell that an item has been clicked
	// Not used now
	// @Output() selectRecipeFromItem = new EventEmitter<void>();

	constructor(private recipeService: RecipeService) {}

	ngOnInit(): void {}

	onSelect() {
		// Used to emit to the parent that a recipe was selected
		// Not used now
		// this.selectRecipeFromItem.emit();

		// Used to emit the selected recipe to Service
		// which is then received by "recipes" component
		this.recipeService.recipeSelected.emit(this.recipe);
	}
}
