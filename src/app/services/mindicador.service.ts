import { LastValues } from './../interfaces/mindicador';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MindicadorService {

  private URL: string = environment.MIN_URL_BASE;

  constructor( private http: HttpClient ) { }

  public getValues(){
    return this.http.get( this.URL )
  }

  public getLast30Values( indice: string ) {
    return this.http.get<LastValues>( `${this.URL}/${indice}` )
  }

  

}