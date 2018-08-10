import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IdiotsComponent } from './idiots/idiots.component';
import { DraftResultsComponent } from './draft-results/draft-results.component';
import { RankingsComponent } from './rankings/rankings.component';

const appRoutes: Routes = [
  { path: 'home', redirectTo: '/'},
  { path: 'idiots', component: IdiotsComponent },
  { path: 'draftResults', component: DraftResultsComponent },
  { path: 'rankings', component: RankingsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, IdiotsComponent, DraftResultsComponent, RankingsComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
