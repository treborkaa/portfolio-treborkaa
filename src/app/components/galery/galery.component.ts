import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { CImgList, ImageDto, ImageLocalDto } from 'src/app/models/images-list.model';
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

	public formattedImageList: ImageLocalDto[] = [];
	public originalImageList: ImageLocalDto[] = [];
	public openDetail: boolean = false;
	public selectedImg: ImageLocalDto = this.formattedImageList[0];
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

	public imgList: ImageLocalDto[] = CImgList;

	constructor(private flickrApiService: FlickrApiService) {}

	ngOnInit(): void {

		this.imgList = this.imgList
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)

		this.setNbOfLists();
		this.formattedImageList = this.imgList;
		this.originalImageList = this.imgList;
		this.isLoaded = true;
		// this.flickrApiService.flickrImagesList.subscribe((data) => {
		// 	data.forEach((img) => {
		// 		let imgUrl = this.flickrApiService.getImgUrl(img);
		// 		this.formattedImageList.push({
		// 			link: imgUrl,
		// 			// path: imgUrl,
		// 			// filename: '',
		// 			// alt: '',
		// 			// tags: img.tags.split(' '),
		// 			// url_original: img.url_o,
		// 			// description: img.description._content,
		// 		});
		// 		this.originalImageList = this.formattedImageList;
		// 		// if (this.selectedCategory.tag !== '') {
		// 		// 	this.formattedImageList = this.formattedImageList.filter(
		// 		// 		(filterImg) => filterImg.tags.includes(this.selectedCategory.tag)
		// 		// 	);
		// 		// }
		// 		this.isLoaded = true;
		// 	});
		// 	this.originalImageList = this.formattedImageList;
		// 	// if (this.selectedCategory.tag !== '') {
		// 	// 	this.formattedImageList = this.formattedImageList.filter((filterImg) =>
		// 	// 		filterImg.tags.includes(this.selectedCategory.tag)
		// 	// 	);
		// 	// }
		// });
	}

	setNbOfLists() {
		if (window.innerWidth < 600) {
			this.nbOfLists = 1;
		} else if (window.innerWidth < 800) {
			this.nbOfLists = 2;
		} else if (window.innerWidth < 1000) {
			this.nbOfLists = 3;
		} else {
			this.nbOfLists = 4;
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
		// this.formattedImageList = this.formattedImageList.filter((filterImg) =>
		// 	filterImg.tags.includes(this.selectedCategory.tag)
		// );
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
