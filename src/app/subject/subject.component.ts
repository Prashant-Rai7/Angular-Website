import { Component } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})

export class SubjectComponent {
  constructor(private _designServices: DesignutilityService){
    this._designServices.userName.subscribe((uname: string) => this.userName = uname)
  }
  ngOnInit(){
  }
  userName: any;
  updateUsername(uname: any){
    // this.usertitle = uname.value;
    this._designServices.userName.next(uname.value)
  }
}
