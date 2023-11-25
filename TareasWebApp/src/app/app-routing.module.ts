import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },  
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'registrar',
    component: RegisterComponent,
    data: {
      title: 'Recuperar Clave'
    }
  },
  { path: 'dashboard', 
    loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) 
  },
  {
    path: '**',
    component: NotfoundComponent,
    data: {
      title: 'Página no encontrada'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
