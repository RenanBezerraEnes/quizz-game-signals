import { Component, computed, inject, input } from '@angular/core';
import { QuizzService } from '../../quiz/services/quizz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent {
  answerText = input.required<string>();
  answerIndex = input.required<number>();

  quizzService = inject(QuizzService);

  letterMapping = ['A', 'B', 'C', 'D'];
  isCorrectAnswer = computed(
    () =>
      !!this.quizzService.currentAnswer() &&
      this.answerText() === this.quizzService.currentQuestion().correctAnswer
  );

  isWrongAnswer = computed(
    () =>
      this.answerText() === this.quizzService.currentAnswer() &&
      this.answerText() !== this.quizzService.currentQuestion().correctAnswer
  );
}
