import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectChefPage } from '../select-chef/select-chef';
import { ChefProfilePage } from '../chef-profile/chef-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ontoggleclick(){

    this.navCtrl.push(SelectChefPage);

  }

  navigateToChefProfile(){
    this.navCtrl.push(ChefProfilePage,{
      val: 'shekhar'
    })
  }
}
