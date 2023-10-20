import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about-component/about.component';
import { AbilityComponent } from './pages/ability/ability-component/ability.component'
import { PortfolioComponent } from './pages/portfolio/portfolio-component/portfolio.component';

const routes: Routes = [
  {path:'', component: AboutComponent, pathMatch: 'full'},
  {path:'ability', component: AbilityComponent, pathMatch: 'prefix'},
  {path:'portfolio', component: PortfolioComponent, pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
