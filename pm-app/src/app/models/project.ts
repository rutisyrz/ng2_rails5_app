export class Project {
	id: 					number;
	name: 				string = '';
	user_id: 			number;

	constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
