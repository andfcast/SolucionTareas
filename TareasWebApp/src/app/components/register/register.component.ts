import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../classes/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formRegistro: FormGroup;  
  usuario:Usuario = new Usuario();

  constructor(private fb: FormBuilder,
    private service: UsuarioService,    
    private route: ActivatedRoute,
    private router: Router){
      this.formRegistro = this.fb.group({      
        nombre:['', Validators.required],
        usuario:['',[Validators.required, Validators.email]],      
        pass:['', Validators.required],
        confirmPass:['', Validators.required],
      }
      ,{
        validators:this.CoincidePassword('pass','confirmPass')
      } );
  }

  ngOnInit(){
  }

  CoincidePassword(controlPass:any, controlConfirma:any){
    return (formGroup: FormGroup) => {
      const passControl = formGroup.controls[controlPass];
      const confirmaControl = formGroup.controls[controlConfirma];
      if(confirmaControl.errors && !confirmaControl.errors['confirmacion']){
        return;
      }
      if(passControl.value !== confirmaControl.value){
        confirmaControl.setErrors({ confirmacion: true });
      }
      else{
        confirmaControl.setErrors(null);
      }
    }
  }

  Registrar(){
    const valoresForm = this.formRegistro.value;      
    this.usuario.nombre = valoresForm.nombre;
    this.usuario.email = valoresForm.usuario;
    this.usuario.pass = valoresForm.pass;    
    debugger;    
    this.service.Crear(this.usuario).subscribe((data:any) =>{
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
        this.router.navigateByUrl('/');    
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
    this.router.navigateByUrl('Login');
  }
}
