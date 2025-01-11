import { Component, effect, inject, OnInit } from '@angular/core';
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
export class QuizComponent implements OnInit {
  quizzService = inject(QuizzService);

  ngOnInit(): void {
    this.quizzService.getQuestions().subscribe((questions) => {
      this.quizzService.questions.set(questions);
    });
  }

  // loadingEffect() {
  //   effect(() => {
  //     this.quizzService.getQuestions().subscribe((questions) => {
  //       this.quizzService.questions.set(questions);
  //     });
  //   });
  // }
}
