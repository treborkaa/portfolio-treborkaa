import {
	Directive,
	Output,
	EventEmitter,
	ElementRef,
	HostListener,
	OnInit,
} from '@angular/core';

@Directive({
	selector: 'img[loaded]',
})
export class ImgLoadedDirective {
	@Output() loaded = new EventEmitter();

	@HostListener('load')
	onLoad() {
		this.loaded.emit();
	}

	constructor(private elRef: ElementRef<HTMLImageElement>) {
		console.log('IMG LOADED');
		if (this.elRef.nativeElement.complete) {
			// console.log(this.elRef.nativeElement.loading, 'df sdf sssssd fsdf ');
			this.loaded.emit();
		}
		// console.log(this.elRef.nativeElement.loading, 'df sdf sd fsdf ');
	}
}
