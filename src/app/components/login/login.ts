import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { loginDataInterface } from '../../interfaces/login-data-interface';
import { RouterLink } from '@angular/router';
//Import Angular signal form tools. 
//They include form, SchemaPathTree, PathKind, validation rule functions, and FormField attribute directive for the <input> tag.
import { form, maxLength, minLength, PathKind, required } from '@angular/forms/signals';
import { email } from '@angular/forms/signals';
import { SchemaPathTree } from '@angular/forms/signals';
import { FormField } from '@angular/forms/signals';
//Import LoginService
import { LoginService } from '../../services/login-service';
import { map } from 'rxjs';

@Component({
  imports: [UpperCasePipe, NgClass, NgStyle, RouterLink, FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})

export class Login {
  //Login page static displays
  formTitle:string = "yra account";
  welcomeBackMessage:string = "Welcome back";
  signinMessage:string = "Sign in to access your member dashboard.";
  emailLabel:string = "Email address";
  emailInputPlaceholder:string = "you@example.com";
  passwordLabel:string = "Password";
  passwordInputPlaceholder:string = "********";
  checkboxLabel:string = "Remember me";
  signinButtonText:string = "Sign in";
  signupText:string = "Create an account";

  //Inject (add) LoginService into this component.
  //NOTE: We can alternatively use class constructor to inject a service into a component.
  loginService = inject(LoginService);

  //Create signal variable for the login data and initialize it. 
  signalLoginData = signal<loginDataInterface>({
    email: '',
    password: '',
  });

  //Define validation rules method for input fields using the imported validation functions.
  validations(schemaPathTree: SchemaPathTree<loginDataInterface, PathKind.Root>) {
    required(schemaPathTree.email, {message: "Email is required"});
    email(schemaPathTree.email, {message: "Invalid email, please enter a valid email address"});
    required(schemaPathTree.password, {message: "Password is required"});
    minLength(schemaPathTree.password, 8, {message: "Password must be at least 8 characters"});
    maxLength(schemaPathTree.password, 10, {message: "Password must be at most 10 characters"});
  };

  //Create Angular signal form by calling the imported form() function and passing signal data and validation-container method 
  //as the 1st and 2nd argument respectively. e.g   form(signalData, validationContainerMethod);
  //Angular signal form provides several methods through which we can validate signal fields (properties).
  signalLoginForm = form(this.signalLoginData, this.validations);

  //Login the user upon form submission.
  onFormSubmission(event:any) {
    //Some default behaviours for submit event include: 
    //display (exposure) of form input values on the URL, etc.
    event.preventDefault();
    this.loginService.logUserIn(this.signalLoginForm.email().value(), this.signalLoginForm.password().value());
  };
};
