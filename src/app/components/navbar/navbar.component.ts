import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DeviceManagerService } from '../../services/device-manager.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
	public activeRoute: string = '/home';
	public isShownBurger: boolean = false;

	constructor(
		private router: Router,
		public deviceManagerService: DeviceManagerService
	) {
		this.activeRoute = window.location.href.substring(
			window.location.href.lastIndexOf('/')
		);
		router.events.subscribe(() => (this.isShownBurger = false));
	}

	navigateTo(route: string) {
		this.activeRoute = route;
		this.router.navigate([route]);
	}

	openBurger() {
		this.isShownBurger = !this.isShownBurger;
	}
}
