import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the BibliotecarioTomadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bibliotecario-tomados',
  templateUrl: 'bibliotecario-tomados.html',
})
export class BibliotecarioTomadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecarioTomadosPage');
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
