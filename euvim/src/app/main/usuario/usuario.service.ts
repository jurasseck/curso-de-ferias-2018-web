import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

  constructor(private _httpClient:HttpClient ) { }

  private _urlUser = environment.URL+"usuarios";

  adicionar(item){
    return this._httpClient.post(this._urlUser, item, {responseType: 'text'});
  }

  excluir(identifier){
    return this._httpClient.delete(this._urlUser+"/"+identifier, {responseType: 'text'})
  }

  editar(editItem){
    return this._httpClient.put(this._urlUser+"/"+editItem.id, editItem, {responseType: 'text'});
  }

  getItem(identifier){
    return this._httpClient.get(this._urlUser+"/"+identifier);
  }

  listar(){
    return this._httpClient.get<Array<Object>>(this._urlUser);
  }
}
