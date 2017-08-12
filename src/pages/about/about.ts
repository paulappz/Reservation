import { Component ,NgZone} from '@angular/core';
import { NavController , ToastController,  Refresher ,App, LoadingController} from 'ionic-angular';
import { UserCreds} from '../../module/interface/reservation';
import { DataProvider } from '../../providers/data/data';
import { ContactPage } from '../../pages/contact/contact';
import { ReservationsProvider } from '../../providers/reservations/reservations';
import { Injectable } from '@angular/core';
import { Http, Headers, } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data : any;
segment = 'submit';

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

  constructor(public navCtrl: NavController,public zone: NgZone, public app: App, public loadingctrl:LoadingController,  public toast: ToastController,public dataservice: DataProvider, public reservationsservice: ReservationsProvider, public http: Http) {

  }


  ionViewDidLoad() {
     this.app.setTitle('Reservation');
    this.updateReservationList();
  }




updateReservationList(){
    this.dataservice.load().then((res: any) => {
     this.zone.run(() => {
        this.data = res;
      })
   console.log(this.data);
   });

}


ViewReservation(listdata: any, reservationdata: any){
this.navCtrl.push(ContactPage,{
  listdata:listdata,
reservationdata:reservationdata
});

}

 getPosts(form: NgForm){
    var toaster = this.toast.create({
      duration: 5000,
      position: 'button'
    });
   this.submitted = true;

   if (form.valid) {
      let loader = this.loadingctrl.create({
        content: 'Please wait'
      });
      loader.present();
  this.reservationsservice.getPosts(this.reservation.locationCity,this.reservation.clientName,this.reservation.phoneNumber,
  this.reservation.clientEmail, this.reservation.departure,this.reservation.destination,
  this.reservation.pickUpDate,this.reservation.pickUpTime,this.reservation.noOfDays, this.reservation.vehicleGroup)
  .subscribe(response => {
 loader.dismiss();

 if (response.response == 'success') {
   this.ResetReservationForm();
      toaster.setMessage('Reservation Sucessfully Made');
      toaster.present();

    }
else if(response.response == 'fail'){
  toaster.setMessage('Failed!, '+response.actionMessages[0]);
      toaster.present();
}

else{
  this.ResetReservationForm();
 toaster.setMessage('Not Successful, Please contact support');
      toaster.present();
       this.ResetReservationForm();
}
  });
 loader.dismiss();

   }

 }


ResetReservationForm(){
      this.navCtrl.setRoot(AboutPage);
       /* this.reservation.locationCity = '';
  this.reservation.clientName ='';
     this.reservation.phoneNumber='';
     this.reservation.clientEmail='';
     this.reservation.departure= '';
     this.reservation.destination= '';
      this.reservation.pickUpDate='';
      this.reservation.pickUpTime='';
     this.reservation.noOfDays='';
      this.reservation.vehicleGroup=''; */
}


  doRefresh(refresher: Refresher) {

    this.dataservice.load().then((res: any) => {
       this.zone.run(() => {
        this.data = res;
      })

      // simulate a network request that would take longer
      // than just pulling from out local json file
      setTimeout(() => {
        refresher.complete();

        const toast = this.toast.create({
          message: 'Sessions have been updated.',
          duration: 10000
        });
        toast.present();
      }, 10000);
    });
  }
}

