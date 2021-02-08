import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private apiKey = '?api_key=a31638cc8f48983dc1b879b27bfc1484';

  constructor(
    protected http: HttpClient
  ) { }

  public authentication() {
    return this.http.get(environment.API + '/authentication/guest_session/new' + this.apiKey)
  }

  /**
   * `getFilmesTopRated` Retorna a lista com todos os filmes na ordem de Top Rated
   */
  public getFilmesTopRated(page?:number) {
    let url = environment.API + '/movie/top_rated' + this.apiKey
    if(page) { url += '&page=' + page }
    
    return this.http.get<Filme[]>(url)
  }

  /**
   * `getFilmeById` Retorna informações de um filme em específico
   */
  public getFilmeById(id:any) {
    return this.http.get<Filme[]>(environment.API + '/movie/' + id + this.apiKey);

  }

  /**
   * `getCastByFilmeId` Retorna informações de um filme em específico
   */
   public getCastByFilmeId(id:any) {
    return this.http.get<Filme[]>(environment.API + '/movie/' + id + '/credits' + this.apiKey);
   } 

   /**
   * `votar` Vota com uma nota no filme
   */
   public votar(id:any, autenticado:any, nota: any) {
    let url = environment.API + '/movie/' + id + '/rating' + this.apiKey + '&guest_session_id=' + autenticado
    return this.http.post(url, nota)
   }


}
