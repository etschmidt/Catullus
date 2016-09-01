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
		path: 'carmina/:id',
		component: CarmenDetailComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
