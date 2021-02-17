import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCvComponent } from './components/cv/my-cv.component';


const routes: Routes = [
  {
    path : '',
    component : MyCvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }