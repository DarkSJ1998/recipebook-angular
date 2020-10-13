import {
	Component,
	ElementRef,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
	// Event Emitter to emit the ingredient to parent, ie, shopping-list component
	@Output() addIngredientFromEdit = new EventEmitter<Ingredient>();

	// For viewing the template's local references
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;

	constructor() {}

	ngOnInit(): void {}

	addIngredient() {
		const ingredientName = this.nameInputRef.nativeElement.value;
		const ingredientAmount = this.amountInputRef.nativeElement.value;

		this.addIngredientFromEdit.emit(
			new Ingredient(ingredientName, ingredientAmount)
		);
	}

	deleteIngredient() {}
}
