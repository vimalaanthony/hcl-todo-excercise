import { Component,OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'sd-login',
  templateUrl: './app/login/login.component.html'
})
export class LoginComponent implements OnInit { 
loginForm:FormGroup;
 constructor(public fb:FormBuilder, public router:Router, public authService:AuthService) {
   console.log('Constructor invoked');
 }
 ngOnInit() {
   this.loginForm = this.fb.group({
      'username' : '',
      'password': ''
    })
 }
/**
 * Method to SignIn 
 */
  signIn(data) {
   console.log('data',data);
   this.authService['login'](data).then(
      (data:any) => {
       this.router.navigateByUrl('/todos');
      },
      (error) => {
         console.log('error',error);
      }
    );
   //this.router.navigateByUrl('/todos');

};
}