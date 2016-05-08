System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ShareAmountScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShareAmountScreen = (function () {
                function ShareAmountScreen() {
                    this.buttonText = "Share maadi";
                    this.json = {
                        "text": "Enter Amount",
                        "placeholder": "Amount",
                        "name": "amount"
                    };
                }
                ShareAmountScreen.prototype.fireevent = function () {
                    console.log("share amoubt button");
                };
                ShareAmountScreen = __decorate([
                    core_1.Component({
                        selector: 'shareamount',
                        template: "<div>\n                    <label>{{json.text}}</label>\n                    <input type=\"text\" name=\"{{json.name}}\" placeholder=\"{{json.placeholder}}\" >\n                    <button type=\"submit\" value=\"Submit\" (click)=\"fireevent()\">{{buttonText}}</button>\n               </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShareAmountScreen);
                return ShareAmountScreen;
            }());
            exports_1("ShareAmountScreen", ShareAmountScreen);
        }
    }
});
//# sourceMappingURL=shareamount.screen.js.map