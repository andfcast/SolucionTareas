import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../classes/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  controlador:string = "Auth";
  
  constructor(private _httpClient: HttpClient) { }
  
  Autenticar(dto:Login):Observable<any>{
    return this._httpClient.post(environment.SERVICE_URL + this.controlador + '/Autenticar',dto);
  }
}
