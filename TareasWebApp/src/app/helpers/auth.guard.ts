import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }
  canActivate() {
    
    return this.CheckAuth();
  }

  canActivateChild() {
    
    return this.CheckAuth();
  }
  
  private CheckAuth():boolean{
    
    const token = localStorage.getItem("authToken");
        
    if (token){
        return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}