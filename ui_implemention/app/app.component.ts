import {Component} from 'angular2/core';
import {ButtonComponent} from './scripts/button.component';
@Component({
    selector: 'myapp',
    template: `<div>
                <img src="images/logo.png">
                <label>Share Now</label>
                <snbutton></snbutton>
               </div>`,
    directives:[ButtonComponent]
})
export class AppComponent { }