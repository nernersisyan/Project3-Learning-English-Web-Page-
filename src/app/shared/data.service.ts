import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  currentUser = [];

  getData() {
    return this.http.get('http://localhost:3000/data');
  }

  getTestSources() {
    return this.http.get('http://localhost:3000/testSource');
  }

  getUserInfo() {
    return this.http.get('http://localhost:3000/userlInfo');
  }


  addUser(email,password, tests) {
    let newUser = {
        'email' : email,
        'password' : password,
        'tests' : tests
    };
    return this.http.post('http://localhost:3000/userlInfo', newUser);
  }

  changeUser(currentUser) {
    return this.http.put('http://localhost:3000/userlInfo/' + currentUser.id, currentUser);
  }
}
