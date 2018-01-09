
## **Curso de Férias 2018 - Desenvolvimento Frontend com Angular - Aula 04**

Sumário
=======

* [Conceitos](#conceitos)
  * [Serviços](#serviços)
  * [Elementos](#elementos)
  * [DataSource](#datasource)
* [Hands-on](#hands-on)
  * [Criando Módulo de Usuário](#criando-módulo-de-usuário)
  * [Criando Componente de Consulta de Usuário](#criando-componente-de-consulta-de-usuário)
  * [Criando Componente de Formulário de Usuário](#criando-componente-de-formulário-de-usuário)
  * [Configurando Rota de Consulta de Usuário](#configurando-rota-de-consulta-de-usuário)
  * [Tabela de Consulta de Usuários](#tabela-de-consulta-de-usuários)
  
Conceitos
=========

[Componentes Angular Material](https://material.angular.io/components)

Serviços
-------
``` typescript
public displayedColumns = ['position', 'name', 'weight', 'symbol'];
public dataSource = new UsuarioDataSource();
```
