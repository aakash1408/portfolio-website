
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Portfolio } from './components/portfolio/portfolio';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';


export const routes: Routes = [
	{ path: 'home', component: Home },
	{ path: 'about', component: About },
	{ path: 'projects', component: Projects },
	{ path: 'portfolio', component: Portfolio },
	{ path: 'services', component: Services },
	{ path: 'contact', component: Contact },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home' }
];
