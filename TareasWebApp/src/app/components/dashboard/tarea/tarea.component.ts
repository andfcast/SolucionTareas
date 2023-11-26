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
    this.service.Listar(1).subscribe((res:any) =>{
      if(res.data != null){    
        this.lstTareas = [];    
        res.data.forEach((element:any) => {          
          this.lstTareas.push(element);
        });        
      }      
      this.dataSource = new MatTableDataSource<Tarea>(this.lstTareas);
    });
  }

  Crear(){
    this.router.navigateByUrl(Utilities.CambioUrl(this.router.url,1) +'/nuevaTarea');
  }
  Actualizar(id:number){
    this.router.navigateByUrl(Utilities.CambioUrl(this.router.url,1) +'/ActualizarTarea/' + id.toString())
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
