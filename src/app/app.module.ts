import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SelectChefPage } from '../pages/select-chef/select-chef';
import { HttpClientModule } from '@angular/common/http';
import { ChefProfilePage } from '../pages/chef-profile/chef-profile';
import { BookingDetailsPage } from '../pages/booking-details/booking-details';
import { CostBreakupPage } from '../pages/cost-breakup/cost-breakup';
import { ConfirmationPage } from '../pages/confirmation/confirmation';

import { SignupPage } from '../pages/signup/signup';

import { GooglePlus } from '@ionic-native/google-plus';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SelectChefPage,
    ChefProfilePage,
    BookingDetailsPage,
    CostBreakupPage,
    ConfirmationPage,
    SignupPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SelectChefPage,
    ChefProfilePage,
    BookingDetailsPage,
    CostBreakupPage,
    ConfirmationPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
