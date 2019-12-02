import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';



import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './bluu/header/header.component';
import { HeaderV2Component } from './bluu/header-v2/header-v2.component';
import { SubscribeFormComponent } from './bluu/subscribe-form/subscribe-form.component';
import { SubscribeFormOpenComponent } from './bluu/subscribe-form-open/subscribe-form-open.component';
import { RegisterUserComponent } from './bluu/register-user/register-user.component';
import { RegisterCoachComponent } from './bluu/register-coach/register-coach.component';
import { CarouselComponent } from './bluu/carousel/carousel.component';
import { CategoriesComponent } from './bluu/categories/categories.component';
import { AdsComponent } from './bluu/ads/ads.component';
import { CategoriesPickerComponent } from './bluu/categories-picker/categories-picker.component';
import { SchedulesTabsComponent } from './bluu/schedules-tabs/schedules-tabs.component';
import { CategoryInfoComponent } from './bluu/category-info/category-info.component';
import { ModalPayPickComponent } from './bluu/modal-pay-pick/modal-pay-pick.component';
import { ModalPayCompletedComponent } from './bluu/modal-pay-completed/modal-pay-completed.component';
// import { NgImageSliderModule } from 'ng-image-slider';
import { ViewAComponent } from './bluu/views/view-a/view-a.component';
import { ViewBComponent } from './bluu/views/view-b/view-b.component';
import { ViewCComponent } from './bluu/views/view-c/view-c.component';
import { ViewDComponent } from './bluu/views/view-d/view-d.component';
import { ViewEComponent } from './bluu/views/view-e/view-e.component';
import { RegistrationBannerComponent } from './bluu/registration-banner/registration-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    HeaderV2Component,
    SubscribeFormComponent,
    SubscribeFormOpenComponent,
    RegisterUserComponent,
    RegisterCoachComponent,
    CarouselComponent,
    CategoriesComponent,
    AdsComponent,
    CategoriesPickerComponent,
    SchedulesTabsComponent,
    CategoryInfoComponent,
    ModalPayPickComponent,
    ModalPayCompletedComponent,
    ViewAComponent,
    ViewBComponent,
    ViewCComponent,
    ViewDComponent,
    ViewEComponent,
    RegistrationBannerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    // NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
