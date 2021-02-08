import { Component, OnInit } from '@angular/core';
import { Cast } from '../cast';
import { CastService } from '../cast.service';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.scss']
})
export class CastListComponent implements OnInit {

  cast: Cast[]
  pagina: number = 1

  constructor(
    private service: CastService
  ) { }

  ngOnInit(): void {
    this.getCast()
  }

  getCast(page?:number) {
    this.service.getCastPopulares(page).subscribe(
      (res:any) => this.cast = res.results,
      err => console.error(err) 
    )
  }

  page(pg:number) {
    this.pagina = pg
    this.getCast(this.pagina)
  }

}
