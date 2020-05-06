import { Component } from '@angular/core';
import { Diary } from "./diary";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diaries:Diary[] = [
{id:1, name:'Dear Diary, Today marks the beginning of my life'},
{id:2, name:'Dear Diary, I am super sleepy although I have to study'},
{id:3, name:'Dear Diary, Angular sucks!!'},
  ];
  
}
