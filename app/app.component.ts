import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>

<nav>
	<a routerLink="/catullus" routerLinkActive="active">Catullus</a>
		<router-outlet></router-outlet>
	<a routerLink="/carmina" routerLinkActive="active">Carmina</a>
		<router-outlet></router-outlet>
	<a routerLink="/about" routerLinkActive="active">De situ</a>
</nav>

<router-outlet></router-outlet>`,
	styleUrls: ['app/styles/app.component.css']
})

export class AppComponent {
	title = 'Carmina Catulli';
}