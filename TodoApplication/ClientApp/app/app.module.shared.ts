import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Http, Headers } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component'
import { TodoComponent } from './components/todo/todo.component'
import { TodoService } from './services/todo.service';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        TodoComponent
    ],
    imports: [
        HttpModule, BrowserModule
    ],
    providers: [
        TodoService
    ]
};
