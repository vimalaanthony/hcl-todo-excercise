"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
/*route injection*/
var app_route_1 = require('./routes/app.route');
/*Login components*/
var login_component_1 = require('./login/login.component');
var todos_component_1 = require('./todos/todos.component');
/* Import  Services */
var ajax_interceptor_1 = require('angular2-resource-and-ajax-interceptor/httpresource/ajax-interceptor');
/*import material component*/
var core_2 = require("@angular2-material/core");
var menu_1 = require('@angular2-material/menu');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_route_1.routing, forms_1.FormsModule, forms_1.ReactiveFormsModule, menu_1.MdMenuModule, button_1.MdButtonModule, icon_1.MdIconModule],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, todos_component_1.TodosComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [icon_1.MdIconRegistry, core_2.OVERLAY_PROVIDERS, forms_1.FormBuilder, ajax_interceptor_1.AjaxInterceptor]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map