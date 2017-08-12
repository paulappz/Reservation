import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

 listdata:any;
reservationdata:any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.listdata = params.get('listdata')
    this.reservationdata = params.get('reservationdata')

  }

}
