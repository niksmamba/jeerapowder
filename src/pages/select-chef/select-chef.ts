import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/observable';
import { ChefProfilePage } from '../chef-profile/chef-profile';


/**
 * Generated class for the SelectChefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-chef',
  templateUrl: 'select-chef.html',
})
export class SelectChefPage {

  public items:any;
  availableChefs: string = "Price";
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,  private modal:ModalController ){
    this.getData();
  }


  sortByPrice(){
    console.log('in Price sort');
    // this.descending = !this.descending;
    // this.order = this.descending ? 1 : -1;
    this.items.sort(
      function(a,b) {
        return (a.bookingCost < b.bookingCost) ? -1 : (a.bookingCost > b.bookingCost) ? 1 : 0 ;});
  }

  sortByAverageRating(){
    console.log('in Average Rating sort')
    this.items.sort(
      function(a,b) {
        return (a.AverageRating > b.AverageRating) ? -1 : (a.AverageRating < b.AverageRating) ? 1 : 0 ;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectChefPage');
  }

  getData(){
    //let url='https://jsonplaceholder.typicode.com/photos';
    let url='./assets/tempData.json';    
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items=result;
      //console.log(result);
    }); 
  }

  openFilterPage(){
    console.log('here');
    const myfilterPage=this.modal.create('FilterPage');
    console.log('here 2');
    myfilterPage.present();

  }

  navigateToChefProfile(id:string){
    this.navCtrl.push(ChefProfilePage,{
      chefId: id
    })
  }

}
