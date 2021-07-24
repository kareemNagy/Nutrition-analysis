import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-nutrition-details',
  templateUrl: './nutrition-details.component.html',
  styleUrls: ['./nutrition-details.component.scss']
})
export class NutritionDetailsComponent implements OnInit {
  nutrition: any;
  userSearch: string;
  totalCalories: number = 0;
  precentageCalories: number = 0;
  proten: number = 0;
  carbs: number = 0;
  fat: number = 0;



  constructor(public ApiService: DataService, private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.getUrlParams();

    if (this.ApiService.dataRes) {
      this.nutrition = this.ApiService.dataRes;
      this.totalCalc();
    } else {
      this.getData();
    }
  }

  getUrlParams() {
    this.activeRoute.queryParams.subscribe(params => {
      this.userSearch = params.userSearch;
    });
  }

  getData() {
    this.ApiService.getPost({ "ingr": this.userSearch.split(/\n|\r/) })
      .subscribe(
        response => {
          this.nutrition = response;
          this.totalCalc();
        },
        error => {
          this.router.navigate(['error-page']);
          console.log(error);
        });
  }

  totalCalc() {
    this.proten = this.nutrition.totalNutrientsKCal.PROCNT_KCAL.quantity;
    this.carbs = this.nutrition.totalNutrientsKCal.CHOCDF_KCAL.quantity;
    this.fat = this.nutrition.totalNutrientsKCal.FAT_KCAL.quantity;
    this.totalCalories = this.proten + this.carbs + this.fat;
    this.precentageCalories = (this.totalCalories / 2000) * 100;
  }

}
