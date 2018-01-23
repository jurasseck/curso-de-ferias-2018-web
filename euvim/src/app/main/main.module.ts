import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule
  ],
  declarations: [MainComponent]
})

export class MainModule { }
