
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public ApiService: DataService, private router: Router) { }
  ngOnInit(): void {
  }

  submit(form) {
    this.ApiService.getRecipeData(form.ingredients)
      .subscribe((data) => {
        localStorage.setItem('nutritionDetails', JSON.stringify(data))
        this.router.navigate(['nutrition-details'], { queryParams: { userSearch: form.ingredients } });
        error => console.log('error occurred', error);
      })
  }


}
