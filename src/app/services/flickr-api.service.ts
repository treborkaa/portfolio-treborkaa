import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
};

@Injectable({
	providedIn: 'root',
})
export class FlickrApiService {
	flickrApiUrl = 'https://www.flickr.com/services/rest/?method=';
	apiKey = 'd2357bfb3bff2fe9a671923c2ff144dd';
	myUserId = '187510591@N08';

	constructor(private httpClient: HttpClient) {}

	getMyFlickrImages() {
		return this.httpClient.get<FlickrImages>(
			`${this.flickrApiUrl}flickr.photos.search&
				api_key=${this.apiKey}&
				user_id=${this.myUserId}
				&format=json
				&nojsoncallback=1
				&extras=url_o,tags`
		);
	}

	getImageWithId() {
		return this.httpClient.get(
			`${this.flickrApiUrl}flickr.urls.getUserPhotos&api_key=${this.apiKey}&user_id=${this.myUserId}`
		);
	}
}
