
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

  it('should be created', () => {
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
import { MainComponent } from '../src/app/main/main.component';

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

Hands-On
========

##### Criando um módulo
```ng g module main```

##### Criando um componente
```ng g component main```
