import {Component} from 'angular2/core';
import {ButtonComponent} from './scripts/button.component';
import {TextBoxComponent} from './scripts/textbox.component';
import {RadioButtonComponent} from './scripts/radiobutton.component';
import {CheckboxComponent} from './scripts/checkbox.component';
@Component({
    selector: 'myapp',
    
    template: `<div>
                <img src="images/logo.png">
                <label id='appname'>Share Now</label>
                <sntextbox [json]='jsondata'></sntextbox>
                <snbutton  (myevent)=handleevent()></snbutton>
                <snradiobutton [radiobuttons]='radiobuttons'></snradiobutton>
                <sncheckbox [checkboxjson]='radiobuttons'></sncheckbox>
               </div>`,
    directives:[ButtonComponent,TextBoxComponent,RadioButtonComponent,CheckboxComponent]
})
export class AppComponent {
    jsondata : any = {
        "text":"test",
        "placeholder":"UserName",
        "name":"name"
        };
    
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
    
        handleevent(){
            alert("hi");
            
        }
 }