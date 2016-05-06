import {Component} from 'angular2/core';
import {ButtonComponent} from './scripts/button.component';
import {TextBoxComponent} from './scripts/textbox.component';
import {RadioButtonComponent} from './scripts/radiobutton.component';
import {CheckboxComponent} from './scripts/checkbox.component';
import {MenuComponent} from './scripts/menu.component';
import {CreateGroupService,Vehicle} from './services/creategroup.service';
import { Observable } from 'rxjs/Rx';
@Component({
    selector: 'myapp',
    
    template: `<div>
                <img src="images/logo.png">
                <label id='appname'>Share Now</label>
                <sntextbox [json]='jsondata'></sntextbox>
                <snbutton  (myevent)=getcg()></snbutton>
                <snradiobutton [radiobuttons]='radiobuttons'></snradiobutton>
                <sncheckbox [checkboxjson]='radiobuttons'></sncheckbox>
                <snmenu [menujson]='menulist'></snmenu>
                <ul>
                    <li *ngFor="#vehicle of cg | async">
                        {{ vehicle.menuType }}
                    </li>
                </ul>
               </div>`,
    directives:[ButtonComponent,TextBoxComponent,RadioButtonComponent,CheckboxComponent,MenuComponent]
})
export class AppComponent {
     cg: Observable<Vehicle[]>;
    jsondata : any = {
        "text":"test",
        "placeholder":"UserName",
        "name":"name"
        };
    menulist=['Home','Pay','create group','logout'];
        radiobuttons:any = 
        [
            {"name" : "apple",
            "group" : "fruits",
            "id" : "apple"},
            {"name" : "orange",
            "group" : "fruits",
            "id" : "orange"},
            {"name" : "other",
            "group" : "fruits",
            "id" : "otherfruit"}
        ] 
    constructor(public createg : CreateGroupService){
        
    }
        handleevent(){
            alert("hi");
            
        }
        
       
        getcg(){
        // this.cg = this.createg.getcreategroup();
        // console.log("creategrp");
        // console.log(this.cg)
        console.log("end");
        }
        
 }