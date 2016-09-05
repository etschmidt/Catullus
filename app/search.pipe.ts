import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'searchPipe'
})

export class SearchPipe implements PipeTransform {

	transform(value: any, args: string[]): any {
		let filter = args[0];
		return filter ? value.filter(carmen => carmen.caput.indexOf(filter) != -1) : value;
	}

}