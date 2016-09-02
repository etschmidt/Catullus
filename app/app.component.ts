import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Carmen } from './carmen';
import { CarmenService } from './carmen.service';


@Component({
	selector: 'my-app',
	templateUrl: 'app/templates/app.component.html',
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