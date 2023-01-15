import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

export type FlickrImages = {
	photos: {
		photo: FlickrPhoto[];
	};
};

export type FlickrPhoto = {
	farm: number;
	id: string;
	isfamily: number;
	isfriend: number;
	ispublic: number;
	owner: string;
	secret: string;
	server: string;
	title: string;
	url_o: string;
	tags: string;
	description: { _content: string };
};

@Injectable({
	providedIn: 'root',
})
export class FlickrApiService {
	flickrApiUrl = 'https://www.flickr.com/services/rest/?method=';
	apiKey = 'd2357bfb3bff2fe9a671923c2ff144dd';
	myUserId = '187510591@N08';

	flickrImagesList: BehaviorSubject<FlickrPhoto[]>;

	constructor(private httpClient: HttpClient) {
		this.flickrImagesList = new BehaviorSubject<FlickrPhoto[]>([]);
	}

	getMyFlickrImages() {
		return this.httpClient
			.get<FlickrImages>(
				`${this.flickrApiUrl}flickr.photos.search&
				api_key=${this.apiKey}&
				user_id=${this.myUserId}
				&format=json
				&nojsoncallback=1
				&extras=url_o,tags,description`
			)
			.pipe(
				map((data: FlickrImages) => {
					this.flickrImagesList.next(data.photos.photo);
				})
			);
	}

	getImageWithId() {
		return this.httpClient.get(
			`${this.flickrApiUrl}flickr.urls.getUserPhotos&api_key=${this.apiKey}&user_id=${this.myUserId}`
		);
	}

	getImageInListWithName(imgName: string) {
		return this.flickrImagesList.value.find((img) => img.title);
	}

	getImgUrl(img: FlickrPhoto) {
		return `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
	}
}
