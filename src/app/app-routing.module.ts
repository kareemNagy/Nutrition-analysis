import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './modules/error-page/error-page.component';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { NutritionDetailsComponent } from './modules/nutrition-details/nutrition-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: 'nutrition-details', component: NutritionDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
