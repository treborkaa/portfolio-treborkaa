import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceManagerService } from 'src/app/services/device-manager.service';

@Component({
	selector: 'app-burger-modal',
	templateUrl: './burger-modal.component.html',
	styleUrls: ['./burger-modal.component.scss'],
})
export class BurgerModalComponent {
	public activeRoute: string = '';

	constructor(
		public deviceManagerService: DeviceManagerService,
		private router: Router
	) {
		this.activeRoute = window.location.href.substring(
			window.location.href.lastIndexOf('/')
		);
	}

	navigateTo(route: string) {
		this.activeRoute = route;
		this.router.navigate([route]);
	}
}
