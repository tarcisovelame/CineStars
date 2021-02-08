import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from 'src/app/filmes/filme';
import { Cast } from '../cast';
import { CastService } from '../cast.service';

@Component({
  selector: 'app-cast-single',
  templateUrl: './cast-single.component.html',
  styleUrls: ['./cast-single.component.scss']
})
export class CastSingleComponent implements OnInit {

  id = this.route.snapshot.paramMap.get("id")
  person: Cast
  filmes: Filme[]

  constructor(
    private route: ActivatedRoute,
    private service: CastService
  ) { }

  ngOnInit(): void {
    this.getPerson(this.id)
    this.getFilmes(this.id)
  }

  getPerson(id:any) {
    this.service.getCastById(id).subscribe(
      (res: any) => this.person = res,
      err => console.error(err)
    )
  }

  getFilmes(id:any) {
    this.service.getFilmesByCastId(id).subscribe(
      (res: any) => this.filmes = res.cast,
      err => console.error(err)
    )
  }

  dataConverter(value: any) {
    return value.split("-").reverse().join("/"); // EUA TO BR
  }

}
