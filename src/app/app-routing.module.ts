import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuestionComponent },
  { path: 'stats', component: StatsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
