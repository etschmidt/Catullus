import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatullusComponent } from './catullus.component';
import { AboutComponent } from './about.component';
import { CarmenDetailComponent } from './carmen-detail.component';

const appRoutes: Routes = [
	{
	  path: '',
	  redirectTo: '/1',
	  pathMatch: 'full'
	},
	{
		path: 'catullus',
		component: CatullusComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: ':id',
		component: CarmenDetailComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
