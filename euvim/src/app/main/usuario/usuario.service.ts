import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  constructor() { }

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
    let maxIdentifier = 0;
    this.listUsers.forEach(item=>{
      maxIdentifier < item.identifier ? maxIdentifier = item.identifier : maxIdentifier = maxIdentifier;
    })
    item.identifier = maxIdentifier + 1;
    this.listUsers.push(item);
  }

  excluir(identifier){
    let index = this.listUsers.findIndex(item=> item.identifier == identifier);
    if(index > -1){
      this.listUsers.splice(index,1);
    }
  }

  editar(editItem){
    let index = this.listUsers.findIndex(item=> item.identifier == editItem.identifier);
    if(index > -1){
      this.listUsers[index] = editItem;
    }
  }

  getItem(identifier){
    return this.listUsers.find(item=> item.identifier == identifier);
  }

  listar(){
    return this.listUsers;
  }
}
