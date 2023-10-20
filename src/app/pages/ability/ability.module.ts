import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityComponent } from './ability-component/ability.component';



@NgModule({
  declarations: [
    AbilityComponent
  ],
  exports: [
    AbilityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class abilityModule { }
