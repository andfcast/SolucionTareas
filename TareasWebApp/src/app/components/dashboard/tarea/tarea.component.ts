import { Component } from '@angular/core';
import { TareaService } from '../../../services/tarea.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../../../classes/tarea';
import Swal from 'sweetalert2';
import { Utilities } from '../../../shared/utilities';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  lstTareas:Tarea[] = [];
  columnas:string[] = ['Id','Nombre','Descripcion','Inicio','Fin','Horas','Estado','Acciones'];
  dataSource: any;
  constructor(private service: TareaService,     
    private route: ActivatedRoute,
    private router: Router){      
  }
  ngOnInit(){    
    this.ListarTareas();    
  }

  private ListarTareas(){
    const userId = JSON.parse(localStorage.getItem('userInfo')!).id;
    this.service.Listar(userId).subscribe((res:any) =>{
      if(res.data != null){    
        this.lstTareas = [];    
        res.data.forEach((element:Tarea) => {              
          this.lstTareas.push(element);
        });        
      }      
      this.dataSource = new MatTableDataSource<Tarea>(this.lstTareas);
    });
  }

  Crear(){
    this.router.navigateByUrl('dashboard/nuevaTarea');
  }
  Actualizar(id:number){
    this.router.navigateByUrl('dashboard/editarTarea/' + id.toString())
  }
  Completar(row:Tarea){  
    Swal.fire({
      title: '¿Está seguro de completar la tarea?',
        confirmButtonText: 'Confirmar',
        confirmButtonColor: 'green',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: 'red'
        }).then((result) => {
          if (result.value) {
            const request = row;
            request.esCompletada = !request.esCompletada;
            this.service.Actualizar(request).subscribe((data: any) => {
              if (data.exitoso) {
                Swal.fire({
                  confirmButtonColor: '#a01533',
                  showConfirmButton: false,
                  timer:2000,
                  text:'Tarea completada correctamente.',
                  icon:'success'
                });
                // setTimeout(() => {                              
                  this.ListarTareas();
                // }, 1500);
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
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              title:'Cancelado',
              text:'Cambio cancelado',
              icon:'info',
              showConfirmButton:false,
              timer:2000
            });
          }
        });  
  }
  Borrar(id:number){
    Swal.fire({
      title: '¿Está seguro de borrar el registro?',
      text: 'Este proceso es irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.service.Borrar(id).subscribe((data: any) => {
          if (data.exitoso) {
            Swal.fire({
              confirmButtonColor: '#a01533',
              showConfirmButton: false,
              timer:2000,
              text:'El registro ha sido borrado correctamente.',
              icon:'success'
            });
            setTimeout(() => {
              this.lstTareas = this.lstTareas.filter(x => x.id !== id);
              this.dataSource = new MatTableDataSource<Tarea>(this.lstTareas);              
            }, 1500);
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title:'Cancelado',
          text:'Borrado cancelado',
          icon:'info',
          showConfirmButton:false,
          timer:2000
        });
      }
    });
  }
}
