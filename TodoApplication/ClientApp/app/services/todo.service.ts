import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
    constructor(public _http: Http) {
        
    }
    getTodos() {
        return this._http.get('/api/todo');
    }

    saveTodo(todo){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/todo', JSON.stringify(todo), { headers: headers });
    }

    updateTodo(todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/todo/' + todo._id, JSON.stringify(todo), { headers: headers });
    }

    deleteTodo(id) {
        return this._http.delete('/api/todo/' + id);
    }

}