import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { CImgList, ImageDto, ImageLocalDto } from 'src/app/models/images-list.model';
import { FlickrApiService } from 'src/app/services/flickr-api.service';
import { DeviceManagerService } from 'src/app/services/device-manager.service';

type Category = { tag: string; label: string };

@Component({
	selector: 'app-galery',
	templateUrl: './galery.component.html',
	styleUrls: ['./galery.component.scss', './galery-second.component.scss'],
	animations: [
		trigger('enterImgAnimation', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('.5s ease-out', style({ opacity: 1 })),
			]),
		]),
	],
})
export class GaleryComponent implements OnInit {

	public imgList: ImageLocalDto[] = CImgList;
	public openDetail: boolean = false;
	public selectedImg: ImageLocalDto = this.imgList[0];
	public categoryList: Category[] = [
		{ tag: '', label: 'Tout voir' },
		{ tag: 'animal', label: 'Animalier' },
		{ tag: 'nature', label: 'Nature' },
		{ tag: 'noirblanc', label: 'Noir et blanc' },
		{ tag: 'portrait', label: 'Portrait' },
		{ tag: 'sport', label: 'Sport' },
		{ tag: 'heuredoree', label: 'Heure dorée' },
		{ tag: 'ville', label: 'Urbain' },
		{ tag: 'nuit', label: 'Nocturne' },
		{ tag: 'astrophoto', label: 'Astrologie' },
	];
	public selectedCategory: Category = { tag: '', label: 'Tout voir' };
	public categoryTag: string = '';
	public isLoadImg: boolean = true;

	public isLoaded = false;

	public device: string = '';

	constructor(private flickrApiService: FlickrApiService,
				private deviceManagerService: DeviceManagerService) {}

	ngOnInit(): void {

		this.device = this.deviceManagerService.device;
		this.imgList = this.imgList
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

		this.isLoaded = true;
	}


	openImg(img: any) {
		this.selectedImg = img;
		this.openDetail = !this.openDetail;
	}

	closeDetail() {
		this.openDetail = !this.openDetail;
	}
}
