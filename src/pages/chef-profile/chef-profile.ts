import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/observable';
import { BookingDetailsPage } from '../booking-details/booking-details';

/**
 * Generated class for the ChefProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chef-profile',
  templateUrl: 'chef-profile.html',
})
export class ChefProfilePage {


  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
      this.getChefProfile(navParams.get('chefId'));
    console.log(navParams.get('chefId'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChefProfilePage');
  }

  getChefProfile(id: string){
    console.log('inside getChefProfile');
    //let url='https://jsonplaceholder.typicode.com/photos';
    let url='./assets/chefProfiles.json';    
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items=result;
      //console.log(result);
    }); 
  }
  navigateToBookingPage(){
    console.log('hi 3');
    this.navCtrl.push(BookingDetailsPage);
  }
  navigateToRoot(){
    console.log('Navigating to Inputs Page')
    this.navCtrl.popToRoot();
  }

}
