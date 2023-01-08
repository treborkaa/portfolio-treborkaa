import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { GaleryComponent } from './components/galery/galery.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { DeviceManagerService } from './services/device-manager.service';
import { BurgerModalComponent } from './components/burger-modal/burger-modal.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		NewsComponent,
		GaleryComponent,
		AboutComponent,
		ContactComponent,
		HomeComponent,
  BurgerModalComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [DeviceManagerService],
	bootstrap: [AppComponent],
	// schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
