import { Component, OnInit } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AnswerComponent],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
