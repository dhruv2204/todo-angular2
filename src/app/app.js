"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core'); //ES6 imports
var todo_1 = require('./todo');
//decorator
var TodoComponent = (function () {
    function TodoComponent() {
        this.todos = [];
        this.init();
    }
    TodoComponent.prototype.init = function () {
        this.todo = new todo_1.Todo();
    };
    TodoComponent.prototype.save = function () {
        this.todos.push(this.todo);
        this.init();
    };
    TodoComponent.prototype.remove = function (index) {
        this.todos.splice(index, 1);
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo-app',
            templateUrl: 'app/todo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
}());
core_1.bootstrap(TodoComponent);
//# sourceMappingURL=app.js.map