
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 05**

Sumário
=======

* [Conceitos](#conceitos)
  * [Serviços](#formulários)
  * [Binding](#binding)
  * [Validadores](#validadores)
  * [Mensagens de Erro](#mensagens-de-erro)
* [Hands-on](#hands-on)
  * [Criando Serviço de Usuário](#criando-serviço-de-usuário)
  * [Adicionando Rota de Edição de Usuário](#adicionando-rota-de-edição-de-usuário)
  
Conceitos
=========

[Componentes Angular Material](https://material.angular.io/components)

Serviços
-----------

``` typescript
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  constructor() { }

}
```

Hands-on
========

Criando Serviço de Usuário
--------------------------

##### No diretório src/app/main/usuario
``` typescript
ng g service usuario
```

##### No arquivo src/app/main/usuario/usuario.service.ts
``` typescript
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  private usuarios = [
    {id: 1, nome: 'José da Silva', login: "jose", email: 'jose@ponto.com.br', perfil:"ALUNO"},
    {id: 2, nome: 'Mariano das Neves', login: "mariano", email: 'marino@ponto.com.br', perfil:"ALUNO"},
    {id: 3, nome: 'Magyver da Silva', login: "magyver", email: 'magyver@ponto.com.br', perfil:"ALUNO"},
    {id: 4, nome: 'Irineu Nunes', login: "irineu", email: 'irineu@ponto.com.br', perfil:"ALUNO"},
    {id: 5, nome: 'Carlos Silva', login: "carlos1", email: 'carlos@ponto.com.br', perfil:"ALUNO"}
  ];

  constructor() { }
  
  adicionar(usuario){
    let maxIdentifier = 0;
    this.usuarios.forEach(usuario=>{
      maxIdentifier < usuario.id ? maxIdentifier = usuario.id : maxIdentifier = maxIdentifier;
    })
    usuario.identifier = maxIdentifier + 1;
    this.usuarios.push(usuario);
  }

  excluir(id){
    let index = this.usuarios.findIndex(item=> item.id == id);
    if(index > -1){
      this.usuarios.splice(index,1);
    }
  }

  editar(usuario){
    let index = this.usuarios.findIndex(item=> item.id == usuario.id);
    if(index > -1){
      this.usuarios[index] = usuario;
    }
  }

  listar(){
    return this.usuarios;
  }

  carregar(id){
    return this.usuarios.find(item=> item.id == id);
  }

}
```

##### No arquivo src/app/main/main.module.ts
``` typescript
import { UsuarioService } from './usuario/usuario.service';
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

import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { UsuarioService } from './usuario/usuario.service';

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
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    FormBuilder,
    UsuarioService
  ],
  declarations: [MainComponent, ConsultaComponent, FormularioComponent]
})
export class MainModule { }
```

Adicionando Rota de Edição de Usuário
-------------------------------------

##### No arquivo src/app/main/main.routing.ts
``` typescript
{
  path: 'usuario/editar/:id',
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
          },
          {
            path: 'usuario/editar/:id',
            component: FormularioComponent
          }
        ]
      }
    ])
  ]
})
export class MainRouting { }
```
