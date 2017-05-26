import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObservablesSub: Subscription;
  customObservableSub: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .map(
      (data: number) => {
        return data * 2;
      }
    );
    this.numbersObservablesSub = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('this does not work');
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 4000);
    });
    this.customObservableSub = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );

  }

  ngOnDestroy() {
    // have to unsubscribe when using your own observables
    // the angular observables clean themselves up
    this.customObservableSub.unsubscribe();
    this.numbersObservablesSub.unsubscribe();
  }

}
