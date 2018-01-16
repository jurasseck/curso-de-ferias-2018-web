import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PresencaComponent } from './presenca/presenca.component';
import { RelatorioRouting } from "./relatorio.routing";
import { MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatDialogModule, MAT_DATE_LOCALE, MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DisciplinaService } from '../../services/disciplina.service';
import { RelatorioService } from './relatorio.service';
import { ItemPresencaComponent } from './presenca/item-presenca/item-presenca.component';
import { AuthInterceptor } from '../../services/auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RelatorioRouting,
    MatIconModule,
    MatButtonModule,
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
    MatExpansionModule,
    HttpClientModule
  ],
  declarations: [PresencaComponent, ItemPresencaComponent],
  providers: [HttpClient,FormBuilder, DisciplinaService, RelatorioService , {provide: MAT_DATE_LOCALE, useValue: 'pt-br'},
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]
})
export class RelatorioModule { }
