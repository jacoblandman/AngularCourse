import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';

  onSubmit() {
    console.log('submitted');
    console.log('Form.valid: ' + this.signupForm.valid);
    console.log('Email.valid: ' + this.signupForm.controls['email'].valid);
    console.log('Password.valid: ' + this.signupForm.controls['password'].valid);

  }

}
