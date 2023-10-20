import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio-component/portfolio.component';
import { CardComponent } from './portfolio-component/card/card.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    CardComponent
  ],
  exports: [
    PortfolioComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
