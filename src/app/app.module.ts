import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ApitryComponent } from './apitry/apitry.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChatsComponent } from './chats/chats.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './chats/search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
const appRoute:Routes=[
  {path: "", component: MainScreenComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path:'chats', component: ChatsComponent},
  // {path:'chats/home', component: MainScreenComponent},
  {path:'chats/home', redirectTo:'',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    ApitryComponent,
    UserprofileComponent,
    ChatsComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
