import {Component} from '@angular/core';
import {Service1Service} from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  prop1: Service1Service;

  constructor(param1: Service1Service) {
    this.prop1 = param1;
  }
}
