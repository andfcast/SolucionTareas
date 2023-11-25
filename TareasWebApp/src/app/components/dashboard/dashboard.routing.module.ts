import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { ActualizarTareaComponent } from './actualizar-tarea/actualizar-tarea.component';
import { TareaComponent } from './tarea/tarea.component';

export const routes: Routes = [
    {
        path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard Page'
    },
    children: [
      {
        path: '',
        component: TareaComponent,
        data: {
          title: 'Tareas'
        },
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
        data: {
          title: 'Información de Usuario'
        },
     },
     {
      path: 'tareas',
      component: TareaComponent,
        data: {
          title: 'Tareas'
        },
     },
     {
      path: 'crearTarea',
      component: CrearTareaComponent,
      data: {
        title: 'Agregar Nueva Tarea'
      },
     },
     {
      path: 'editarTarea/:id',
      component: ActualizarTareaComponent,
      data: {
        title: 'Configurar Plantillas de Correo'
      },
     }
 ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
export class DashboardRoutingModule { }