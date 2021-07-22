import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './service/data.service';
import { NutritionDetailsModule } from './modules/nutrition-details/nutrition-details.module';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NutritionDetailsModule,
    LayoutsModule,
    HomeModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
