import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

    todos: Todo[] = [
        new Todo(1, 'practice angular', false, new Date('03-08-2024')),
        new Todo(2, 'create basic angular ui', false, new Date('03-10-2024')),
        new Todo(3, 'integrate frontend and backend', false, new Date('03-11-2024')),
        new Todo(4, 'watch anime', false, new Date('03-08-2024')),
        new Todo(5, 'watch ipl', false, new Date('03-08-2024'))
    ]

    constructor() { }
}
