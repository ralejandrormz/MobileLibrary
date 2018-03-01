import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the SupervisorUsuariosConfirmarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supervisor-usuarios-confirmar',
  templateUrl: 'supervisor-usuarios-confirmar.html',
})
export class SupervisorUsuariosConfirmarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorUsuariosConfirmarPage');
  }

  openMenu() {
    this.menu.enable(true, 'supervisor');
     this.menu.open();
     this.menu.toggle();
  }

     usuarios(){
    this.navCtrl.setRoot('SupervisorUsuariosPage');
  }

}
