import {Component,Input,Output,EventEmitter} from 'angular2/core';
@Component({
  selector: 'snmenu',
  template:`<div >
                <input type='button' value='{{menu}}' *ngFor="#menu of menujson;" (click)='menuselected(menu)'>
            </div>
            `
  })
export class MenuComponent { 
    @Input() menujson:any;
    
    menuselected(value){
        console.log(value);
    }
}
