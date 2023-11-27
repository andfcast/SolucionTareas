import { Component } from '@angular/core';
import { UsuarioAutenticado } from '../../../classes/usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  usuario:UsuarioAutenticado = new UsuarioAutenticado();
  constructor(private router: Router){

  }
  ngOnInit(){
    this.usuario = JSON.parse(localStorage.getItem('userInfo')!);
  }

  Salir(){
    localStorage.clear();
    Swal.fire({
      title:'Logout',
      text:'Ha salido del sistema',
      icon:'info',
      showConfirmButton:false,
      timer:2000
    });
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 1500);
    
  }
  Volver(){
    this.router.navigateByUrl('/dashboard');
  }
}
