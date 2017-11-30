import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuarioService } from './usuario.service';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSelectModule, 
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [UsuarioService, FormBuilder]
})
export class UsuarioModule { }
