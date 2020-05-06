import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diaries:string[];

  constructor(){
    this.diaries = ['Dear Diary, Today marks the beginning of my life', 'Dear Diary, I am super sleepy although I have to study', 'Dear Diary, Angular sucks!!']
  }
  
}
