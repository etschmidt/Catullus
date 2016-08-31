import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarminaComponent } from './carmina.component';
import { CatullusComponent } from './catullus.component';
import { AboutComponent } from './about.component';
import { CarmenDetailComponent } from './carmen-detail.component';

const appRoutes: Routes = [
	{
	  path: '',
	  redirectTo: '/carmina',
	  pathMatch: 'full'
	},
	{
		path: 'catullus',
		component: CatullusComponent
	},
	{
		path: 'carmina',
		component: CarminaComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'carmen/:id',
		component: CarmenDetailComponent
	},
	{
	  path: 'carmen/0',
	  redirectTo: '/carmina',
	  pathMatch: 'full'
	},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
