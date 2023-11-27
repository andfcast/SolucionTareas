import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../../classes/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin: FormGroup;
  login: Login = new Login();
  constructor(private fb: FormBuilder,
    private service: AuthService,    
    private route: ActivatedRoute,
    private router: Router){
      this.formLogin = this.fb.group({      
        usuario:['',[Validators.required, Validators.email]],      
        pass:['', Validators.required],
      });
  }

  ngOnInit(){
    localStorage.clear();
  }

  Login(){
    const valoresForm = this.formLogin.value;   
    this.login.usuario = valoresForm.usuario;
    this.login.password = valoresForm.pass;
    this.service.Autenticar(this.login).subscribe((res:any) =>{
      if(res.exitoso){
        debugger;
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        const token = res.data.token;
        localStorage.setItem('authToken', token);
        setTimeout(() => {           
          this.router.navigateByUrl('dashboard');    
        },1500); 
      }   
      else{
        Swal.fire({
        title: '¡Error!',
        text: res.mensaje,
        icon: 'error',
        timer:2000,
        confirmButtonColor: '#a01533',
        confirmButtonText: 'Aceptar'
      });
      }         
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

}
