import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }   from '../login/login.component';
import {TodosComponent} from '../todos/todos.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'todos', component: TodosComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);