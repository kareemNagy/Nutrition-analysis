import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SearchModule } from '../search/search.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SearchModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
