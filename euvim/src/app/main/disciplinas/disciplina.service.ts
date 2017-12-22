import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DisciplinaService {

  constructor(private _httpClient:HttpClient ) { }

  private _urlDisciplina = environment.URL+"disciplinas";

  adicionar(item){
    return this._httpClient.post(this._urlDisciplina, item, {responseType: 'text'});
  }

  excluir(identifier){
    return this._httpClient.delete(this._urlDisciplina+"/"+identifier, {responseType: 'text'})
  }

  editar(editItem){
    return this._httpClient.put(this._urlDisciplina+"/"+editItem.id, editItem, {responseType: 'text'});
  }

  getItem(identifier){
    return this._httpClient.get(this._urlDisciplina+"/"+identifier);
  }

  listar(){
    return this._httpClient.get<Array<Object>>(this._urlDisciplina);
  }
}
