import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the UniversitarioBitacoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-universitario-bitacora',
  templateUrl: 'universitario-bitacora.html',
})
export class UniversitarioBitacoraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniversitarioBitacoraPage');
  }

  openMenu() {
    this.menu.enable(true, 'universitario');
     this.menu.open();
     this.menu.toggle();
  }
  
}
