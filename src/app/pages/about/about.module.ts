import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about-component/about.component';
import { AboutInfoComponent } from './about-component/about-info/about-info.component';
import { AboutImgComponent } from './about-component/about-img/about-img.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutInfoComponent,
    AboutImgComponent
  ],
  exports: [
    AboutComponent,
    AboutImgComponent,
    AboutInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
