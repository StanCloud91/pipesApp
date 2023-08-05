import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})
export class NumbersPageComponent implements OnInit {

  public totalSells: number = 12331.123123;
  public percent: number = 0.24;

  constructor() { }

  ngOnInit(): void {
  }

}
