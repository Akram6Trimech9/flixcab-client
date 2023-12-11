import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { FirstPartComponent } from './components/first-part/first-part.component';


@NgModule({
  declarations: [
    HomePageComponent,
    FirstPartComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
