import { Component, inject, OnInit } from '@angular/core';
import { QuizzService } from '../../quiz/services/quizz.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  quizzService = inject(QuizzService);
}
