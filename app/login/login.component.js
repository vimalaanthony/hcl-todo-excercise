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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    //complexForm:FormGroup;
    function LoginComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.loginObj = {
            username: '',
            password: ''
        };
        console.log('Constructor invoked');
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            // loginForm
            'username': '',
            'password': ''
        });
        // this.loginForm = this.fb.group({
        //    'username': ['',Validators.required] ,
        //    'password': ['', Validators.required],
        //  });
    };
    LoginComponent.prototype.signIn = function (data) {
        console.log('data', data);
        this.router.navigateByUrl('/todos');
    };
    ;
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'sd-login',
            templateUrl: './app/login/login.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map