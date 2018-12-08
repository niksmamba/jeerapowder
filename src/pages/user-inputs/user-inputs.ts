import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectChefPage } from '../select-chef/select-chef';

/**
 * Generated class for the UserInputsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  searchNearbyChefs(){
    //some service call code
    this.navCtrl.push(SelectChefPage);
  }

}
