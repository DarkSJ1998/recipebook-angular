import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appDropdown]',
})
export class DropdownDirective {
	// To bind to the "open" class of the element
	@HostBinding('class.open') isOpen: boolean = false;

	// To be executed on the clicking on the element
	@HostListener('click') click() {
		this.isOpen = !this.isOpen;
	}
}
