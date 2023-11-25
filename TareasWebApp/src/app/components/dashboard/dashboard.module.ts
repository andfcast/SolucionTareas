import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { ActualizarTareaComponent } from './actualizar-tarea/actualizar-tarea.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { TareaComponent } from './tarea/tarea.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
  declarations: [     
        
    DashboardComponent,
    CrearTareaComponent,
    ActualizarTareaComponent,
    UsuarioComponent,
    TareaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],  
})
export class DashboardModule { }
