import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact-component/contact.component';



@NgModule({
  declarations: [
    ContactComponent,
  ],
  exports: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ContactModule { }
