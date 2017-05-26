import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], this.notForbiddenName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null, [])
    });

    this.signupForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  notForbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({'forbiddenName': true})
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
