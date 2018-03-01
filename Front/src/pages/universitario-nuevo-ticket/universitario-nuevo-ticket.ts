import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the UniversitarioNuevoTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-universitario-nuevo-ticket',
  templateUrl: 'universitario-nuevo-ticket.html',
})
export class UniversitarioNuevoTicketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniversitarioNuevoTicketPage');
  }

  openMenu() {
    this.menu.enable(true, 'universitario');
     this.menu.open();
     this.menu.toggle();
  }

     GoProceso(){
    this.navCtrl.setRoot('UniversitarioProcesoPage');
  }  
}
