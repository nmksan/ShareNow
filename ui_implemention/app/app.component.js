System.register(['angular2/core', './scripts/button.component', './scripts/textbox.component', './scripts/radiobutton.component', './scripts/checkbox.component', './scripts/menu.component', './services/creategroup.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, button_component_1, textbox_component_1, radiobutton_component_1, checkbox_component_1, menu_component_1, creategroup_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_component_1_1) {
                button_component_1 = button_component_1_1;
            },
            function (textbox_component_1_1) {
                textbox_component_1 = textbox_component_1_1;
            },
            function (radiobutton_component_1_1) {
                radiobutton_component_1 = radiobutton_component_1_1;
            },
            function (checkbox_component_1_1) {
                checkbox_component_1 = checkbox_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (creategroup_service_1_1) {
                creategroup_service_1 = creategroup_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(createg) {
                    this.createg = createg;
                    this.jsondata = {
                        "text": "test",
                        "placeholder": "UserName",
                        "name": "name"
                    };
                    this.menulist = ['Home', 'Pay', 'create group', 'logout'];
                    this.radiobuttons = [
                        { "name": "apple",
                            "group": "fruits",
                            "id": "apple" },
                        { "name": "orange",
                            "group": "fruits",
                            "id": "orange" },
                        { "name": "other",
                            "group": "fruits",
                            "id": "otherfruit" }
                    ];
                }
                AppComponent.prototype.handleevent = function () {
                    alert("hi");
                };
                AppComponent.prototype.getcg = function () {
                    // this.cg = this.createg.getcreategroup();
                    // console.log("creategrp");
                    // console.log(this.cg)
                    console.log("end");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'myapp',
                        template: "<div>\n                <img src=\"images/logo.png\">\n                <label id='appname'>Share Now</label>\n                <sntextbox [json]='jsondata'></sntextbox>\n                <snbutton  (myevent)=getcg()></snbutton>\n                <snradiobutton [radiobuttons]='radiobuttons'></snradiobutton>\n                <sncheckbox [checkboxjson]='radiobuttons'></sncheckbox>\n                <snmenu [menujson]='menulist'></snmenu>\n                <ul>\n                    <li *ngFor=\"#vehicle of cg | async\">\n                        {{ vehicle.menuType }}\n                    </li>\n                </ul>\n               </div>",
                        directives: [button_component_1.ButtonComponent, textbox_component_1.TextBoxComponent, radiobutton_component_1.RadioButtonComponent, checkbox_component_1.CheckboxComponent, menu_component_1.MenuComponent]
                    }), 
                    __metadata('design:paramtypes', [creategroup_service_1.CreateGroupService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map