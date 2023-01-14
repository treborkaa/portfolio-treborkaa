import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Image, imagesList } from 'src/app/models/images-list.model';
import {
	FlickrApiService,
	FlickrImages,
	FlickrPhoto,
} from 'src/app/services/flickr-api.service';

@Component({
	selector: 'app-galery',
	templateUrl: './galery.component.html',
	styleUrls: ['./galery.component.scss'],
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
export class GaleryComponent implements OnInit {
	public nbItemsLoaded: number = 10;
	public formattedImageList: Image[] = [];
	public showImg: boolean = false;
	public selectedImg!: Image;
	public categoryList = [
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
	public selectedCategory = { tag: '', label: '' };

	constructor(private flickrApiService: FlickrApiService) {}

	ngOnInit(): void {
		this.flickrApiService
			.getMyFlickrImages()
			.subscribe((data: FlickrImages) => {
				let flickrImageList: FlickrPhoto[] = data.photos.photo;
				// console.log(data, ret);
				flickrImageList.forEach((img) => {
					let imgUrl = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
					this.formattedImageList.push({
						path: imgUrl,
						filename: '',
						alt: '',
						tags: img.tags.split(' '),
						url_original: img.url_o,
					});
				});
			});
	}

	openImg(img: any) {
		this.selectedImg = img;
		this.showImg = !this.showImg;
	}

	@HostListener('window:scroll', [])
	onScroll(): void {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			this.nbItemsLoaded += 5;
		}
	}
}
