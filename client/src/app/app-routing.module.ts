import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', component: GraphicCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
