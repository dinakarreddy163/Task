import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './User/create-user/create-user.component';
import { UserlistComponent } from './User/userlist/userlist.component';
import { UpdateUserComponent } from './User/update-user/update-user.component'; 
@NgModule({
  declarations: [
    AppComponent,
    
    CreateUserComponent,
    UserlistComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
