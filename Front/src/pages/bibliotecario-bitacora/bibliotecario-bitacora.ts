import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the BibliotecarioBitacoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bibliotecario-bitacora',
  templateUrl: 'bibliotecario-bitacora.html',
})
export class BibliotecarioBitacoraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecarioBitacoraPage');
  }

  openMenu() {
    this.menu.enable(true, 'bibliotecario');
     this.menu.open();
     this.menu.toggle();
  }  
  
  responder(){
    this.navCtrl.setRoot('BibliotecarioResponderPage');
  }
  cerrar(){
    this.navCtrl.setRoot('BibliotecarioCerrarPage');
  }
  reasignar(){
    this.navCtrl.setRoot('BibliotecarioReasignarPage');
  }       

}
