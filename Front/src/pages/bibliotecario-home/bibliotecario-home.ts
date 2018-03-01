import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the BibliotecarioHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bibliotecario-home',
  templateUrl: 'bibliotecario-home.html',
})
export class BibliotecarioHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecarioHomePage');
  }


  openMenu() {
    this.menu.enable(true, 'bibliotecario');
     this.menu.open();
     this.menu.toggle();
  }  
  GoProceso(){
    this.navCtrl.setRoot('BibliotecarioTomadosPage');
  }  

}
