import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectChefPage } from '../select-chef/select-chef';

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
}
