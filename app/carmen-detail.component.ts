import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Carmen } from './carmen';

import { CarmenService } from './carmen.service';

@Component({
	selector: 'my-carmen-detail',
	templateUrl: 'app/templates/carmen-detail.component.html', 
	styleUrls: ['app/styles/carmen-detail.component.css']
})

export class CarmenDetailComponent implements OnInit {
	@Input() carmen: Carmen;

	constructor (
		private carmenService: CarmenService,
		private router: Router,
		private route: ActivatedRoute) {
		}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.carmenService.getCarmen(id)
					.then(carmen => this.carmen = carmen);
		});
	}

	getNext(): void {
		this.router.navigate([`${this.carmen.id + 1}`]);
	}

	getPrevious(): void {
		this.router.navigate([`${this.carmen.id - 1}`]);
	}
}