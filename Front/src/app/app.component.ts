import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) Nav
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  GoNuevo(){
    this.Nav.setRoot( 'UniversitarioNuevoTicketPage');
  }
  GoHome(){
    this.Nav.setRoot('UniversitarioHomePage');
  }
  GoProceso(){
    this.Nav.setRoot('UniversitarioProcesoPage');
  }  
  GoHistorial(){
    this.Nav.setRoot('UniversitarioHistorialPage');
  }  
  GoNuevoB(){
    this.Nav.setRoot( 'BibliotecarioTomarTicketPage');
  }
  GoHomeB(){
    this.Nav.setRoot('BibliotecarioHomePage');
  }
  GoProcesoB(){
    this.Nav.setRoot('BibliotecarioTomadosPage');
  }  
  GoHistorialB(){
    this.Nav.setRoot('BibliotecarioHistorialPage');
  } 
  GoReasignar(){
    this.Nav.setRoot('SupervisorReasignarPage');
  } 
  GoUsuarios(){
    this.Nav.setRoot('SupervisorUsuariosPage');
  } 
  GoEstats(){
    this.Nav.setRoot('AdministradorEstadisticasPage');
  } 
  GoLogout(){
    this.Nav.setRoot(MyApp);
  } 
}

