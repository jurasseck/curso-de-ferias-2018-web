
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 04**

Sumário
=======

* [Conceitos](#conceitos)
  * [Serviços](#serviços)
  * [Elementos](#elementos)
  * [DataSource](#datasource)
* [Hands-on](#hands-on)
  * [Adicionando Rota para Formulário de Usuário](#adicionando-rota-para-formulário-de-usuário)
  * [Criando Componente de Consulta de Usuário](#criando-componente-de-consulta-de-usuário)
  * [Criando Componente de Formulário de Usuário](#criando-componente-de-formulário-de-usuário)
  * [Configurando Rota de Consulta de Usuário](#configurando-rota-de-consulta-de-usuário)
  * [Tabela de Consulta de Usuários](#tabela-de-consulta-de-usuários)
  
Conceitos
=========

[Componentes Angular Material](https://material.angular.io/components)

Hands-on
=========

Adicionando Rota para Formulário de Usuário
-------------------------------------------

##### No arquivo src/app/main/main.routing.ts
``` typescript
{
  path: 'usuario/adicionar',
  component: FormularioComponent
}
```

``` typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'main', 
        component: MainComponent,
        children: [
          {
            path: 'usuario/consulta',
            component: ConsultaComponent
          },
          {
            path: 'usuario/adicionar',
            component: FormularioComponent
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }
```

##### No arquivo src/app/main/usuario/consulta/consulta.component.html
``` typescript
routerLink="/main/usuario/adicionar"
```

``` typescript
<div class="mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef  fxFlex="10"> Ações </mat-header-cell>
      <mat-cell *matCellDef="let element" fxFlex="10" class="buttons">
          <button mat-icon-button color="primary"  mdTooltip="Editar">
            <mat-icon class="mat-24" aria-label="Editar">edit</mat-icon>
          </button>
          <button mat-icon-button color="danger" mdTooltip="Remover">
              <mat-icon class="mat-24" aria-label="Remover">delete</mat-icon>
          </button>
      </mat-cell>
    </ng-container>
    <ng-container matColumnDef="nome">
      <mat-header-cell *matHeaderCellDef> Nome </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.nome}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="login">
        <mat-header-cell *matHeaderCellDef> Login </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.login}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="email">
      <mat-header-cell *matHeaderCellDef> E-mail </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.email}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="perfil">
      <mat-header-cell *matHeaderCellDef> Perfil </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.perfil}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
  <button mat-fab color="primary" routerLink="/main/usuario/adicionar">
    <mat-icon class="mat-24" aria-label="Adicionar">add</mat-icon>
  </button> 
</div>
```

##### No arquivo src/app/main/main.module.ts
``` typescript
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
```

``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatToolbarModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  declarations: [MainComponent, ConsultaComponent, FormularioComponent]
})
export class MainModule { }
```

##### No arquivo src/app/main/usuario/formulario/formulario.component.html
``` typescript
<form fxLayout="column">
  <mat-form-field fxFlex="100"> 
    <input matInput placeholder="Nome">
  </mat-form-field>
  <mat-form-field fxFlex="100"> 
    <input matInput placeholder="E-mail">
  </mat-form-field>
  <div fxFlex="100" fxLayout="row">
    <mat-form-field fxFlex="47"> 
      <input matInput placeholder="Login">
    </mat-form-field>
    <span fxFlex="5"></span>
    <mat-form-field fxFlex="47"> 
      <mat-select placeholder="Perfil">
          <mat-option>
            Aluno
          </mat-option>
          <mat-option>
            Professor
          </mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  <div fxFlex="100" fxLayout="row">
    <mat-form-field fxFlex="47"> 
      <input matInput placeholder="Senha" type="password">
    </mat-form-field>
    <span fxFlex="5"></span>
    <mat-form-field fxFlex="47"> 
      <input matInput placeholder="Confirmação" type="password">
    </mat-form-field>
  </div>
  <div fxFlex="100" fxLayout="row" fxLayoutAlign="space-between">
      <button mat-raised-button color="primary">Cadastrar</button>
      <button mat-raised-button color="warn" routerLink="/main/usuario/consulta">Cancelar</button>
  </div>
</form>
```
