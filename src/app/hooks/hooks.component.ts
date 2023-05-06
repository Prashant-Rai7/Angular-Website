import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges{
  constructor(){
    console.log("constructor called")
  }
  @Input() myValues = 'Uxterendz'

  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnChanges called")
    console.log(changes)
  }
  ngOnInit() {
    console.log("ngOnInit called")
  }
}
