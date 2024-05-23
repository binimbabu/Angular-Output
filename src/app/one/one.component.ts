import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  clickCounter?: number;
  countChangedHandler(count: any) {
    this.clickCounter = count;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
