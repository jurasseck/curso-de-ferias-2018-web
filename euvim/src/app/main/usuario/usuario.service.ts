import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

  constructor(private _httpClient:HttpClient ) { }

  private _urlUser = environment.URL+"usuarios";

  private listUsers = [
    {identifier: 1, nome: 'José da Silva', login: "jose", email: 'jose@ponto.com.br', perfil:"Aluno"},
    {identifier: 2, nome: 'Mariano das Neves', login: "mariano", email: 'marino@ponto.com.br', perfil:"Aluno"},
    {identifier: 3, nome: 'Magyver da Silva', login: "magyver", email: 'magyver@ponto.com.br', perfil:"Aluno"},
    {identifier: 4, nome: 'Irineu Nunes', login: "irineu", email: 'irineu@ponto.com.br', perfil:"Aluno"},
    {identifier: 5, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil:"Aluno"},
    {identifier: 6, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil:"Aluno"},
    {identifier: 7, nome: 'Carlos Silva', login: "carlos", email: 'carlos@ponto.com.br', perfil:"Aluno"}
  ];

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
