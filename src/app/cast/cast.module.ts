import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CastRoutingModule } from './cast-routing.module';
import { CastSingleComponent } from './cast-single/cast-single.component';
import { CastListComponent } from './cast-list/cast-list.component';


@NgModule({
  declarations: [CastSingleComponent, CastListComponent],
  imports: [
    CommonModule,
    CastRoutingModule
  ]
})
export class CastModule { }
