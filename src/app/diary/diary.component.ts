import { Component, OnInit } from '@angular/core';
import { Diary } from "../diary";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  
  diaries: Diary[] = [
    new Diary(1, 'About Today', 'Today marks the beginning of my life', new Date(2020,5,4)),
    new Diary(2, 'Dear Diary', 'I am super sleepy although I have to study', new Date(2020,5,5)),
    new Diary(3, 'Diary', 'Angular sucks!!', new Date(2020,5,6)),
  ];

  toggleDetails(index){
    this.diaries[index].showDescription = !this.diaries[index].showDescription;
  }

  deleteDiary(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure about this?`)

      if (toDelete) {
        this.diaries.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
