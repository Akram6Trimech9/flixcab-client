import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LModule } from './layout/l.module';
import { VisiteurComponent } from './layout/visiteur/visiteur.component';
import { SharedModule } from './shared/shared.module';
 
@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserModule,

    SharedModule,
    LModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
