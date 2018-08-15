import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pathBrand: string;

  constructor() { }

  ngOnInit() {
    this.pathBrand = 'assets/images/brand.png';
  }

}
