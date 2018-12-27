import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectChefPage } from '../select-chef/select-chef';
import { UserInputsPage } from '../user-inputs/user-inputs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSignupClick(){
    //Webservice Code which fetches JP uid
    this.navCtrl.setRoot(UserInputsPage);
  }
}
