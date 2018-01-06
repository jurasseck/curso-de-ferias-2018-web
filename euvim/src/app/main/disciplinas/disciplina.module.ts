import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatListModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisciplinaService } from './disciplina.service';
import { ProfessorService } from './professor.service';
import { DisciplinaRouting } from './disciplina.routing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProfessorDialogComponent } from './consulta/professor-dialog/professor-dialog.component';
import { QrCodeDialogComponent } from './consulta/qr-code-dialog/qr-code-dialog.component';

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
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [ProfessorDialogComponent, QrCodeDialogComponent],
  declarations: [ConsultaComponent, FormularioComponent, ProfessorDialogComponent, QrCodeDialogComponent],
  providers: [HttpClient,DisciplinaService,ProfessorService, FormBuilder, {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}]
})
export class DisciplinaModule { }
