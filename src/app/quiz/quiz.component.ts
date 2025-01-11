import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../components/question/question.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
