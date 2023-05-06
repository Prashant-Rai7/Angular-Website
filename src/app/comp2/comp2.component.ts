import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  constructor(private _designServices: DesignutilityService){
    this._designServices.userName.subscribe((uname: string) => this.userName = uname)
  }
  ngOnInit(){
  }
  userName: any;
  updateUsername(uname: any){
    this._designServices.userName.next(uname.value)
  }
}
