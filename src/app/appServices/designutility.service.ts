import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }

  contactALert(){
    alert("Thanks for Subscribing.")
  }
  product= [{name:"Mobile", id: "001"},{name:"TV", id: "002"},{name:"Laptop", id: "003"},{name:"AC", id: "004"}]
}
