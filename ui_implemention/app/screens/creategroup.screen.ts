import {Component} from 'angular2/core';

@Component({
    selector: 'creategroup',
    template: `<div>
                    <label>{{json.text}}</label>
                    <input type="text" name="{{json.name}}" placeholder="{{json.placeholder}}" >
                    <button type="submit" value="Submit" (click)="fireevent()">{{buttonText}}</button>
               </div>`
})
export class CreateGroupScreen {
    buttonText:string = "crete";
     json : any = {
        "text":"creategroup",
        "placeholder":"Group Name",
        "name":"name"
        };
    constructor(){}
    fireevent(){
        console.log("creategroup button");
    }
 }