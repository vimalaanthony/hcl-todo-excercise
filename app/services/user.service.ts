
import {Injectable, Inject} from '@angular/core';
import {Resource} from 'angular2-resource-and-ajax-interceptor/httpresource/resource';
import {Http} from '@angular/http';
import {AjaxInterceptor} from 'angular2-resource-and-ajax-interceptor/httpresource/ajax-interceptor';

@Injectable()
export class UserService extends Resource {
  constructor( @Inject(Http) http: Http, ajaxInterceptor: AjaxInterceptor) {
    super(http, ajaxInterceptor);
    this.config('', {}, {
      login: {
        params: {},
        url: '/api/users/login',
        method: 'post'
      }
    });
  }
}
