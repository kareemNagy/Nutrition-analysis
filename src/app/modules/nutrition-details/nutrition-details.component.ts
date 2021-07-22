import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-nutrition-details',
  templateUrl: './nutrition-details.component.html',
  styleUrls: ['./nutrition-details.component.scss']
})
export class NutritionDetailsComponent implements OnInit {
  userSearch: string;
  totalCalories: number = 0;
  precentageCalories: number = 0;
  proten: number = 0;
  carbs: number = 0;
  fat: number = 0;

  nutrition: any;

  constructor(public ApiService: DataService, private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.activeRoute.queryParams.subscribe(params => {
      this.userSearch = params.userSearch;

    });


    this.nutrition = localStorage.getItem("nutritionDetails") ? JSON.parse(localStorage.getItem("nutritionDetails")) : this.router.navigate(['home']);
    this.proten = this.nutrition.totalNutrientsKCal.PROCNT_KCAL.quantity;
    this.carbs = this.nutrition.totalNutrientsKCal.CHOCDF_KCAL.quantity;
    this.fat = this.nutrition.totalNutrientsKCal.FAT_KCAL.quantity;
    this.totalCalories = this.proten + this.carbs + this.fat;
    this.precentageCalories = (this.totalCalories / 2000) * 100;
  }

  // ngOnDestroy() {
  //   this.nutrition_data.unsubscribe();
  // }

}
