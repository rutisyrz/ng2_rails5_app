export class User {
	id: 		number;
	email:	string = '';

	constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
