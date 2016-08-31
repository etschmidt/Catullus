import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Carmen } from './carmen';
import { CarmenService } from './carmen.service';

@Component ({
	selector: 'my-carmina',
	templateUrl: 'app/templates/carmina.component.html',
	styleUrls: ['app/styles/carmina.component.css'],
	providers: [CarmenService]
})

export class CarminaComponent implements OnInit {
	title = 'Carmina';
	carmina: Carmen[];
	selectedCarmen: Carmen;

	constructor(
		private router: Router,
		private carmenService: CarmenService) { }

	getCarmina(): void {
		this.carmenService.getCarmina().then(carmina => this.carmina = carmina);
	}

	ngOnInit(): void {
		this.getCarmina();
	}

	onSelect(carmen: Carmen): void {
		this.selectedCarmen = carmen;
	}
}

