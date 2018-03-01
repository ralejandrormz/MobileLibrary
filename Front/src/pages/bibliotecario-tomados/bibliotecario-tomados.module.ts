import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BibliotecarioTomadosPage } from './bibliotecario-tomados';

@NgModule({
  declarations: [
    BibliotecarioTomadosPage,
  ],
  imports: [
    IonicPageModule.forChild(BibliotecarioTomadosPage),
  ],
})
export class BibliotecarioTomadosPageModule {}
