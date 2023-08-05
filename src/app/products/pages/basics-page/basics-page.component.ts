import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {

  public nameLower:string='stalin';
  public nameUpper:string='STALIN';
  public fullName:string='stalin salgado';

  public customDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
