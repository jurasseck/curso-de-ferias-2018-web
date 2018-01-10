
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 06**

Sumário
=======

* [Conceitos](#conceitos)
  * [Serviços](#serviços)
  * [Arrays](#arrays)
  * [Navegação com Rotas](#navegação-com-rotas)
  * [Observable](#observable)
* [Hands-on](#hands-on)
  * [Criando Serviço de Usuário](#criando-serviço-de-usuário)
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

Refatorando Módulos
-------------------

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
