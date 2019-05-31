import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data: any = [];         // contains all the data related to lessons and tests
  currentUser: any = [];  // current user's info



  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
    this.currentUser = this.dataService.currentUser;
  }
}
