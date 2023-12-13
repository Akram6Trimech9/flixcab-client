import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { FirstPartComponent } from './components/first-part/first-part.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    FirstPartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
