import { Component } from '@angular/core';
import {CmpDataService} from './cmp-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Test';
constructor(private emp:CmpDataService){
  this.emp.getData().subscribe(data=>console.log(data));
}
}
