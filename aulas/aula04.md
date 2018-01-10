
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 04**

Sumário
=======

* [Conceitos](#conceitos)
  * [Formulários](#formulários)
  * [ComboBox](#combobox)
  * [Validadores](#validadores)
* [Hands-on](#hands-on)
  * [Adicionando Rota para Formulário de Usuário](#adicionando-rota-para-formulário-de-usuário)
  * [Criando Formulário de Usuário](#criando-formulário-de-usuário)
  * [Criando ComboBox de Perfis](#criando-combobox-de-perfis)
  * [Adicionando Validações](#adicionando-validações)
  * [Adicionando Mensagens de Erro](#adicionando-mensagens-de-erro)
  * [Validações Customizadas](#validações-customizadas)
  
Conceitos
=========

[Componentes Angular Material](https://material.angular.io/components)

Formulários
-----------

ComboBox
--------

Validadores
-----------

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

Criando Formulário de Usuário
-----------------------------

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
      <button mat-raised-button color="primary">Salvar</button>
      <button mat-raised-button color="warn" routerLink="/main/usuario/consulta">Cancelar</button>
  </div>
</form>
```

Criando ComboBox de Perfis
--------------------------
##### No arquivo src/app/main/usuario/formulario/formulario.component.ts
``` typescript
  public perfis = [
    { id: "PROFESSOR", descricao: 'Professor' },
    { id: "ADMINISTRADOR", descricao: 'Administrador' },
    { id: "ALUNO", descricao: 'Aluno' },
  ];
```

``` typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public perfis = [
    { id: "PROFESSOR", descricao: 'Professor' },
    { id: "ADMINISTRADOR", descricao: 'Administrador' },
    { id: "ALUNO", descricao: 'Aluno' },
  ];

  constructor() {
  }
  
  ngOnInit() {
  }

}
```

##### No arquivo src/app/main/usuario/formulario/formulario.component.html
``` typescript
<mat-select formControlName="perfil" placeholder="Perfil">
    <mat-option *ngFor="let perfil of perfis" [value]="perfil.id">
      {{ perfil.descricao }}
    </mat-option>
</mat-select>
```

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
            <mat-option *ngFor="let perfil of perfis" [value]="perfil.id">
              {{ perfil.descricao }}
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
      <button mat-raised-button color="primary">Salvar</button>
      <button mat-raised-button color="warn" routerLink="/main/usuario/consulta">Cancelar</button>
  </div>
</form>
```

Adicionando Validações
----------------------

##### No arquivo src/app/main/main.module.ts
``` typescript
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
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
    FormBuilder
  ],
  declarations: [MainComponent, ConsultaComponent, FormularioComponent]
})
export class MainModule { }
```

##### No arquivo src/app/main/usuario/formulario/formulario.component.ts
``` typescript
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

public form : FormGroup;
  
constructor(private formBuilder: FormBuilder) {
  this.form = formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      login: [null, Validators.required],
      perfil: [null, Validators.required],
      senha: [null, Validators.required],
      confirmacao: [null, Validators.required]
  })
}   
```

``` typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public perfis = [
    { id: "PROFESSOR", descricao: 'Professor' },
    { id: "ADMINISTRADOR", descricao: 'Administrador' },
    { id: "ALUNO", descricao: 'Aluno' },
  ];

  public form : FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
        id: [null],
        nome: [null, Validators.required],
        email: [null, Validators.compose([Validators.required, Validators.email])],
        login: [null, Validators.required],
        perfil: [null, Validators.required],
        senha: [null, Validators.required],
        confirmacao: [null, Validators.required]
    })
   }
  
  ngOnInit() {
  }

}
```

##### No arquivo src/app/main/usuario/formulario/formulario.component.ts
``` typescript
[formGroup]="form"

formControlName="nome"
formControlName="email"
formControlName="login"
formControlName="perfil"
formControlName="senha"
formControlName="confirmacao"

[disabled]="!form.valid"
```

``` typescript
<form [formGroup]="form" fxLayout="column">
  <mat-form-field fxFlex="100"> 
    <input matInput formControlName="nome" placeholder="Nome">
  </mat-form-field>
  <mat-form-field fxFlex="100"> 
    <input matInput formControlName="email" placeholder="E-mail">
  </mat-form-field>
  <div fxFlex="100" fxLayout="row">
    <mat-form-field fxFlex="47"> 
      <input matInput formControlName="login" placeholder="Login">
    </mat-form-field>
    <span fxFlex="5"></span>
    <mat-form-field fxFlex="47"> 
        <mat-select formControlName="perfil" placeholder="Perfil">
            <mat-option *ngFor="let perfil of perfis" [value]="perfil.id">
              {{ perfil.descricao }}
            </mat-option>
        </mat-select>
    </mat-form-field>
  </div>
  <div fxFlex="100" fxLayout="row">
    <mat-form-field fxFlex="47"> 
      <input matInput formControlName="senha" placeholder="Senha" type="password">
    </mat-form-field>
    <span fxFlex="5"></span>
    <mat-form-field fxFlex="47"> 
      <input matInput formControlName="confirmacao" placeholder="Confirmação" type="password">
    </mat-form-field>
  </div>
  <div fxFlex="100" fxLayout="row" fxLayoutAlign="space-between">
      <button mat-raised-button color="primary" [disabled]="!form.valid">Salvar</button>
      <button mat-raised-button color="warn" routerLink="/main/usuario/consulta">Cancelar</button>
  </div>
</form>
```

Adicionando Mensagens de Erro
-----------------------------

##### No arquivo src/app/main/usuario/formulario/formulario.component.html
``` typescript
<mat-error *ngIf="form.controls['nome'].hasError('required')">
    Campo obrigatório
</mat-error>
```    
    
``` typescript
<form [formGroup]="form" fxLayout="column">
  <mat-form-field fxFlex="100"> 
    <input matInput formControlName="nome" placeholder="Nome">
    <mat-error *ngIf="form.controls['nome'].hasError('required')">
        Campo obrigatório
    </mat-error>
  </mat-form-field>
  <mat-form-field fxFlex="100"> 
    <input matInput formControlName="email" placeholder="E-mail">
    <mat-error *ngIf="form.controls['email'].hasError('required')">
        Campo obrigatório
    </mat-error>
    <mat-error *ngIf="form.controls['email'].hasError('email') && !form.controls['email'].hasError('required')">
        E-mail inválido
    </mat-error>
  </mat-form-field>
  <div fxFlex="100" fxLayout="row">
    <mat-form-field fxFlex="47"> 
      <input matInput formControlName="login" placeholder="Login">
      <mat-error *ngIf="form.controls['login'].hasError('required')">
          Campo obrigatório
      </mat-error>
    </mat-form-field>
    <span fxFlex="5"></span>
    <mat-form-field fxFlex="47"> 
        <mat-select formControlName="perfil" placeholder="Perfil">
            <mat-option *ngFor="let perfil of perfis" [value]="perfil.id">
              {{ perfil.descricao }}
            </mat-option>
        </mat-select>
        <mat-error *ngIf="form.controls['perfil'].hasError('required')">
          Campo obrigatório
        </mat-error>
    </mat-form-field>
  </div>
  <div fxFlex="100" fxLayout="row">
    <mat-form-field fxFlex="47"> 
      <input matInput formControlName="senha" placeholder="Senha" type="password">
      <mat-error *ngIf="form.controls['senha'].hasError('required')">
          Campo obrigatório
      </mat-error>
    </mat-form-field>
    <span fxFlex="5"></span>
    <mat-form-field fxFlex="47"> 
      <input matInput formControlName="confirmacao" placeholder="Confirmação" type="password">
      <mat-error *ngIf="form.controls['confirmacao'].hasError('required')">
          Campo obrigatório
      </mat-error>
    </mat-form-field>
  </div>
  <div fxFlex="100" fxLayout="row" fxLayoutAlign="space-between">
      <button mat-raised-button color="primary" [disabled]="!form.valid">Salvar</button>
      <button mat-raised-button color="warn" routerLink="/main/usuario/consulta">Cancelar</button>
  </div>
</form>
```

Validações Customizadas
-----------------------

##### No arquivo src/app/validators/equals.password.validator.ts
``` typescript
import {FormGroup} from '@angular/forms';

export class EqualsPasswordValidator {

  public static validate(firstField, secondField) {
    return (formGroup: FormGroup) => {       
    (formGroup.controls && formGroup.controls[firstField].value == formGroup.controls[secondField].value) 
        ? formGroup.controls[secondField].setErrors(formGroup.controls[secondField].getError('required') ? {required: {valid:false}} : null) :
        formGroup.controls[secondField].setErrors({passwordEquals: {valid: false}});
    }
  }

}
```    

##### No arquivo src/app/main/usuario/formulario/formulario.component.ts
``` typescript
import { EqualsPasswordValidator } from '../../../validators/equals.password.validator';

{validator: EqualsPasswordValidator.validate("senha", "confirmacao")}
```    
    
``` typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EqualsPasswordValidator } from '../../../validators/equals.password.validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public perfis = [
    { id: "PROFESSOR", descricao: 'Professor' },
    { id: "ADMINISTRADOR", descricao: 'Administrador' },
    { id: "ALUNO", descricao: 'Aluno' },
  ];

  public form : FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
        id: [null],
        nome: [null, Validators.required],
        email: [null, Validators.compose([Validators.required, Validators.email])],
        login: [null, Validators.required],
        perfil: [null, Validators.required],
        senha: [null, Validators.required],
        confirmacao: [null, Validators.required]
    }, {validator: EqualsPasswordValidator.validate("senha", "confirmacao")})
   }
  
  ngOnInit() {
  }

}
```

##### No arquivo src/app/main/usuario/formulario/formulario.component.html
``` typescript
<mat-error *ngIf="form.controls['confirmacao'].hasError('passwordEquals') && !form.controls['confirmacao'].hasError('required')">
    Campo Confirmação não é igual ao campo Senha
</mat-error>
```    
    
``` typescript
<form [formGroup]="form" fxLayout="column">
  <mat-form-field fxFlex="100"> 
    <input matInput formControlName="nome" placeholder="Nome">
    <mat-error *ngIf="form.controls['nome'].hasError('required')">
        Campo obrigatório
    </mat-error>
  </mat-form-field>
  <mat-form-field fxFlex="100"> 
    <input matInput formControlName="email" placeholder="E-mail">
    <mat-error *ngIf="form.controls['email'].hasError('required')">
        Campo obrigatório
    </mat-error>
    <mat-error *ngIf="form.controls['email'].hasError('email') && !form.controls['email'].hasError('required')">
        E-mail inválido
    </mat-error>
  </mat-form-field>
  <div fxFlex="100" fxLayout="row">
    <mat-form-field fxFlex="47"> 
      <input matInput formControlName="login" placeholder="Login">
      <mat-error *ngIf="form.controls['login'].hasError('required')">
          Campo obrigatório
      </mat-error>
    </mat-form-field>
    <span fxFlex="5"></span>
    <mat-form-field fxFlex="47"> 
        <mat-select formControlName="perfil" placeholder="Perfil">
            <mat-option *ngFor="let perfil of perfis" [value]="perfil.id">
              {{ perfil.descricao }}
            </mat-option>
        </mat-select>
        <mat-error *ngIf="form.controls['perfil'].hasError('required')">
          Campo obrigatório
        </mat-error>
    </mat-form-field>
  </div>
  <div fxFlex="100" fxLayout="row">
    <mat-form-field fxFlex="47"> 
      <input matInput formControlName="senha" placeholder="Senha" type="password">
      <mat-error *ngIf="form.controls['senha'].hasError('required')">
          Campo obrigatório
      </mat-error>
    </mat-form-field>
    <span fxFlex="5"></span>
    <mat-form-field fxFlex="47"> 
      <input matInput formControlName="confirmacao" placeholder="Confirmação" type="password">
      <mat-error *ngIf="form.controls['confirmacao'].hasError('required')">
          Campo obrigatório
      </mat-error>
      <mat-error *ngIf="form.controls['confirmacao'].hasError('passwordEquals') && !form.controls['confirmacao'].hasError('required')">
          Campo Confirmação não é igual ao campo Senha
      </mat-error>
    </mat-form-field>
  </div>
  <div fxFlex="100" fxLayout="row" fxLayoutAlign="space-between">
      <button mat-raised-button color="primary" [disabled]="!form.valid">Salvar</button>
      <button mat-raised-button color="warn" routerLink="/main/usuario/consulta">Cancelar</button>
  </div>
</form>
```
