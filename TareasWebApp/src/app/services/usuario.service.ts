import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  controlador:string = "Usuario";
  constructor(private _httpClient: HttpClient) { }

  Crear(dto:Usuario):Observable<any>{
    return this._httpClient.post(environment.SERVICE_URL + this.controlador + '/Crear',dto);
  }

}
