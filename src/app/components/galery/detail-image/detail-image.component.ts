import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
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
export class DetailImageComponent implements OnInit, OnDestroy {
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
		document.body.style.overflow = 'hidden';
	}

	ngOnDestroy(): void {
		document.body.style.removeProperty('overflow');
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

	nextImg(direction: string) {
		let listImg = document.getElementById('list-img') as HTMLDivElement;
		let index: number = this.imagesList.findIndex(img => img.link === this.selectedImg.link);
		let maxIndex = this.imagesList.length - 1;
		
		this.selectedImg = direction === 'left' ?
			this.imagesList[index - 1 < 0 ? maxIndex : index - 1] :
			this.selectedImg = this.imagesList[index + 1 > maxIndex ? 0 : index + 1];
	
	}
}
