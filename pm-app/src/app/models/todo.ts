import { TodoStatus } from '../enums/todo-status.enum';

export class Todo {
	id: 					number;
	name: 				string = '';
	developer: 		string = '';
	project: 			string = '';
	status: 			TodoStatus = TodoStatus["unassigned"];
	project_id: 	number;
	user_id: 			number;

	constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
