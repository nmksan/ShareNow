import {Component} from 'angular2/core';
import {ButtonComponent} from './scripts/button.component';
@Component({
    selector: 'my-app',
    template: '<div><snbutton></snbutton></div>',
    directives:[ButtonComponent]
})
export class AppComponent { }