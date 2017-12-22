import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaRouting } from './disciplina.routing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    DisciplinaRouting,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSelectModule, 
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [HttpClient,DisciplinaService, FormBuilder]
})
export class DisciplinaModule { }
