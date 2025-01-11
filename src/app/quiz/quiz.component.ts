import { Component, inject, OnInit } from '@angular/core';
import { QuestionComponent } from '../components/question/question.component';
import { QuizzService } from './services/quizz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quizzService = inject(QuizzService);

  ngOnInit() {}
}
