import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: 'img[appLazyImage]',
})
export class LazyImageDirective {
	constructor(el: ElementRef) {
		el.nativeElement.setAttribute('loading', 'lazy');
	}
}
