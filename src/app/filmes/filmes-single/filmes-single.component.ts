import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from '../../cast/cast';
import { Filme } from '../filme';
import { FilmesService } from '../filmes.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filmes-single',
  templateUrl: './filmes-single.component.html',
  styleUrls: ['./filmes-single.component.scss']
})
export class FilmesSingleComponent implements OnInit {

  filme: Filme
  cast: Cast[]
  equipe: Cast[]
  autenticado: any
  id = this.route.snapshot.paramMap.get("id")

  modalRef: BsModalRef;
  formulario: any
  nota: number
  votoConcluido: boolean = false

  constructor(
    private service: FilmesService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private fb: FormBuilder
    ) { }
    
    ngOnInit(): void {

      this.formulario = this.fb.group({
        nota: [0]
      })

      this.autenticacao()
      this.getFilme(this.id)
      this.getCast(this.id)
    }

    autenticacao() {
      this.service.authentication().subscribe(
        res => this.autenticado = res
      )
    }

    getFilme(id:any) {
      this.service.getFilmeById(id).subscribe(
        (res:any) => this.filme = res,
        err => console.error(err)
      )
    }

    getCast(id:any) {
      this.service.getCastByFilmeId(id).subscribe(
        (res:any) => {
          this.cast = res.cast
          this.equipe = this.cast.filter(element => element.known_for_department == 'Directing')
        },
        err => console.error(err)
      )
    }

    votoModal(template: TemplateRef<any>) {
      this.votoConcluido = false
      this.modalRef = this.modalService.show(template);
    }

    votar(filme: any, autenticado:any, nota: number) {
      this.votoConcluido = true
      this.service.votar(filme, autenticado, { value: nota }).subscribe(
        res => {},
        err => console.error(err),
        () => {
          setTimeout (() => {
            this.modalRef.hide()
          }, 3000)
        }
      )
    }

}
