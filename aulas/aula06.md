
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 06**

Sumário
=======

* [Conceitos](#conceitos)
  * [Serviços](#serviços)
  * [Arrays](#arrays)
  * [Navegação com Rotas](#navegação-com-rotas)
  * [Observable](#observable)
* [Hands-on](#hands-on)
  * [Refatorando Módulos e Rotas](#refatorando-módulos-e-rotas)
  * [Adicionando Rota de Edição de Usuário](#adicionando-rota-de-edição-de-usuário)
  * [Utilizando Serviço na Consulta de Usuário](#utilizando-serviço-na-consulta-de-usuário)
  * [Utilizando Serviço no Formulário de Usuário](#utilizando-serviço-no-formulário-de-usuário)
  * [Consumindo APIs REST](#consumindo-apis-rest)
  
Conceitos
=========

[Componentes Angular Material](https://material.angular.io/components)

Serviços
--------

  
Hands-on
========

Refatorando Módulos e Rotas
---------------------------

##### No arquivo src/app/main/main.routing.ts
``` typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'main', 
        component: MainComponent,
        children: [
          {
            path: 'usuario',
            loadChildren: './usuario/usuario.module#UsuarioModule'
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }
```

##### No arquivo src/app/main/main.module.ts
``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
```

##### No arquivo src/app/main/usuario/usuario.routing.ts
``` typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        {
          path: 'consulta',
          component: ConsultaComponent
        },
        {
          path: 'adicionar',
          component: FormularioComponent
        },
        {
          path: 'editar/:id',
          component: FormularioComponent
        }
    ])
  ]
})
export class UsuarioRouting { }
```

##### No arquivo src/app/main/usuario/usuario.module.ts
``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';

import { UsuarioRouting } from './usuario.routing';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, MatTooltipModule, MatOptionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRouting,
    RouterModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule, 
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormBuilder,
    UsuarioService,
    HttpClient
  ],
  declarations: [ConsultaComponent, FormularioComponent]
})
export class UsuarioModule { }
```

Adicionando Disciplina
----------------------

Refatorar ;)

Adicionando Rota de Disciplina
------------------------------

##### No arquivo src/app/main/main.routing.ts
``` typescript
{
  path: 'disciplina',
  loadChildren: './disciplina/disciplina.module#DisciplinaModule'
}
```

``` typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'main', 
        component: MainComponent,
        children: [
          {
            path: 'usuario',
            loadChildren: './usuario/usuario.module#UsuarioModule'
          },
          {
            path: 'disciplina',
            loadChildren: './disciplina/disciplina.module#DisciplinaModule'
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }
```

##### No arquivo src/app/main/main.component.html
``` typescript
<mat-list-item routerLink="/main/disciplina/consulta" (click)="sidenav.close()">
```

``` typescript
<mat-sidenav-container>
    <mat-sidenav #sidenav>
    <a mat-button style="height: 0; position: absolute;"></a>  
        <mat-nav-list>
        <mat-list-item routerLink="/main/usuario/consulta" (click)="sidenav.close()">
            <button mat-icon-button >
                <mat-icon>info</mat-icon>
            </button>
            <a mdLine>Usuários</a>
        </mat-list-item>
        <mat-list-item routerLink="/main/disciplina/consulta" (click)="sidenav.close()">
            <button mat-icon-button >
                <mat-icon>info</mat-icon>
            </button>
            <a mdLine>Disciplinas</a>
        </mat-list-item>
        <mat-list-item href="#/main">
            <button mat-icon-button >
                <mat-icon>info</mat-icon>
            </button>
            <a mdLine>Relatório</a>
        </mat-list-item>
        </mat-nav-list>
    </mat-sidenav>
    <mat-toolbar color="primary">
        <button mat-icon-button (click)="sidenav.open()">
            <mat-icon>menu</mat-icon>
        </button>
        <span>Eu vim</span>
    </mat-toolbar>
    <mat-card id="content">
        <router-outlet></router-outlet>
    </mat-card>
</mat-sidenav-container>
```

Adicionando Consulta de Disciplina
----------------------------------

##### No arquivo src/app/main/disciplina/consulta/consulta.component.ts
``` typescript
public displayedColumns = ['segmento', 'descricao', 'dataInicio', 'dataTermino', 'instrutores', 'id'];
```

``` typescript
import { Component, OnInit } from '@angular/core';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DisciplinaService } from '../disciplina.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  public displayedColumns = ['segmento', 'descricao', 'dataInicio', 'dataTermino', 'instrutores', 'id'];
  public dataSource: MatTableDataSource<any>;

  public noResults$ = false;
  constructor(private _disciplinaService: DisciplinaService, private _router: Router) { }
  
  ngOnInit() {
    this.atualizarListaDeDisciplinas();
  }
 
  excluir(id){
    this._disciplinaService.excluir(id).subscribe(suc=>{
      this.atualizarListaDeDisciplinas();
  });
  }

  editar(id){
    this._router.navigate(["/main/disciplina/editar", id]);
  }

  private atualizarListaDeDisciplinas(){
    this._disciplinaService.listar().subscribe(suc => {
      this.noResults$ = suc.length == 0;
      this.dataSource = new MatTableDataSource(suc);
    });
  }

}
```

##### No arquivo src/app/main/disciplina/consulta/consulta.component.html

``` typescript
<div class="mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <ng-container matColumnDef="segmento">
      <mat-header-cell *matHeaderCellDef> Segmento </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.segmento | titlecase}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="descricao">
        <mat-header-cell *matHeaderCellDef> Descrição </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.descricao}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="dataInicio">
      <mat-header-cell *matHeaderCellDef> Início </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.dataInicio | date:'dd/MM/yyyy'}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="dataTermino">
      <mat-header-cell *matHeaderCellDef> Término </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.dataTermino  | date:'dd/MM/yyyy'}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="instrutores">
      <mat-header-cell *matHeaderCellDef> Instrutores </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.instrutores.length}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="id">
      <mat-header-cell *matHeaderCellDef  fxFlex="10"> Ações </mat-header-cell>
      <mat-cell *matCellDef="let element" fxFlex="10" class="buttons">
         <button mat-icon-button color="primary"  matTooltip="Editar">
            <mat-icon class="md-24"  (click)="editar(element.id)" aria-label="Editar">edit</mat-icon>
          </button>
          <button mat-icon-button color="danger" matTooltip="Remover">
              <mat-icon class="md-24" (click)="remover(element.id)" aria-label="Remover">delete</mat-icon>
          </button>
      </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
  <div *ngIf="noResults$" class="noResult">Nenhum resultado</div>
  <button mat-fab color="primary">
    <mat-icon class="mat-24" routerLink="/main/disciplina/adicionar" aria-label="Adicionar">add</mat-icon>
  </button> 
</div>
```

Adicionando Consulta de Disciplina
----------------------------------

##### No arquivo src/app/main/disciplina/disciplina.module.ts
``` typescript
import { MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MAT_DATE_LOCALE } from '@angular/material';
```

``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';

import { DisciplinaRouting } from './disciplina.routing';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, MatTooltipModule, MatOptionModule, MatNativeDateModule, MatDatepickerModule, MAT_DATE_LOCALE } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DisciplinaService } from './disciplina.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    DisciplinaRouting,
    RouterModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule, 
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormBuilder,
    DisciplinaService,
    HttpClient,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}
  ],
  declarations: [ConsultaComponent, FormularioComponent]
})
export class DisciplinaModule { }
```

##### No diretório src/app/main/disciplina
``` typescript
ng g service professor
```

##### No arquivo src/app/main/disciplina/disciplina.module.ts
``` typescript
import { ProfessorService } from './professor.service';
```

``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';

import { DisciplinaRouting } from './disciplina.routing';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, MatTooltipModule, MatOptionModule, MatNativeDateModule, MatDatepickerModule, MAT_DATE_LOCALE } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DisciplinaService } from './disciplina.service';
import { ProfessorService } from './professor.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    DisciplinaRouting,
    RouterModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule, 
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormBuilder,
    DisciplinaService,
    ProfessorService,
    HttpClient,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}    
  ],
  declarations: [ConsultaComponent, FormularioComponent]
})
export class DisciplinaModule { }
```

##### No arquivo src/app/main/disciplina/professor.service.ts
``` typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProfessorService {

  constructor(private _httpClient: HttpClient ) { }
  
  private _urlProfessores = environment.url+"/api/v1/usuarios";

  listar(){
    let httpParams = new HttpParams().set("tipo","PROFESSOR")
    return this._httpClient.get<Array<Object>>(this._urlProfessores, {params:httpParams});
  }

}
```

Adicionando Formulário de Disciplina
------------------------------------

##### No arquivo src/app/main/disciplina/formulario/formulario.component.ts
``` typescript
img.urlLogo{
    height: 50px;
}
```



