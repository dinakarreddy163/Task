import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './User/create-user/create-user.component';
import { UserlistComponent } from './User/userlist/userlist.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';

const routes: Routes = [
  {
    path:"",
    component:UserlistComponent
  },
  {
    path:"createUser",
    component:CreateUserComponent
  },
  {
    path:"Update",
    component:UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
