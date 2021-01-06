import {Component, OnInit} from '@angular/core';
import {Service1Service} from '../../services/service1.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  prop1: Service1Service;

  prop2(): void {
    this.prop1.prop1 = true;
  }

  constructor(param1: Service1Service) {
    this.prop1 = param1;
  }

  ngOnInit(): void {
  }

}
