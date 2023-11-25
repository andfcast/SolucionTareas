import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin: FormGroup;

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


  }

  Login(){

  }

}
