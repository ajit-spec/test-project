import {Component, OnInit} from '@angular/core';
import {Service1Service} from '../../services/service1.service';
import {Post} from '../../model/post';
import {map, take} from 'rxjs/operators';
import {from} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  animations: [
    trigger('animation1', [
      state('state1', style({
        transform: 'translateX(0px)',
        // transform: 'scale(1)'

      })),
      transition('void => *', [
        style({
          transform: 'translateX(-2000px)',
          // transform: 'scale(0.3)'
        }),
        animate('1000ms ease-in-out')
      ])
    ]),
    trigger('animation2', [
      state('state2', style({
        transform: 'translateY(0px)'
      })),
      transition('void => *', [
        style({
          transform: 'translateY(-2000px)'
        }),
        animate('1000ms ease-in-out')
      ]),
      transition('* => void', [
        animate('1000ms ease-in-out', style({
          transform: 'translateY(2000px)'
        }))
      ])
    ])
  ]
})
export class Comp2Component implements OnInit {

  prop1: Service1Service;
  prop2: Post[] = [];
  prop3: Post[] = [];
  prop5 = 0;
  prop6 = this.prop5 + 7;
  prop7 = true;
  prop9 = false;


  constructor(param1: Service1Service) {
    this.prop1 = param1;
  }

  ngOnInit(): void {

    this.prop1.getPosts().subscribe(value => {
      // console.log(value);
      from(value).pipe(
        map((value2: any) => {
          delete value2.userId;
          return value2;
        })
      ).subscribe(value1 => {
        // console.log(value1);
        this.prop2.push(value1);
        this.prop3 = this.prop2.slice(this.prop5, this.prop6);
      });
    });

  }

  prop4(): void {
    this.prop7 = false;
    [this.prop5, this.prop6] = [this.prop6, this.prop6 + 7];
    this.prop3 = this.prop2.slice(this.prop5, this.prop6);

  }

  prop8(): void {
    [this.prop5, this.prop6] = [this.prop5 - 7, this.prop6 - 7];
    this.prop3 = this.prop2.slice(this.prop5, this.prop6);
    // console.log(this.prop3);
  }

  prop10(): void {
    // localStorage.removeItem('username');
    // localStorage.removeItem('password');
    this.prop9 = true;
    this.prop1.prop1 = false;
  }


}
