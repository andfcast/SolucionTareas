import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Tarea } from '../../../classes/tarea';
import { TareaService } from '../../../services/tarea.service';
import { Utilities } from '../../../shared/utilities';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})
export class CrearTareaComponent {
  formTarea: FormGroup;
  tarea:Tarea = new Tarea();

  constructor(private fb: FormBuilder,
    private service: TareaService,    
    private route: ActivatedRoute,
    private router: Router){
      this.formTarea = this.fb.group({              
        nombre:['', Validators.required],
        descripcion:['', Validators.required],
        fechaInicio:['', Validators.required],
        fechaFin:['', Validators.required],        
        horas:['', Validators.required, Validators.max(1000), Validators.min(1)]        
      });      
  }
  Guardar(){
    const valoresForm = this.formTarea.value;      
    const infoUsuario = localStorage.getItem('userInfo');
    this.tarea.nombre = valoresForm.nombre;
    this.tarea.descripcion = valoresForm.descripcion;
    this.tarea.fechaFin = valoresForm.fechaFin;
    this.tarea.fechaInicio = valoresForm.fechaInicio;   
    this.tarea.horas = valoresForm.horas;  
    this.tarea.idUsuario = JSON.parse(infoUsuario!).id     
    this.tarea.fechaCreacion = new Date();
    this.service.Crear(this.tarea).subscribe((data:any) =>{
      if(data.exitoso){
        Swal.fire({
        text: 'Creación exitosa',
        icon: 'success',
        timer:2000,
        confirmButtonColor: '#a01533',
        confirmButtonText: 'Aceptar'
      }); 
      }   
      else{
        Swal.fire({
        title: '¡Error!',
        text: data.mensaje,
        icon: 'error',
        timer:2000,
        confirmButtonColor: '#a01533',
        confirmButtonText: 'Aceptar'
      });
      }   
      setTimeout(() => {           
        this.router.navigateByUrl('/dashboard');    
      },1500);
    },
    error =>{
      Swal.fire({
        title: '¡Error!',
        text: 'Creación no realizada',
        icon: 'error',
        timer:2000,
        confirmButtonColor: '#a01533',
        confirmButtonText: 'Aceptar'
      });
    });
  }
  Volver(){
    this.router.navigateByUrl(Utilities.CambioUrl(this.router.url,2) +'/tareas');
  }
}
