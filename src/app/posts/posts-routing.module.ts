import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Comp2Component} from '../components/comp2/comp2.component';
import {Guard1Guard} from '../guards/guard1.guard';

const routes: Routes = [
  {
    path: '',
    component: Comp2Component,
    canDeactivate: [Guard1Guard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
