import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Comp1Component} from './components/comp1/comp1.component';

const routes: Routes = [
  {
    path: '',
    component: Comp1Component
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
