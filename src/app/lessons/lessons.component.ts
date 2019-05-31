import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
id;
// lessons = ['lesson1','lesson2','lesson3','lesson4','lesson5'];
// audios = ['audio1','audio2','audio3','audio4','audio5'];
// armTexts = ['armText1','armText2','armText3','armText4','armText5'];
// englishTexts = ['englishText1', 'englishText2','englishText3','englishText4','englishText5'];
data: any =[];
lessons: any = [[], [], [], [], [], [], []];
audios: any = [[], [], [], [], [], [], []];
armTexts: any = [[], [], [], [], [], [], []];
englishTexts: any = [[], [], [], [], [], [], []];





  constructor(private routes: ActivatedRoute, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.routes.queryParams.subscribe((params: Params) => {
    //   this.lessons[0] = params['lesson1'];
    //   this.lessons[1] = params['lesson2'];
    //   this.lessons[2] = params['lesson3'];
    //   this.lessons[3] = params['lesson4'];
    //   this.lessons[4] = params['lesson5'];
    //   this.audios[0] = params['audio1'];
    //   this.audios[1] = params['audio2'];
    //   this.audios[2] = params['audio3'];
    //   this.audios[3] = params['audio4'];
    //   this.audios[4] = params['audio5'];
    //   this.armTexts[0] = params['armText1'];
    //   this.armTexts[1] = params['armText2'];
    //   this.armTexts[2] = params['armText3'];
    //   this.armTexts[3] = params['armText4'];
    //   this.armTexts[4] = params['armText5'];
    //   this.englishTexts[0] = params['englishText1'];
    //   this.englishTexts[1] = params['englishText2'];
    //   this.englishTexts[2] = params['englishText3'];
    //   this.englishTexts[3] = params['englishText4'];
    //   this.englishTexts[4] = params['englishText5']
    // });
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.dataService.getData().subscribe((data) => {
      this.data = data;
      for (let i = 0; i < this.data.length; i++) {
        this.lessons[i].push(this.data[i].lesson1);
        this.lessons[i].push(this.data[i].lesson2);
        this.lessons[i].push(this.data[i].lesson3);
        this.lessons[i].push(this.data[i].lesson4);
        this.lessons[i].push(this.data[i].lesson5);
        this.audios[i].push(this.data[i].audio1);
        this.audios[i].push(this.data[i].audio2);
        this.audios[i].push(this.data[i].audio3);
        this.audios[i].push(this.data[i].audio4);
        this.audios[i].push(this.data[i].audio5);
        this.armTexts[i].push(this.data[i].armText1);
        this.armTexts[i].push(this.data[i].armText2);
        this.armTexts[i].push(this.data[i].armText3);
        this.armTexts[i].push(this.data[i].armText4);
        this.armTexts[i].push(this.data[i].armText5);
        this.englishTexts[i].push(this.data[i].englishText1);
        this.englishTexts[i].push(this.data[i].englishText2);
        this.englishTexts[i].push(this.data[i].englishText3);
        this.englishTexts[i].push(this.data[i].englishText4);
        this.englishTexts[i].push(this.data[i].englishText5);
      }
    });
  }
}
