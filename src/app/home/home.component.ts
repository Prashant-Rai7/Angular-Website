import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // products = ['Laptop', 'Mobile', 'TV', 'AC', 'Washing Machine', 'Cooler', 'Fridge', 'Fan']

  constructor(private _msgService: DesignutilityService){}

  products:any;
  ngOnInit(){
    this.products = this._msgService.product;
  }
}
