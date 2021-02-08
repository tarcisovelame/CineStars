import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fa',
  template: `<i [ngClass]="icon"></i>`
})
export class FontAwesomeComponent implements OnInit {

  @Input() icon: string;
  @Input() stl: string = 'fas'; // fas, far, fal, fab
  @Input() size: string; // 1x, 2x, 3x, 5x, 7x, 10x, xs, sm, lg
  @Input() rotate: string; // rotate-90, rotate-180, rotate-270, flip-horizontal, flip-vertical, flip-both
  @Input() animation: string; // spin, pulse


  ngOnInit(){
    this.icon = `${this.stl} fa-${this.icon}`;
    if(this.size) this.icon += ` fa-${this.size}`
    if(this.rotate) this.icon += ` fa-${this.rotate}`
    if(this.animation) this.icon += ` fa-${this.animation}`
  }
}
