import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './visiteur/nav/nav.component';
import { FooterComponent } from './visiteur/footer/footer.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavComponent, FooterComponent]
})
export class SharedModule { }
