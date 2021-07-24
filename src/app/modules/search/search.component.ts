
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
    this.ApiService.getPost({ "ingr": form.ingredients.split(/\n|\r/) })
      .subscribe(
        response => {
          this.ApiService.dataRes = response;
          this.router.navigate(['nutrition-details'], { queryParams: { userSearch: form.ingredients } });
        },
        error => {
          this.router.navigate(['error-page']);
          console.log(error);
        });
  }

}

