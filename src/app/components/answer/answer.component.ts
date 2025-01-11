import { Component, inject, input } from '@angular/core';
import { QuizzService } from '../../quiz/services/quizz.service';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [],
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent {
  answerText = input.required<string>();
  answerIndex = input.required<number>();

  quizzService = inject(QuizzService);

  letterMapping = ['A', 'B', 'C', 'D'];
}
