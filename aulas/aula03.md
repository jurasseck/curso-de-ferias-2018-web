
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 03**

Sumário
=======

* [Conceitos](#conceitos)
  * [Modules](#modules)
  * [Componentes](#componentes)
  * [Rotas](#rotas)
  * [Layout](#layout)
* [Hands-on](#hands-on)
  * [Criando Módulo de Usuário](#criando-módulo-de-usuário)
  * [Criando Componente de Consulta de Usuário](#criando-componente-de-consulta-de-usuário)
  * [Criando Componente de Formulário de Usuário](#criando-componente-de-formulário-de-usuário)
  * [Adicionando Layout](#adicionando-layout)
  
Conceitos
=========

[Componentes Angular Material](https://material.angular.io/components)

Modules
-------

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
