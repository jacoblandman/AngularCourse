import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-component',
  templateUrl: './data-binding-component.component.html',
  styleUrls: ['./data-binding-component.component.css']
})
export class DataBindingComponentComponent implements OnInit {

  username='';

  constructor() { }

  ngOnInit() {
  }

  isUsernameEmpty() {
    if (this.username === '') {
      return true;
    } else {
      return false;
    }
  }

  resetUsername() {
    this.username='';
  }

}
