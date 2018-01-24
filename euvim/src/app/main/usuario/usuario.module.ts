import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormularioComponent, ConsultaComponent]
})
export class UsuarioModule { }
