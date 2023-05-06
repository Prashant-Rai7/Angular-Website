import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {
  usertitle: any;

  constructor(private http: HttpClient) { }

  contactALert(){
    alert("Thanks for Subscribing.")
  }
  product= [{name:"Mobile", id: "001"},{name:"TV", id: "002"},{name:"Laptop", id: "003"},{name:"AC", id: "004"}]

  url = 'https://jsonplaceholder.typicode.com/users'
  // url = 'https://dummyjson.com/products'

  // product():Observable<any>{
  //   return this.http.get(this.url)
  // }

  // userName = new Subject<any>();
  userName = new BehaviorSubject('Prashant Rai');
}
