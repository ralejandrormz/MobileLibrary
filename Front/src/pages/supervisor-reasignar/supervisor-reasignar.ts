import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the SupervisorReasignarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supervisor-reasignar',
  templateUrl: 'supervisor-reasignar.html',
})
export class SupervisorReasignarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorReasignarPage');
  }

  openMenu() {
    this.menu.enable(true, 'supervisor');
     this.menu.open();
     this.menu.toggle();
  }

  reasignar(){
    this.navCtrl.setRoot('SupervisorTicketsReasignarPage');
  }

  
}
