import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [MainComponent]
})

export class MainModule { }
