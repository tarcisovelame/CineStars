import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.scss']
})
export class FilmesListComponent implements OnInit {

  filmes: Filme[]
  pagina: number = 1

  constructor(
    private service: FilmesService
  ) { }

  ngOnInit(): void {
    this.getFilmes()
  }

  getFilmes(page?:number) {
    this.service.getFilmesTopRated(page).subscribe(
      (res:any) => this.filmes = res.results,
      err => console.error(err) 
    )
  }

  page(pg:number) {
    this.pagina = pg
    this.getFilmes(this.pagina)
  }


}
