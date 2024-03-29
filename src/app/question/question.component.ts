import { QuestionService } from './../question.service';
import { Question } from './../question';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  currentQuestion: number = 0;
  questions: Question[] = [];
  answerChosen: boolean = false;
  chosenAnswer?: string;
  leaderboardDetails = {
    name: '',
    score: 0
  };

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService
      .getQuestions()
      .subscribe((questions) => (this.questions = questions));

    this.questions.forEach((question) => {
      if (!question.answers.includes(question.correct_answer)) {
        question.answers.push(question.correct_answer);
      }
      question.answers = this.shuffle(question.answers);
    });
  }

  shuffle(array: string[]): string[] {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  changeQuestion(): void {
    this.currentQuestion++;
    this.answerChosen = false;
    this.chosenAnswer = undefined;
  }

  resetQuestion(): void {
    this.currentQuestion = 0;
  }

  validate(chosenAnswer: string): void{
    this.answerChosen = true;
    this.chosenAnswer = chosenAnswer;
  }
}
