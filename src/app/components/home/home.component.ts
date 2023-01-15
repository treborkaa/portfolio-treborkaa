import { Component, OnInit } from '@angular/core';
import {
	FlickrApiService,
	FlickrPhoto,
} from '../../services/flickr-api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public imgUrl: string = '';

	constructor(private flickrApiService: FlickrApiService) {
		this.flickrApiService.flickrImagesList.subscribe((value) => {
			let imgTmp = value.find((T) => T.title === 'Arbre_N&B');
			if (imgTmp) {
				this.imgUrl = imgTmp.url_o;
			}
		});
	}

	ngOnInit(): void {}
}
