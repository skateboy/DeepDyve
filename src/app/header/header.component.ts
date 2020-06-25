import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/angular-logo.png">
        </a>
      </div>
    </nav>
  `,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
