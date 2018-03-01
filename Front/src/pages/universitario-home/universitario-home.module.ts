import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UniversitarioHomePage } from './universitario-home';

@NgModule({
  declarations: [
    UniversitarioHomePage,
  ],
  imports: [
    IonicPageModule.forChild(UniversitarioHomePage),
  ],
})
export class UniversitarioHomePageModule {}
