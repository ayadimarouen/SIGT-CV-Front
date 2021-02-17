import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvRoutingModule } from './cv-routing.module';
import { MyCvComponent } from './components/cv/my-cv.component';



@NgModule({
  declarations: [
    MyCvComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule
  ]
})
export class CvModule { }
