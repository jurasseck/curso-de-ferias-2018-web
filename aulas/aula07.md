
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 06**

Sumário
=======

* [Conceitos](#conceitos)
  * [Datas](#datas)
* [Hands-on](#hands-on)
  * [Refatorando Módulos e Rotas](#refatorando-módulos-e-rotas)
  * [Adicionando Rota de Disciplina](#adicionando-rota-de-disciplina)
  * [Adicionando Consulta de Disciplina](#adicionando-consulta-de-disciplina)
  * [Adicionando Serviço de Professor](#adicionando-serviço-de-professor)
  * [Adicionando Formulário de Disciplina](#adicionando-formulário-de-disciplina)
  
Conceitos
=========

[Componentes Angular Material](https://material.angular.io/components)

Datas
--------
``` typescript
import { MAT_DATE_LOCALE } from '@angular/material';

providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}    
  ]
  
{{element.data  | date:'dd/MM/yyyy'}} 
```

Hands-on
========

Refatorando Módulos e Rotas
---------------------------
