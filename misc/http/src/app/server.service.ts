import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  URL = 'https://udemy-ng-http-32040.firebaseio.com/';

  constructor(private http: Http) { }

  storeServers(servers: any[]) {

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(
      this.URL + 'data.json',
      servers,
      {headers: headers}
    );
  }

  // storeServers(servers: any[]) {
  //
  //   const headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post(
  //     this.URL,
  //     servers,
  //     {headers: headers}
  //   );
  // }

  getServers() {
    return this.http.get(this.URL + 'data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong.');
        }
      );
  }
  getAppName() {
    return this.http.get(this.URL + 'appName.json')
        .map(
          (response: Response) => {
            console.log(response.json());
            return response.json();
          }
        )
  }
}
