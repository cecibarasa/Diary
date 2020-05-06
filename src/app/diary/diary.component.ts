import { Component, OnInit } from '@angular/core';
import { Diary } from "../diary";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries:Diary[] = [
    {id:1, name:'About Today', description:'Today marks the beginning of my life'},
    {id:2, name:'Dear Diary', description:'I am super sleepy although I have to study'},
    {id:3, name:'Diary', description:'Angular sucks!!'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
