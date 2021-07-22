import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  go() {
    this.route.navigate(['/home']); // navigate to other page
  }

}
