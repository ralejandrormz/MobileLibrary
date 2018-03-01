import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the BibliotecarioHistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bibliotecario-historial',
  templateUrl: 'bibliotecario-historial.html',
})
export class BibliotecarioHistorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecarioHistorialPage');
  }

  openMenu() {
    this.menu.enable(true, 'bibliotecario');
     this.menu.open();
     this.menu.toggle();
  }  

GoBit(){
    this.navCtrl.setRoot('BibliotecarioBitacoraPage');
  } 

}
