import { Component, HostListener, OnInit } from '@angular/core';

import { DeviceManagerService } from './services/device-manager.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'portfolio';

	constructor(private deviceManagerService: DeviceManagerService) {}

	ngOnInit() {
		this.deviceManagerService.device =
			window.innerWidth >= 480 ? 'desktop' : 'mobile';
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		console.log(event.target.innerWidth);
		this.deviceManagerService.device =
			event.target.innerWidth >= 480 ? 'desktop' : 'mobile';
	}
}
