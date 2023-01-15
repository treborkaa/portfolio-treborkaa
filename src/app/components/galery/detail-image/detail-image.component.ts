import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageDto } from 'src/app/models/images-list.model';

@Component({
	selector: 'app-detail-image',
	templateUrl: './detail-image.component.html',
	styleUrls: ['./detail-image.component.scss'],
	animations: [
		trigger('inOutAnimation', [
			transition('void => *', [
				style({ opacity: 0 }),
				animate('.2s ease-out', style({ opacity: 1 })),
			]),
			transition('* => void', [
				style({ opacity: 1 }),
				animate('.2s ease-in', style({ opacity: 0 })),
			]),
		]),
	],
})
export class DetailImageComponent implements OnInit {
	@Input()
	imagesList: ImageDto[] = [];

	@Input()
	selectedImg: ImageDto = this.imagesList[0];

	@Output()
	closeDetailEmitter: EventEmitter<boolean> = new EventEmitter();

	public isLoadImg: boolean = true;

	public isLoaded = false;

	constructor() {}

	ngOnInit(): void {}

	imgLoaded() {
		this.isLoadImg = false;
	}

	closeDetail() {
		this.closeDetailEmitter.emit(true);
	}

	setSelectedImg(img: ImageDto) {
		this.selectedImg = img;
		this.isLoadImg = true;
	}

	scrollInList(direction: string) {
		let listImg = document.getElementById('list-img') as HTMLDivElement;

		if (listImg) {
			if (direction === 'left') {
				listImg.style.overflowX = 'scroll';
				listImg.scrollTo({
					left: listImg.scrollLeft - 600,
					behavior: 'smooth',
				});
			} else {
				listImg.scrollTo({
					left: listImg.scrollLeft + 600,
					behavior: 'smooth',
				});
			}
		}
	}
}
