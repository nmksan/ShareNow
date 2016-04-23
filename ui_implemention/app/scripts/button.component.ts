import {Component} from 'angular2/core';
@Component({
  selector: 'snbutton',
  template:`<div><button type="submit" value="Submit">{{buttonText}}</button></div>`
  })
export class ButtonComponent { 
    buttonText = "Login";
}
