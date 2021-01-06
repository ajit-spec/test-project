import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Route, Router} from '@angular/router';
import {Service1Service} from '../../services/service1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
  animations: [
    trigger('animation1', [
      state('state1', style({
        transform: 'translateY(0px)',
        opacity: '1'
      })),
      transition('void => *', [
        style({
          transform: 'translateY(20px)',
          opacity: '0'
        }),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class Comp1Component implements OnInit {

  prop1 = true;

  form: FormGroup;
  formBuilder: FormBuilder;

  prop2: Router;
  prop3: Service1Service;


  constructor(param1: FormBuilder, param2: Router, param3: Service1Service) {
    this.formBuilder = param1;
    this.prop2 = param2;
    this.prop3 = param3;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });

  }

  onSubmit(): void {

    console.log(this.form);

    localStorage.setItem('username', JSON.stringify(this.form.get('username').value));
    localStorage.setItem('password', JSON.stringify(this.form.get('password').value));
    this.prop3.login();
    console.log(this.prop3.user);
    this.prop2.navigate(['/posts']);


  }

}
