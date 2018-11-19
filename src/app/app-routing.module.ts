import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathGamesComponent } from './math-games/math-games.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Tomiwa Angular App'}},
  {path: 'math', component: MathGamesComponent, data: {title: 'Math Games'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
