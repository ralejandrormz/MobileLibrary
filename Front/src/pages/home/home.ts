import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Headers, RequestOptions } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import {ActionSheetController} from 'ionic-angular';
import {FormBuilder, FormGroup,FormControl, Validators, AbstractControl} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	splash = true;


  constructor(public navCtrl: NavController, public http:Http) {

  }

  ionViewDidLoad() {
  	setTimeout(() =>{
  		this.splash = false;
  	}, 4000);
  }


    login() {
      let body = {
        username : 'u',
        password : 'u',
        email : 'a@ucol.mx',
        type : 'user',
        building : 'Facultad de Telemática'
      }
      let headers = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({headers:headers});
      this.http.post('http://127.0.0.1:3000/users', JSON.stringify(body), options)
      .map(res=> res.json())
      .subscribe(data=>{console.log(data);})


      //this.navCtrl.setRoot('UniversitarioHomePage');
    }
    login2() {
      this.navCtrl.setRoot('BibliotecarioHomePage');
    }
    login3() {
      this.navCtrl.setRoot('SupervisorReasignarPage');
    }
    login4() {
      this.navCtrl.setRoot('AdministradorEstadisticasPage');
    }

  	registro(){
  		this.navCtrl.push('RegistroPage');
  	}
}
