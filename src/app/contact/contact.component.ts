import { Component, OnInit, ViewChild } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{


  constructor(private _msgService: DesignutilityService){}

  btnName = "Subscribe"

  product = {}

  ngOnInit(){
    this.product = this._msgService.product[1].name;
    // console.log(this.product)
  }
  messageALert(){
    this._msgService.contactALert();
  }

  // @ViewChild('myForm') myForm:NgForm | undefined;
  contactSubmit(form: NgForm){
    console.log(form.value)
    // console.log(this.myForm)
  }
}
