import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'sd-todo',
  templateUrl: './app/todos/todos.component.html'
})
export class TodosComponent implements OnInit { 
todo : Object = {
  name:'',
  list:[],
  count:0
}
 constructor(public router:Router, public todoService:TodoService) {
   console.log('Constructor invoked');   
 }
 ngOnInit() {
 console.log('Init');
 this.getTodos();
 }
 /**
 * Method to get all the todo list 
 */
  getTodos() {
   this.todoService['listTodos']().then(
      (data:any) => {
      	if(data.records && data.records.length > 0) {
      		this.todo['list'] = data.records;
      		// To show the totoal todo counts
      		this.todo['count'] = data.records.length;
      	}
      },
      (error) => {
         console.log('error',error);
      }
    );

};
/**
 * Method to create the todo list 
 */
  addTodo() {
  	let body = {
  		name: this.todo['name']
  	}
   this.todoService['createTodo'](body).then(
      (data:any) => {
      	if(data.records) {
      		this.todo['list'] = data.records;
      	}
      },
      (error) => {
         console.log('error',error);
      }
    );
};
/**
 * Method to Delete the todo list 
 */
  deleteTodo(todo) {
   this.todoService['deleteTodo']({id:todo._id}).then(
      (data:any) => {
      	if(data.records) {
      		this.todo['list'] = data.records;
      	}
      },
      (error) => {
         console.log('error',error);
      }
    );

};
}