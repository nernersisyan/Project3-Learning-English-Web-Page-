import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../shared/data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tests: any = [];                                                              //all the tests are here
  id;                                                                           //
  form1: FormGroup;                                                             //radioButtons
  answers: any = [[], [], [], [], [], [], []];                                  //all the answers of the person
  passed = [false, false, false, false, false, false, false];                   //if passed the exam or not
  rightAnsCounter: any = [0, 0, 0, 0, 0, 0, 0];                                 //right answers counte
  inputDisable = [false, false, false, false, false, false, false];             //disables the test input after clicking finish button
  currentUser: any = [];                                                        //logged in User
  hideTests = false;                                                            //hides the whole test after clicking finish button
  hideButton = false;                                                           //hides the finish button after clicking finish button
  showPassedText = true;                                                        //Appears when user passes the test
  showFailedText = true;                                                        //Appears when user failes the test


  constructor(private dataServcie: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
    }) ;
    this.dataServcie.getTestSources().subscribe((data) => {
      this.tests = data;
    });

    this.form1 = new FormGroup({
      radio0: new FormControl(),
      radio1: new FormControl(),
      radio2: new FormControl(),
      radio3: new FormControl(),
      radio4: new FormControl(),
      radio5: new FormControl(),
      radio6: new FormControl(),
      radio7: new FormControl(),
      radio8: new FormControl(),
      radio9: new FormControl()
    });
  }

  finish() {
    for (let i = 0; i < this.tests[0].length; i++) {
       this.answers[this.id-1].push(this.form1.get('radio' + i).value);
    }
    for (let k = 0; k < 7; k++ ) {
      for (let i = 0; i < 9; i++) {
        if (this.answers[k][i] === this.tests[k][i].rightAnswer)
          this.rightAnsCounter[k]++;
        }
      this.inputDisable[this.id - 1] = true;
      }
    if (this.rightAnsCounter[this.id-1] >= 8 ) {
      this.passed[this.id-1] = true;
      this.showPassedText = false;
    }
    else
      this.showFailedText = false;

    this.currentUser = this.dataServcie.currentUser;

    this.changeCurrentUser(this.currentUser);
    this.hideTests = true;
    this.hideButton = true;
  }
  changeCurrentUser(currentUser) {
    for (let i = 0; i < 7; i++) {
      if (this.passed[i] == true) {
        currentUser[0].tests[i + 1] = this.passed[i];
      }
    }
    this.dataServcie.changeUser(currentUser[0]).subscribe();
  }
}


