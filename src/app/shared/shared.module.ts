import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './visiteur/nav/nav.component';
import { FooterComponent } from './visiteur/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[
    NavComponent,
    RouterModule,
    FooterComponent
  ]
})
export class SharedModule { }
