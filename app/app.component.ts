import {Component} from '@angular/core';
export class Heroine {
	id: number;
	name: string;
}
@Component({
  selector: 'my-app',
  template: `
		<h1>{{title}}</h1>
		<h2>{{heroine.name}} Heroe</h2>
		<div><label>identificador: </label>{{heroine.id}}</div>
		<div>
			<label>nombre: </label>
			<input [(ngModel)]="heroine.name" placeholder="batman">
		</div>
		`
})
export class AppComponent  {
	title = 'Heroes';
	heroine: Heroine = {
		id: 1,
		name: 'Batman'
	};
}
