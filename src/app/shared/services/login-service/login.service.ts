import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  protected userUrl:string = "http://localhost:3000/usuarios";
  public isLogged: boolean = false;
  public userName: string = "";
  constructor(protected http:HttpClient) {
  }

  getUser(form:any){
    return this.http.get(this.userUrl + `?usuario=${form.usuario}&password=${form.password}`);
  }

  login(userName:string){
    this.isLogged = true;
    this.userName = userName;
  }

  register(form:any){
    return this.http.post(this.userUrl,form);
  }
}
