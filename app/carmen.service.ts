import { Injectable } from '@angular/core';

import { Carmen } from './carmen';
import { CARMINA } from './carmina';

@Injectable()
export class CarmenService {
	getCarmina(): Promise<Carmen[]> {
		return Promise.resolve(CARMINA);
	}

	getCarmen(id: number): Promise<Carmen> {
		return this.getCarmina()
							 .then(carmina => carmina.find(carmen => carmen.id === id));
	}
}