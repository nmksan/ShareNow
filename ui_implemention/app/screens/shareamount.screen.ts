import {Component} from 'angular2/core';

@Component({
    selector: 'shareamount',
    template: `<div>
                    <label>{{json.text}}</label>
                    <input type="text" name="{{json.name}}" placeholder="{{json.placeholder}}" >
                    <button type="submit" value="Submit" (click)="fireevent()">{{buttonText}}</button>
               </div>`
})
export class ShareAmountScreen {
    buttonText:string = "Share maadi"
     json : any = {
        "text":"Enter Amount",
        "placeholder":"Amount",
        "name":"amount"
        };
    constructor(){}
    fireevent(){
        console.log("share amoubt button");
    }
 }