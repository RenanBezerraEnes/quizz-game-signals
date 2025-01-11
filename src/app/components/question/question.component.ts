import { Component, inject, OnInit } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';
import { QuizzService } from '../../quiz/services/quizz.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AnswerComponent],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  quizzService = inject(QuizzService);
  ngOnInit() {}
}
