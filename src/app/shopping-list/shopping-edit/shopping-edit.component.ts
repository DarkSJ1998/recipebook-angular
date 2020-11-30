import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
	// Event Emitter to emit the ingredient to parent, ie, shopping-list component
	// Not needed now
	// @Output() addIngredientFromEdit = new EventEmitter<Ingredient>();

	// For viewing the template's local references
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;

	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit(): void {}

	addIngredient() {
		const ingredientName = this.nameInputRef.nativeElement.value;
		const ingredientAmount = this.amountInputRef.nativeElement.value;

		// Not needed now
		// this.addIngredientFromEdit.emit(
		// 	new Ingredient(ingredientName, ingredientAmount)
		// );
		this.shoppingListService.addIngredient(
			new Ingredient(ingredientName, ingredientAmount)
		);
	}

	deleteIngredient() {}
}
