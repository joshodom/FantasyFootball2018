import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { IdiotsComponent } from './idiots/idiots.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ManagerCardComponent } from './manager-card/manager-card.component';

const appRoutes: Routes = [
  { path: 'home', redirectTo: '/'},
  { path: 'idiots', component: IdiotsComponent },
  { path: 'rankings', component: RankingsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [LayoutComponent, HeaderComponent, IdiotsComponent, RankingsComponent, ManagerCardComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
