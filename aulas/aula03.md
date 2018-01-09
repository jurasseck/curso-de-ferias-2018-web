
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 03**

Sumário
=======

* [Conceitos](#conceitos)
  * [Variáveis](#variaveis)
  * [Elementos](#elementos)
  * [DataSource](#datasource)
  * [Layout](#layout)
* [Hands-on](#hands-on)
  * [Criando Módulo de Usuário](#criando-módulo-de-usuário)
  * [Criando Componente de Consulta de Usuário](#criando-componente-de-consulta-de-usuário)
  * [Criando Componente de Formulário de Usuário](#criando-componente-de-formulário-de-usuário)
  * [Adicionando Layout](#adicionando-layout)
  
Conceitos
=========

[Componentes Angular Material](https://material.angular.io/components)

Variáveis
-------
``` typescript
public displayedColumns = ['position', 'name', 'weight', 'symbol'];
public dataSource = new UsuarioDataSource();
```

Elementos
-------
``` typescript
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
```

DataSource
``` typescript
export class UsuarioDataSource extends DataSource<any> {
  
  connect(): Observable<Element[]> {
    return Observable.of([
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ]);
  }

  disconnect() {}
}
```
Hands-on
========

Criando Módulo de Usuário
-------------------------

##### No diretório src/app/main
```ng g module usuario```

Criando Componente de Consulta de Usuário
-----------------------------------------

##### No diretório src/app/main/usuario
```ng g component consulta```

Criando Componente de Formulário de Usuário
-------------------------------------------
##### No diretório src/app/main/usuario
```ng g component formulario```

##### No arquivo src/app/main/main.module.ts
``` typescript
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';
```

``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';

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
  declarations: [MainComponent, ConsultaComponent, FormularioComponent]
})
export class MainModule { }
```

##### No arquivo src/app/main/main.routing.ts
``` typescript
children: [
          {
            path: 'usuario/consulta',
            component: ConsultaComponent
          }
        ]
 ```

``` typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ConsultaComponent } from './usuario/consulta/consulta.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'main', 
        component: MainComponent,
        children: [
          {
            path: 'usuario/consulta',
            component: ConsultaComponent
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }
```
##### No arquivo src/app/main/main.component.html
```routerLink="/main/usuario/consulta" (click)="sidenav.close()"```

``` html
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
        <mat-list-item href="#/main">
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
##### No arquivo src/app/main/main.module.ts
```import { MatTableModule } from '@angular/material';```

``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatToolbarModule, MatButtonModule, MatTableModule } from '@angular/material';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';

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
    MatButtonModule,
    MatTableModule
  ],
  declarations: [MainComponent, ConsultaComponent, FormularioComponent]
})
export class MainModule { }
```

##### No arquivo src/app/main/usuario/consulta/consulta.component.html
``` html
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
</div>
```

##### No arquivo src/app/main/usuario/consulta/consulta.component.ts
``` typescript
import { Component, OnInit } from '@angular/core';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  public displayedColumns = ['position', 'name', 'weight', 'symbol'];
  public dataSource = new UsuarioDataSource();

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class UsuarioDataSource extends DataSource<any> {
  
  connect(): Observable<Element[]> {
    return Observable.of([
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ]);
  }

  disconnect() {}
}
```
