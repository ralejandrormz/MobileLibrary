import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the UniversitarioProcesoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-universitario-proceso',
  templateUrl: 'universitario-proceso.html',
})
export class UniversitarioProcesoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniversitarioProcesoPage');
  }

  openMenu() {
    this.menu.enable(true, 'universitario');
     this.menu.open();
     this.menu.toggle();
  }



  GoProcesoBit(){
    this.navCtrl.setRoot('UniversitarioProcesoBitacoraPage');
  }  

}
