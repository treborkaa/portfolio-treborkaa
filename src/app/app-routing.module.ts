import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { GaleryComponent } from './components/galery/galery.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'news', component: NewsComponent },
	{ path: 'galery', component: GaleryComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
