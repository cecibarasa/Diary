import { Component, OnInit, Input } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.css']
})
export class DiaryDetailComponent implements OnInit {

@Input() diary: Diary;
  constructor() { }

  ngOnInit(): void {
  }

}
