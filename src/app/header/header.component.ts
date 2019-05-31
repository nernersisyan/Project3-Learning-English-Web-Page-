import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {DataService} from '../shared/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tests: any = [true, false, false, false, false, false, false, false];     //array with tests results
  users0;                                                       //array with all the users entering via LocalStorage
  users1;                                                       //array with all the users during Logging in
  users2;                                                       //array with all the users during Registration
  enteredUser;                                                  //user from LocalStorage
  flag1 = false;                                                //flag for disabling the inputs
  flag2 = true;                                                 //flag for logout button
  flag3 = false;                                                //flag for login button
  flag4 = false;                                                //flag for register button
  flag5 = false;                                                //flag for disabling register and login buttons
  inputForm: FormGroup;                                         //input Formgroup
  text1 = false;                                                //Welcome text
  text2 = true;                                                 //Empty inputs during registration
  text3 = true;                                                 //Choose another email text
  text4 = true;                                                 //Succesfully registered
  text5 = true;                                                 //empty inputs during Logging in
  text6 = true;                                                 //Wrong email or password during Logging in



  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      email: new FormControl('',  Validators.required),
      password: new FormControl('', Validators.required)
    });
    // localStorage.getItem('key');
    // this.enteredUser = localStorage.getItem('key');
    // this.dataService.getUserInfo().subscribe((data)=>{
    //   this.users0 = data;
    //   for (let i = 0; i < this.users0.length; i++) {
    //     if(this.enteredUser == this.users0[i].email) {
    //       this.dataService.currentUser.push(this.users0[i]);
    //       this.authService.login();
    //       this.router.navigate(['/']);
    //       this.text1 = true;
    //       this.text2 = true;
    //       this.text3 = true;
    //       this.text4 = true;
    //       this.text5 = true;
    //       this.text6 = true;
    //       this.flag1 = true;
    //       this.flag2 = false;
    //       this.flag3 = true;
    //       this.flag4 = true;
    //     }
    //     else
    //       this.dataService.currentUser.push(this.users0[i]);
    //   }
    // });
  }

  login() {
    if (this.inputForm.invalid) {
      this.text2 = true;
      this.text3 = true;
      this.text4 = true;
      this.text5 = false;
      this.text6 = true;
      return;
    }
    else
      this.checkUser();
  }

  checkUser() {
    this.dataService.getUserInfo().subscribe((data) => {
      this.users1 = data;
      for (let i = 0; i < this.users1.length; i++) {
        if (this.users1[i].email == this.inputForm.get('email').value && this.users1[i].password == this.inputForm.get('password').value) {
          this.dataService.currentUser.push(this.users1[i]);
          localStorage.setItem('key', this.users1[i].email );
          this.authService.login();
          this.router.navigate(['/']);
          this.text1 = true;
          this.text2 = true;
          this.text3 = true;
          this.text4 = true;
          this.text5 = true;
          this.text6 = true;
          this.flag1 = true;
          this.flag2 = false;
          this.flag3 = true;
          this.flag4 = true;
          return;
        }
        else
          this.text1 = false;
          this.text2 = true;
          this.text3 = true;
          this.text4 = true;
          this.text5 = true;
          this.text6 = false;

      }
    });
  }

  logout() {
    localStorage.removeItem('key');
    window.location.reload();
  }

  register() {
    this.dataService.getUserInfo().subscribe((data) => {
      this.users2 = data;
      if (this.inputForm.invalid) {
        this.text2 = false;
        this.text3 = true;
        this.text4 = true;
        this.text5 = true;
        this.text6 = true;
        return;
      }
      else if (this.users2.length == 0) {
        this.addNewUser();
      }
      else if (this.users2.length !== 0) {
        for (let i = 0; i < this.users2.length; i++) {
          if (this.users2[i].email == this.inputForm.get('email').value) {
            this.text3 = false;
            this.text2 = true;
            this.text4 = true;
            this.text5 = true;
            this.text6 = true;
          }
          else
            this.addNewUser();
        }
      }
      // this.addNewUser()
    });
  }

  addNewUser() {
    this.dataService.addUser(this.inputForm.get('email').value, this.inputForm.get('password').value, this.tests).subscribe();
    this.text2 = true;
    this.text3 = true;
    this.text4 = false;
    this.text5 = true;
    this.text6 = true;
  }
}
