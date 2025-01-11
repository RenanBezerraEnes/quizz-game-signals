import { Component, inject } from '@angular/core';
import { QuestionComponent } from '../components/question/question.component';
import { QuizzService } from './services/quizz.service';
import { ResultsComponent } from '../components/results/results.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent, ResultsComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  quizzService = inject(QuizzService);
}
