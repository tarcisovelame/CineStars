import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesListComponent } from './filmes-list/filmes-list.component';
import { FilmesSingleComponent } from './filmes-single/filmes-single.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilmesListComponent, 
    FilmesSingleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FilmesRoutingModule
  ]
})
export class FilmesModule { }
