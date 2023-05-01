import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  productSelected_parent: boolean = false;
  selectedItem_parent: string | any;
  addedProducts: any;

  onSelectProduct(product: any){
    this.productSelected_parent = true;
    this.selectedItem_parent = product;
  }

  onAddedProduct(proData: any){
    this.addedProducts = proData;
    console.log(proData)
  }
}
