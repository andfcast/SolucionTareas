import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Tarea } from '../../../classes/tarea';
import { TareaService } from '../../../services/tarea.service';
import { Utilities } from '../../../shared/utilities';

@Component({
  selector: 'app-actualizar-tarea',
  templateUrl: './actualizar-tarea.component.html',
  styleUrl: './actualizar-tarea.component.css'
})
export class ActualizarTareaComponent {
  formTarea: FormGroup;
  idTarea!:number;
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
  ngOnInit(){
    this.idTarea = Number(this.router.url.split('/').pop());
    this.ObtenerInfo();
  }
  ObtenerInfo(){
    this.service.ObtenerInfo(this.idTarea).subscribe((res:any) =>{
      if(res.data != null){        
        this.tarea = res.data;        
        this.formTarea.setValue({
          nombre:this.tarea.nombre,
          descripcion:this.tarea.descripcion,
          fechaInicio:this.tarea.fechaInicio,
          fechaFin:this.tarea.fechaFin,        
          horas:this.tarea.horas      
        });
      }
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
    this.service.Actualizar(this.tarea).subscribe((data:any) =>{
      if(data.exitoso){
        Swal.fire({
        text: 'Actualización exitosa',
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
        text: 'Actualización no realizada',
        icon: 'error',
        timer:2000,
        confirmButtonColor: '#a01533',
        confirmButtonText: 'Aceptar'
      });
    });
  }
  Volver(){
    this.router.navigateByUrl(Utilities.CambioUrl(this.router.url,1) +'/tareas');
  }
}
