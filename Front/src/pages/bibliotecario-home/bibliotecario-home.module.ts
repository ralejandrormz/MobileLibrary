import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BibliotecarioHomePage } from './bibliotecario-home';

@NgModule({
  declarations: [
    BibliotecarioHomePage,
  ],
  imports: [
    IonicPageModule.forChild(BibliotecarioHomePage),
  ],
})
export class BibliotecarioHomePageModule {}
