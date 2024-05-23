import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent {

  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  count: number = 0;
  constructor() { }
  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }

}
