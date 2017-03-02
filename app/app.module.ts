import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, FormBuilder, ReactiveFormsModule}      from '@angular/forms';

/*route injection*/
import {routing} from './routes/app.route';

/*Import components*/
import {LoginComponent} from './login/login.component';
import {TodosComponent} from './todos/todos.component';

/* Import  Services */
import {AjaxInterceptor} from 'angular2-resource-and-ajax-interceptor/httpresource/ajax-interceptor';
import {AuthService} from './services/auth.service';
import {TodoService} from './services/todo.service';

@NgModule({
  imports:      [ BrowserModule,routing,FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent,LoginComponent,TodosComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ FormBuilder, AjaxInterceptor,AuthService,TodoService]
})
export class AppModule { }
