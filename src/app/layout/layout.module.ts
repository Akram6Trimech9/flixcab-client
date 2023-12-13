import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisiteurComponent } from './visiteur/visiteur.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VisiteurComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ]
})
export class LayoutModule { }
