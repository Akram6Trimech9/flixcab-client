import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisiteurComponent } from './layout/visiteur/visiteur.component';

const routes: Routes = [{
  path:'',loadChildren: () => import('./component/home-page/home-page.module').then(m => m.HomePageModule)

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
