import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CastListComponent } from './cast-list/cast-list.component';
import { CastSingleComponent } from './cast-single/cast-single.component';

const routes: Routes = [
  { path: 'cast', component: CastListComponent },
  { path: 'cast/:id', component: CastSingleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CastRoutingModule { }
