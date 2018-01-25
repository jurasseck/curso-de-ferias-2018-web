import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    MainRouting,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
  ],
  declarations: [
    MainComponent,
    UsuarioComponent,
    ConsultaComponent,
    FormularioComponent
  ]
})

export class MainModule { }
