import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	OnInit,
	Output,
} from '@angular/core';

@Directive({
	selector: 'div[loaded]',
})
export class PopupLoadedDirective implements OnInit {
	@Output() loaded = new EventEmitter();

	ngOnInit(): void {
		this.loaded.emit();
	}
}
