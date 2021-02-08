import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesListComponent } from './filmes-list/filmes-list.component';
import { FilmesSingleComponent } from './filmes-single/filmes-single.component';

const routes: Routes = [
  { path: 'filmes', component: FilmesListComponent },
  { path: 'filmes/:id', component: FilmesSingleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
