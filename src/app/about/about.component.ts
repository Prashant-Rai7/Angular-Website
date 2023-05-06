import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  Location: string = "Canada";
  generateLocation(location: any){
    this.Location = location.value
  }
}
