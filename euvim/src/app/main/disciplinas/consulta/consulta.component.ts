import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { ProfessorDialogComponent } from "./professor-dialog/professor-dialog.component";
import { QrCodeDialogComponent } from "./qr-code-dialog/qr-code-dialog.component";

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

  constructor(private _disciplinaService:DisciplinaService, private _router: Router, public dialog: MatDialog) { }

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

  dialogProfessores(listProf){
     let dialogRef = this.dialog.open(ProfessorDialogComponent, {
      width: '250px',
      data: { professores: listProf }
    });
  }

  qrCode(item){
    let dialogRef = this.dialog.open(QrCodeDialogComponent, {
      width: '250px',
      data: { idCurso: item.id, descricao: item.descricao}
    });
  }


}