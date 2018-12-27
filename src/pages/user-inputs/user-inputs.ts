import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectChefPage } from '../select-chef/select-chef';





@IonicPage()
@Component({
  selector: 'page-user-inputs',
  templateUrl: 'user-inputs.html',
})
export class UserInputsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInputsPage');
  }

  searchNearbyChefs() {
    //some service call code
    this.navCtrl.push(SelectChefPage);
  }

  detail(event) {
    console.log(event);
    console.log(event.place_id);
  }
}




