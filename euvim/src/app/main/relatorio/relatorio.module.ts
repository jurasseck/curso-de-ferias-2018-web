import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PresencaComponent } from './presenca/presenca.component';
import { RelatorioRouting } from "./relatorio.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RelatorioRouting
  ],
  declarations: [PresencaComponent]
})
export class RelatorioModule { }
