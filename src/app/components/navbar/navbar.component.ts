import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeviceManagerService } from '../../services/device-manager.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
	public activeRoute: string = '/home';
	public isShownBurger: boolean = false;
	public titlePage: string = 'Accueil';

	constructor(
		private router: Router,
		public deviceManagerService: DeviceManagerService
	) {
		this.activeRoute = window.location.href.substring(
			window.location.href.lastIndexOf('/')
		);
		this.setTitlePage(this.activeRoute);
		router.events.subscribe(() => (this.isShownBurger = false));
	}

	ngAfterViewInit(): void {
		if (this.activeRoute === '/') {
			document.getElementById('home')?.classList.add('active');
		}
	}

	navigateTo(route: string) {
		document
			.getElementsByClassName('active')
			.item(0)
			?.classList.remove('active');
		this.activeRoute = route;
		this.router.navigate([route]);
	}

	openBurger() {
		this.isShownBurger = !this.isShownBurger;
		this.transformMenuButton(this.isShownBurger);
	}

	transformMenuButton(showBurger: boolean) {
		let upperLine = document.getElementById('upper-line');
		let xLine = document.getElementById('x-line');
		let lowerLine = document.getElementById('lower-line');
		if (upperLine && lowerLine && xLine) {
			if (showBurger) {
				upperLine.classList.add('upper-transform-close');
				xLine.classList.add('x-transform-close');
				lowerLine.classList.add('lower-transform-close');
			} else {
				upperLine.classList.remove('upper-transform-close');
				xLine.classList.remove('x-transform-close');
				lowerLine.classList.remove('lower-transform-close');
			}
		}
	}

	setTitlePage(route: string) {
		this.activeRoute = route;
		switch (route) {
			case '/galery':
				this.titlePage = 'Gallerie';
				break;
			case '/news':
				this.titlePage = 'Actus';
				break;
			case '/about':
				this.titlePage = 'Bio';
				break;
			case '/contact':
				this.titlePage = 'Contact';
				break;
			default:
				this.titlePage = 'Accueil';
		}
	}

	closeBurgerMenu(route: string) {
		if (this.activeRoute !== route) {
			this.transformMenuButton(false);
		}
		this.setTitlePage(route);
	}
}
