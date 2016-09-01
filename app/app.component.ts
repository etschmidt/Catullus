import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Carmen } from './carmen';
import { CarmenService } from './carmen.service';


@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>

<nav>
	<a routerLink="/catullus" routerLinkActive="active">Catullus</a>
	<a routerLink="/about" routerLinkActive="active">De situ</a>
</nav>

<ul class="carmina">
	<li *ngFor="let carmen of carmina">
		<a routerLink="/{{carmen.id}}" routerLinkActive="active">
		<span class="badge">{{carmen.id}}</span>
		{{carmen.caput}}
		</a>
	</li>
</ul>

<router-outlet></router-outlet>`,
	styleUrls: [
	'app/styles/app.component.css',
	'app/styles/carmina.component.css'
	]
})

export class AppComponent implements OnInit {
	title = 'Carmina Catulli';
	carmina: Carmen[];

	constructor(
		private router: Router,
		private carmenService: CarmenService) { }

	getCarmina(): void {
		this.carmenService.getCarmina().then(carmina => this.carmina = carmina);
	}

	ngOnInit(): void {
		this.getCarmina();
	}
}