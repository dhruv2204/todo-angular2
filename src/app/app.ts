import {bootstrap, Component} from 'angular2/core';	//ES6 imports
import {Todo} from './todo';

//decorator
@Component({
	selector: 'todo-app',
	templateUrl: 'app/todo.html'
})

class TodoComponent{

	public todo: Todo;
    public todos: Todo[] = [];

    constructor() {
        this.init();
    }

    init() {
        this.todo = new Todo();
    }

    save() {
        this.todos.push(this.todo);
        this.init();
    }

    remove(index) {
        this.todos.splice(index, 1);
    }

}

bootstrap(TodoComponent);