import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formRegistro: FormGroup;

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

  }
}
