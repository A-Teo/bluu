import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ViewAComponent } from './bluu/views/view-a/view-a.component';
import { ViewBComponent } from './bluu/views/view-b/view-b.component';
import { ViewCComponent } from './bluu/views/view-c/view-c.component';
import { ViewDComponent } from './bluu/views/view-d/view-d.component';
import { ViewEComponent } from './bluu/views/view-e/view-e.component';
import { SchoolListComponent } from './schools/school-list.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'user-profile', component: ProfileComponent },
  // { path: 'register', component: SignupComponent },
  // { path: 'landing', component: LandingComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'view_a', component: ViewAComponent },
  { path: 'view_b', component: ViewBComponent },
  { path: 'view_c', component: ViewCComponent },
  { path: 'inicio', component: ViewDComponent },
  // { path: 'view_e', component: ViewEComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      // useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
