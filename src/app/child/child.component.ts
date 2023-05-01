import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() productSelected: boolean = false;
  @Input() selectedItem: string | any;
  @Output() addedProducts = new EventEmitter<any>();
  myValue: string = ""


  onAddtoCart(){
    this.addedProducts.emit(this.selectedItem);
  }

}
