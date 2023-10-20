import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityComponent } from './ability-component/ability.component';
import { IconBoxComponent } from '../ability/ability-component/icon-box/icon-box.component';



@NgModule({
  declarations: [
    AbilityComponent,
    IconBoxComponent,
  ],
  exports: [
    AbilityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class abilityModule { }
