import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserCreds} from '../../module/interface/reservation';
import { ReservationsProvider } from '../../providers/reservations/reservations';
import { Injectable } from '@angular/core';
import { Http, Headers, } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  reservation:  UserCreds = {
          locationCity: '',
          clientName : '',
          phoneNumber: '',
          clientEmail: '',
          departure: '',
          destination: '',
          pickUpDate:'',
          pickUpTime:'',
          noOfDays:'',
          vehicleGroup:'' } ;
submitted = false;

result:any;
  constructor(public navCtrl: NavController, public reservationsservice: ReservationsProvider, public http: Http) {

}


 ionViewDidLoad() {


/*   let reservation = {
nonCreditClientName :'Ayo',
emailAddress : "bjmarcson@yahoo.com",
phoneNumber : 08068492563,
office :'Surulere',
departure:'Akure',
destination:'Lagos',
pickUpDate:'12:00',
noOfDays: 5,
id:0,
city:'Lagos'
   }
let headers = new Headers();
 headers.append('Content-Type', 'application/json');
        this.http.post("http://test.fleet.sysservesolutions.com/reservation/SubmitTestReservation.do?", JSON.stringify(reservation),
        {headers: headers}).map(res => res.json()).subscribe(data => {
          console.log(data);
        },error => {
        console.log(error);// Error getting the data
      });
  */

    }


/*
ngOnInit(){
  console.log('OnInit Ran!');
  this.getPosts(this.location_city,
 this.Client_Name ,
 this.Phone_number,
  this.Client_email,
  this.departure ,
  this.destination ,
  this.pickUpDate,
  this.noOfDays,
  this.vehicleGroup);
}
 */

 getPosts(form: NgForm){
   this.submitted = true;

   if (form.valid) {
     console.log(this.reservation.clientName);
     console.log(this.reservation.clientEmail);
     console.log(this.reservation.phoneNumber);
     console.log(this.reservation.locationCity);
     console.log(this.reservation.destination);
     console.log(this.reservation.departure);
     console.log(this.reservation.vehicleGroup);
     console.log(this.reservation.pickUpDate+ 'T'+ this.reservation.pickUpTime);
     console.log(this.reservation.noOfDays);
   }

/*   this.reservationsservice.getPosts(location_city, Client_Name,Phone_number, Client_email, departure, destination,
  pickUpDate,noOfDays, vehicleGroup).subscribe(response => {
console.log(response);
this.result=response.data

  }); */
}



}
