import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/observable'


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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,  private modal:ModalController ){
    this.getData();
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

}
