import { Component, HostListener, OnInit } from '@angular/core';

import { DeviceManagerService } from './services/device-manager.service';
import { FlickrApiService } from './services/flickr-api.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'portfolio';

	constructor(
		private deviceManagerService: DeviceManagerService,
		private flickrApiService: FlickrApiService
	) {}

	ngOnInit() {
		let backgroundMusic = <HTMLMediaElement>(
			document.getElementById('background-music')
		);
		if (backgroundMusic) {
			backgroundMusic.volume = 0.1;
		}
		this.deviceManagerService.device =
			window.innerWidth >= 600 ? 'desktop' : 'mobile';
		this.flickrApiService.getMyFlickrImages().subscribe();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.deviceManagerService.device =
			event.target.innerWidth >= 600 ? 'desktop' : 'mobile';
	}

	@HostListener('window:scroll', [])
	onScroll(): void {
		let menu = document.getElementById('menu');
		if (menu) {
			if (window.scrollY > 0) {
				menu.style.boxShadow = `0px 1px 16px 0px rgb(0 0 0 / 16%)`;
			} else {
				menu.style.boxShadow = 'unset';
			}
		}
	}
}
