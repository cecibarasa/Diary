import { Component, OnInit } from '@angular/core';
import { Diary } from "../diary";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries: Diary[] = [
    new Diary(1, 'About Today', 'Today marks the beginning of my life'),
    new Diary(2, 'Dear Diary', 'I am super sleepy although I have to study'),
    new Diary(3, 'Diary', 'Angular sucks!!'),
  ];

  toggleDetails(index){
    this.diaries[index].showDescription = !this.diaries[index].showDescription;
  }

  completeDiary(isComplete, index){
    if (isComplete) {
      this.diaries.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
