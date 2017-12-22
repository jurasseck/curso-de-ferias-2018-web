import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MatTableDataSource } from '@angular/material';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultaComponent implements OnInit {

  public displayedColumns = ['segmento', 'descricao', 'dataInicio', 'dataTermino','instrutores', 'id'];
  
  public dataSource;
  public noResults$ = false;

  constructor(private _disciplinaService:DisciplinaService, private _router: Router) { }

  ngOnInit() {
    this.getListDisciplinas();
  }

  remover(identifer){
    this._disciplinaService.excluir(identifer).subscribe(suc=>{
      this.getListDisciplinas();
    });
    
  }

  private getListDisciplinas(){
    this._disciplinaService.listar().subscribe(suc => {
        this.noResults$ = suc.length == 0;
        this.dataSource = new MatTableDataSource(suc);
      }
    );
  }

  editar(identifier){
    this._router.navigate(["/main/disciplina/editar", identifier]);
  }


}