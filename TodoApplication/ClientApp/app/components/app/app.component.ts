import { Component } from '@angular/core';
import { TodoService } from "../../services/todo.service";

@Component({
    moduleId: "module.id",
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        TodoService
    ]
})
export class AppComponent {
}
