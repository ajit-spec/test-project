import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {Comp2Component} from '../components/comp2/comp2.component';


@NgModule({
  declarations: [Comp2Component],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule {
}
