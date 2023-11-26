import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  controlador:string = "Tarea";
  constructor(private _httpClient: HttpClient) { }

  Listar(id: number):Observable<any>{
    return this._httpClient.get(environment.SERVICE_URL + this.controlador + '/Listar/' + id.toString());
  }

  ObtenerInfo(id:number):Observable<any>{
    return this._httpClient.get(environment.SERVICE_URL + this.controlador +'/Obtener/' + id.toString());
  }

  Crear(dto:any):Observable<any>{
    return this._httpClient.post(environment.SERVICE_URL + this.controlador + '/Crear',dto);
  }

  Actualizar(dto:any):Observable<any>{
    return this._httpClient.put(environment.SERVICE_URL + this.controlador + '/Actualizar/' + dto.id.toString(),dto);
  }

  Borrar(id: number):Observable<any>{
    return this._httpClient.delete(environment.SERVICE_URL + this.controlador + '/Borrar/' + id.toString());
  }
}
