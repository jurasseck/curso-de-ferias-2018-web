import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {

  tableColumns = ['nome', 'login', 'email', 'perfil', 'id'];
  userDataSource = new MatTableDataSource<Usuario>(USER_DATA);

  constructor() { }

  ngOnInit() {
  }

  public showDetails(element): void {
    alert(JSON.stringify(element, null, 4));
  }

}

export interface Usuario {
  id: number;
  nome: string;
  login: string;
  email: string;
  perfil: string;
}

const USER_DATA: Usuario[] = [
  { id: 1, nome: 'Vinícius Rufine', login: 'vrufine', email: 'vsrufine@gmail.com', perfil: 'ADMIN' },
  { id: 2, nome: 'Heitor Dobeis', login: 'hdobeis', email: 'heitordobeis@gmail.com', perfil: 'ADMIN' },
  { id: 3, nome: 'Danilo Dias', login: 'ddias', email: 'ddias@gmail.com', perfil: 'ADMIN' }
];
