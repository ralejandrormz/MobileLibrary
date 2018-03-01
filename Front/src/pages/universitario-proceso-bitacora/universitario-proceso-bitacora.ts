import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the UniversitarioProcesoBitacoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-universitario-proceso-bitacora',
  templateUrl: 'universitario-proceso-bitacora.html',
})
export class UniversitarioProcesoBitacoraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniversitarioProcesoBitacoraPage');
  }

  openMenu() {
    this.menu.enable(true, 'universitario');
     this.menu.open();
     this.menu.toggle();
  }


   GoResponder(){
    this.navCtrl.setRoot('UniversitarioResponderPage');
  }  
   GoCerrar(){
    this.navCtrl.setRoot('UniversitarioCerrarPage');
  }  


  
}
