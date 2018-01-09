
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 02**

Sumário
=======

* [Conceitos](#conceitos)
  * [Modules](#modules)
  * [Componentes](#componentes)
  * [Rotas](#rotas)
* [Hands-on](#hands-on)
  
Conceitos
=========

Modules
-------

##### src/app/main/main.module.js
``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MainModule { }
```

Componentes
-----------

##### src/app/main/main.component.scss
``` css

```

##### src/app/main/main.component.html
``` html
<p>
  main works!
</p>
```

##### src/app/main/main.component.spec.ts
``` typescript
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

##### src/app/main/main.component.ts
``` typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

##### src/app/main/main.module.js
``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
```

Rotas
-----

##### src/app/app.routing.ts
``` typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/main', pathMatch: 'full' }
    ], {useHash:true})
  ]
})
export class AppRoutingModule { }
```

##### src/app/main/main.routing.ts
``` typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'main', 
        component: MainComponent
      }
    ])
  ]
})
export class MainRouting { }
```

##### No arquivo src/app/app.component.html
```
<router-outlet></router-outlet>
```

##### No arquivo src/app/main/main.component.html
```
<router-outlet></router-outlet>
```

Hands-On
========

##### Criando um módulo
```ng g module main```

##### Criando um componente
```ng g component main```

##### No arquivo src/app/app.routing.ts
``` typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/main', pathMatch: 'full' }
    ], {useHash:true})
  ]
})
export class AppRoutingModule { }
```

##### No arquivo src/app/main/main.routing.ts
``` typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'main', 
        component: MainComponent
      }
    ])
  ]
})
export class MainRouting { }
```

##### No arquivo src/app/app.module.ts
``` typescript
import { RouterModule } from '@angular/router';
import { MainModule } from "./main/main.module";
import { AppRoutingModule } from "./app.routing";
```

``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { RouterModule } from '@angular/router';
import { MainModule } from "./main/main.module";
import { AppRoutingModule } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

##### No arquivo src/app/main/main.routing.ts
``` typescript
import { MainRouting } from './main.routing';
import { RouterModule } from "@angular/router";
```

``` typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }

```
