import { Component, OnInit } from '@angular/core';
import {LoginService} from "../shared/services/login-service/login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AppToastService} from "../shared/services/app-toast/app-toast.service";
import {NgxSpinnerService} from "ngx-spinner";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../shared/services/error-services/error.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public formTryToSubmited: boolean = false;

  constructor(protected loginService:LoginService,
              protected formBuilder:FormBuilder,
              protected toastService:AppToastService,
              protected spinner:NgxSpinnerService,
              protected errorService:ErrorService,
              protected router: Router) {

    this.form = this.formBuilder.group({
      'usuario':new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required])
    });

  }

  ngOnInit(): void {
  }

  get usuario(){
    return this.form?.get("usuario");
  }
  get password(){
    return this.form?.get("password");
  }

  onSubmit() {
    this.formTryToSubmited = true;
    if(!this.form.invalid){
      this.spinner.show();

      // @ts-ignore
      this.loginService.getUser(this.form.value).subscribe((resp:any[]) =>{
        if(resp.length > 0){
          this.toastService.show('Usuario logueado!','Se ha logueado en nuestro sistema','success');
          this.loginService.login(resp[0].usuario);
          this.router.navigate(['inicio']);
        }
        else{
          this.toastService.show('Credenciales Incorrectas!',
            'No existe ningún usuario con esas credenciales','danger');
        }
      },err=>{
        this.errorService.processError(err);
      });
    }
  }
}
