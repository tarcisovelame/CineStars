import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cast } from './cast';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  private apiKey = '?api_key=a31638cc8f48983dc1b879b27bfc1484';

  constructor(
    protected http: HttpClient
  ) { }

  /**
   * `getCastPopulares` Retorna a lista com todos os atores mais populares
   */
  public getCastPopulares(page?:number) {
    let url = environment.API + '/person/popular' + this.apiKey
    if(page) { url += '&page=' + page }
    
    return this.http.get<Cast[]>(url)
  }

  /**
   * `getCastById` Retorna informações de um filme em específico
   */
  public getCastById(id:any) {
    return this.http.get<Cast[]>(environment.API + '/person/' + id + this.apiKey);
  }

  /**
   * `getFilmesByCastId` Retorna informações de um filme em específico
   */
  public getFilmesByCastId(id:any) {
    return this.http.get<Cast[]>(environment.API + '/person/' + id + '/movie_credits' + this.apiKey);
  }
}
