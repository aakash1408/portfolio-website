
import { RouterModule, Routes } from '@angular/router';
// import { Home } from './components/home/home';
// import { About } from './components/about/about';
// import { Projects } from './components/projects/projects';
// import { Portfolio } from './components/portfolio/portfolio';
// import { Services } from './components/services/services';
// import { Contact } from './components/contact/contact';
import { Main } from './components/main/main';


import { ContactForm } from './components/contact-form/contact-form';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'contact-form', component: ContactForm },
  { path: '**', redirectTo: '' }
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       anchorScrolling: 'enabled',             // scroll to fragment
//       scrollPositionRestoration: 'enabled'   // restore scroll on back/forward
//     })
//   ],
// })
// export class AppModule {}
