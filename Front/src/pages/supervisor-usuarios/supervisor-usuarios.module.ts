import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupervisorUsuariosPage } from './supervisor-usuarios';

@NgModule({
  declarations: [
    SupervisorUsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(SupervisorUsuariosPage),
  ],
})
export class SupervisorUsuariosPageModule {}
