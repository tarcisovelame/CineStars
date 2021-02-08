import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';



@NgModule({
  declarations: [
    FontAwesomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeComponent
  ]
})
export class SharedModule { }
