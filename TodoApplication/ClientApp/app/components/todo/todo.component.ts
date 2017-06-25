import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import 'rxjs/add/operator/map';
import { Todo } from "../../Todo";


@Component({
    moduleId: "module.id",
    selector: 'todo',
    templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
    todos: Todo[];
    constructor(private _todoService: TodoService) {

    }

    ngOnInit() {
        this.todos = [];
        this._todoService.getTodos()
            .map(res => res.json())
            .subscribe(todos => this.todos = todos);

    }

    addTodo($event, todoText) {
        if ($event.which === 1) {
            var result;
            var newTodo = {
                text: todoText.value,
                isCompleted: false,
                id: undefined
            };

            result = this._todoService.saveTodo(newTodo);
            result.subscribe(x => {
                this.todos.push(newTodo)
                todoText.value = '';
            });
        }
    }

    setEditState(todo, state) {
        if (state) {
            todo.isEditMode = state;
        } else {
            delete todo.isEditMode;
        }
    }

    updateTodoText($event, todo) {
        if ($event.which === 13) {
            todo.text = $event.target.value;
            var _todo = {
                _id: todo.id,
                text: todo.text,
                isCompleted: todo.isCompleted
            };

            this._todoService.updateTodo(_todo)
                .subscribe(data => {
                    this.setEditState(todo, false)
            });
        }
    }

    updateStatus(todo) {
        console.log(todo.id);
        var _todo = {
            _id: todo.id,
            text: todo.text,
            isCompleted: !todo.isCompleted
        };

        this._todoService.updateTodo(_todo)
            .subscribe(data => {
                todo.isCompleted = !todo.isCompleted;
            });
    }

    deleteTodo(todo) {
        var todos = this.todos;

        this._todoService.deleteTodo(todo.id)
            .subscribe(data => {
                
                for (var i = 0; i < this.todos.length; i++) {
                    if (this.todos[i].id == todo.id) {
                        todos.splice(i, 1);
                    }
                }
                
            });
    }

}
