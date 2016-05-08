import {Component} from 'angular2/core';

@Component({
    selector: 'pay',
    template: `<div>
                    <label>{{json.text}}</label>
                    <input type="text" name="{{json.name}}" placeholder="{{json.placeholder}}" >
                    <button type="submit" value="Submit" (click)="fireevent()">{{buttonText}}</button>
               </div>`
})
export class PayScreen {
    buttonText:string = "paay maadi"
     json : any = {
        "text":"test",
        "placeholder":"UserName",
        "name":"name"
        };
    constructor(){}
    fireevent(){
        console.log("pay button");
    }
 }