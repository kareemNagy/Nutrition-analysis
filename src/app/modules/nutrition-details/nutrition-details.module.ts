import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionDetailsComponent } from './nutrition-details.component';




@NgModule({
  declarations: [NutritionDetailsComponent],
  imports: [
    CommonModule,

  ],
  exports: [NutritionDetailsComponent]
})
export class NutritionDetailsModule { }
