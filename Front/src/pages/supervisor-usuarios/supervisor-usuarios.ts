import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the SupervisorUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supervisor-usuarios',
  templateUrl: 'supervisor-usuarios.html',
})
export class SupervisorUsuariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorUsuariosPage');
  }
  
  openMenu() {
    this.menu.enable(true, 'supervisor');
     this.menu.open();
     this.menu.toggle();
  }


   usuarios(){
    this.navCtrl.setRoot('SupervisorUsuariosConfirmarPage');
  }
  reasignar(){
    this.navCtrl.setRoot('SupervisorReasignarConfirmarPage');

  }

}
