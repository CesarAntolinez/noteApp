import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';
import {HomeGuard} from '../../guards/home.guard';
import {UserDataResolver} from '../../resolvers/user-data.resolver';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
