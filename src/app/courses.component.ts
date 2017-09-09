import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <button class="btn btn-primary" 
            [class.active]="isActive"
            (click)="onSave($event)">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Button</button>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    `
})
export class CoursesComponent {
    email = "me@email.com";
    title = "List of courses";
    isActive = true;
    courses;

    onSave($event){
        console.log("button was clicked", $event);
    }

    onKeyUp(){
            console.log(this.email);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}