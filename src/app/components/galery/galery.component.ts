import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { ImageDto } from 'src/app/models/images-list.model';
import { FlickrApiService } from 'src/app/services/flickr-api.service';

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
	@HostBinding('style.--nbOfLists')
	public nbOfLists: number = 0;

	public formattedImageList: ImageDto[] = [];
	public originalImageList: ImageDto[] = [];
	public openDetail: boolean = false;
	public selectedImg: ImageDto = this.formattedImageList[0];
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

	constructor(private flickrApiService: FlickrApiService) {}

	ngOnInit(): void {
		this.setNbOfLists();
		this.flickrApiService.flickrImagesList.subscribe((data) => {
			data.forEach((img) => {
				let imgUrl = this.flickrApiService.getImgUrl(img);
				this.formattedImageList.push({
					path: imgUrl,
					filename: '',
					alt: '',
					tags: img.tags.split(' '),
					url_original: img.url_o,
					description: img.description._content,
				});
				this.originalImageList = this.formattedImageList;
				if (this.selectedCategory.tag !== '') {
					this.formattedImageList = this.formattedImageList.filter(
						(filterImg) => filterImg.tags.includes(this.selectedCategory.tag)
					);
				}
				this.isLoaded = true;
			});
			this.originalImageList = this.formattedImageList;
			if (this.selectedCategory.tag !== '') {
				this.formattedImageList = this.formattedImageList.filter((filterImg) =>
					filterImg.tags.includes(this.selectedCategory.tag)
				);
			}
		});
	}

	setNbOfLists() {
		if (window.innerWidth < 600) {
			this.nbOfLists = 1;
		} else if (window.innerWidth < 800) {
			this.nbOfLists = 2;
		} else if (window.innerWidth < 1000) {
			this.nbOfLists = 3;
		} else if (window.innerWidth < 1200) {
			this.nbOfLists = 4;
		} else if (window.innerWidth < 1400) {
			this.nbOfLists = 5;
		} else if (window.innerWidth < 1600) {
			this.nbOfLists = 6;
		} else {
			this.nbOfLists = 7;
		}
	}

	openImg(img: any) {
		this.selectedImg = img;
		this.openDetail = !this.openDetail;
	}

	sortList() {
		let selected = this.categoryList.find(
			(cat) => cat.tag === this.categoryTag
		);
		this.selectedCategory = selected ? selected : this.selectedCategory;
		this.formattedImageList = this.originalImageList;
		if (this.selectedCategory.tag === '') {
			return;
		}
		this.formattedImageList = this.formattedImageList.filter((filterImg) =>
			filterImg.tags.includes(this.selectedCategory.tag)
		);
	}

	closeDetail() {
		console.log(this.openDetail);
		this.openDetail = !this.openDetail;
	}

	@HostListener('window:resize', [])
	onResize() {
		this.setNbOfLists();
	}
}
