System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var Vehicle, CreateGroupService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            Vehicle = (function () {
                function Vehicle(id, name, side) {
                    this.id = id;
                    this.name = name;
                    this.side = side;
                }
                return Vehicle;
            }());
            exports_1("Vehicle", Vehicle);
            CreateGroupService = (function () {
                function CreateGroupService(_http) {
                    this._http = _http;
                }
                CreateGroupService.prototype.getcreategroup = function (value) {
                    return this._http.get('app/json/creategroup.json')
                        .map(function (response) {
                        var vehicles = response.json().data;
                        console.log(response.json().data);
                        if (!value)
                            return vehicles;
                        return vehicles.filter(function (v) { return v.name.toLowerCase().includes(value.toLowerCase()); });
                    })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                CreateGroupService.prototype.testsample = function () {
                    return this._http.get('app/json/creategroup.json').map(function (response) { return response.json(); });
                };
                CreateGroupService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                CreateGroupService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CreateGroupService);
                return CreateGroupService;
            }());
            exports_1("CreateGroupService", CreateGroupService);
        }
    }
});
//# sourceMappingURL=creategroup.service.js.map