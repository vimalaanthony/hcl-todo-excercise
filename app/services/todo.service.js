"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var resource_1 = require('angular2-resource-and-ajax-interceptor/httpresource/resource');
var http_1 = require('@angular/http');
var ajax_interceptor_1 = require('angular2-resource-and-ajax-interceptor/httpresource/ajax-interceptor');
var TodoService = (function (_super) {
    __extends(TodoService, _super);
    function TodoService(http, ajaxInterceptor) {
        _super.call(this, http, ajaxInterceptor);
        this.config('', {}, {
            createTodo: {
                params: {},
                url: '/api/todo',
                method: 'post'
            },
            listTodos: {
                params: {},
                url: '/api/todos',
                method: 'get'
            },
            deleteTodo: {
                params: {id:'@id'},
                url: '/api/todo/:id',
                method: 'delete'
            },
            updateTodo: {
                params: {id:'@id'},
                url: '/api/todo/:id',
                method: 'put'
            }
        });
    }
    TodoService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http, ajax_interceptor_1.AjaxInterceptor])
    ], TodoService);
    return TodoService;
}(resource_1.Resource));
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map