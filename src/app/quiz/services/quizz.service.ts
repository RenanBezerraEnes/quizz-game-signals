import { computed, inject, Injectable, signal } from '@angular/core';
import { QuestionInterface } from '../types/question.interface';
import { sign } from 'crypto';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackendQuestionInterface } from '../types/backendQuestion.interface';

@Injectable({ providedIn: 'root' })
export class QuizzService {
  http = inject(HttpClient);
  questions = signal<QuestionInterface[]>([]);
  currentQuestionIndex = signal<number>(0);

  currentAnswer = signal<string | null>(null);

  correctAnswersCount = signal<number>(0);

  currentQuestion = computed(
    () => this.questions()[this.currentQuestionIndex()]
  );

  showResults = computed(
    () => this.currentQuestionIndex() === this.questions().length - 1
  );

  isAtFirstQuestion = computed(() => this.currentQuestionIndex() === 0);

  currentQuestionAnswers = computed(() =>
    this.sortAnswers(this.currentQuestion())
  );

  sortAnswers(question: QuestionInterface): string[] {
    const unshuffledAnswers = [
      question.correctAnswer,
      ...question.incorrectAnswers,
    ];

    return unshuffledAnswers
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }

  goToNextQuestion() {
    const currentQuestionIndex = this.showResults()
      ? this.currentQuestionIndex()
      : this.currentQuestionIndex() + 1;
    this.currentQuestionIndex.set(currentQuestionIndex);

    this.currentAnswer.set(null);
  }

  selectAnswer(answer: string): void {
    this.currentAnswer.set(answer);
    const correctAnswersCount =
      answer === this.currentQuestion().correctAnswer
        ? this.correctAnswersCount() + 1
        : this.correctAnswersCount();

    this.correctAnswersCount.set(correctAnswersCount);
  }

  restart(): void {
    this.currentQuestionIndex.set(0);
  }

  getQuestions(): Observable<QuestionInterface[]> {
    const apiUrl =
      'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

    return this.http
      .get<{ results: BackendQuestionInterface[] }>(apiUrl)
      .pipe(map((response) => this.parseQuestions(response.results)));
  }

  parseQuestions(
    backendQuestions: BackendQuestionInterface[]
  ): QuestionInterface[] {
    return backendQuestions.map((backendQuestion) => {
      const incorrectAnswers = backendQuestion.incorrect_answers.map(
        (incorrectAnswers) => decodeURIComponent(incorrectAnswers)
      );
      return {
        question: decodeURIComponent(backendQuestion.question),
        correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
        incorrectAnswers,
      };
    });
  }
}
