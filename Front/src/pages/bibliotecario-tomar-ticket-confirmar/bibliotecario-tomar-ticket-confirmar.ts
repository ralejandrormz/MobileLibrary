import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the BibliotecarioTomarTicketConfirmarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bibliotecario-tomar-ticket-confirmar',
  templateUrl: 'bibliotecario-tomar-ticket-confirmar.html',
})
export class BibliotecarioTomarTicketConfirmarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecarioTomarTicketConfirmarPage');
  }

  openMenu() {
    this.menu.enable(true, 'bibliotecario');
     this.menu.open();
     this.menu.toggle();
  }  

  GoTomar(){
    this.navCtrl.setRoot('BibliotecarioTomadosPage');
  }

}
