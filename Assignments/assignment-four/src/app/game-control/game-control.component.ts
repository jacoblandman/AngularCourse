import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  myInterval: number;
  lastNumber = 0;

  onStopClick() {
    clearInterval(this.myInterval);
  }

  onStartClick() {
    this.myInterval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  constructor() { }

  ngOnInit() {
  }

}
