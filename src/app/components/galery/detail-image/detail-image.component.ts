import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageLocalDto } from 'src/app/models/images-list.model';
import { DeviceManagerService } from 'src/app/services/device-manager.service';

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
	scrollWidth = 600;

	@Input()
	imagesList: ImageLocalDto[] = [];

	@Input()
	selectedImg: ImageLocalDto = this.imagesList[0];

	@Output()
	closeDetailEmitter: EventEmitter<boolean> = new EventEmitter();

	public isLoadImg: boolean = true;

	public isLoaded = false;

	constructor(public device: DeviceManagerService) {}

	ngOnInit(): void {
		console.log(this.device.device);
	}

	imgLoaded() {
		this.isLoadImg = false;
	}

	closeDetail() {
		this.closeDetailEmitter.emit(true);
	}

	setSelectedImg(img: ImageLocalDto) {
		this.selectedImg = img;
		this.isLoadImg = true;
	}

	scrollInList(direction: string) {
		let listImg = document.getElementById('list-img') as HTMLDivElement;

		let index: number = this.imagesList.findIndex(img => img.link === this.selectedImg.link);
		let maxIndex = this.imagesList.length - 1;
		console.log(direction)

		// if (listImg) {
			if (direction === 'left') {
				console.log(index - 1 < 0 ? maxIndex : index - 1);
				this.selectedImg = this.imagesList[index - 1 < 0 ? maxIndex : index - 1];
				// listImg.style.overflowX = 'scroll';
				// listImg.scrollTo({
				// 	left: listImg.scrollLeft - window.innerWidth,
				// 	behavior: 'smooth',
				// });
			} else {
				this.selectedImg = this.imagesList[index + 1 > maxIndex ? 0 : index + 1];
				// listImg.scrollTo({
				// 	left: listImg.scrollLeft + window.innerWidth,
				// 	behavior: 'smooth',
				// });
			}
		// }
	}
}
