
import {Injectable, Inject} from '@angular/core';
import {Resource} from 'angular2-resource-and-ajax-interceptor/httpresource/resource';
import {Http} from '@angular/http';
import {AjaxInterceptor} from 'angular2-resource-and-ajax-interceptor/httpresource/ajax-interceptor';
 // ToDO Services
@Injectable()
export class TodoService extends Resource {
    constructor( @Inject(Http) http: Http, ajaxInterceptor: AjaxInterceptor) {
        super(http, ajaxInterceptor);
        this.config('', {}, {
            createTodo: {
                params: {},
                url: '/api/todo',
                method: 'post'
            },
            listTodos: {
                params: {},
                url: '/api/todo/list',
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
}
