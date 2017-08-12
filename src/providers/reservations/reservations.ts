import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ReservationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReservationsProvider {

  http:any;
  baseUrl:String;
  constructor(public httpp: Http) {
    this.http = httpp;
        this.baseUrl = 'http://test.fleet.sysservesolutions.com/reservation/SubmitTestReservation.do?';
        console.log('SysServe Service initialized');
    console.log('Hello ReservationsProvider Provider');
  }

getPosts(location_city, Client_Name,Phone_number, Client_email, departure, destination,pickUpDate,
  pickUpTime,noOfDays, vehicleGroup) {
    console.log('Reservation Service started');
    let Time = pickUpDate+ 'T'+ pickUpTime;
    console.log(Time);
    return this.http.get(this.baseUrl+
      'location.city='+ location_city +
      '&reservation.nonCreditClientName='+Client_Name+
      '&reservation.phoneNumber='+ Phone_number +
      '&reservation.emailAddress='+Client_email+
    'com&reservationTrip.departure='+departure+
    '&reservationTrip.destination='+destination+
    '&reservationTrip.pickUpDate='+Time+
    '&reservationTrip.noOfDays='+noOfDays+
    '&vehicleGroup.id='+vehicleGroup)
    .map(res => res.json());

}


}


