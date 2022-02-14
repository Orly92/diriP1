import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../shared/services/login-service/login.service";
import {AppToastService} from "../shared/services/app-toast/app-toast.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ErrorService} from "../shared/services/error-services/error.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
      this.loginService.getUsers().subscribe((resp:any[])=>{
        const lastId = resp.reduce((accumulateValue,currentValue)=>{
          return Math.max(accumulateValue?.id ?? 0,currentValue?.id ?? 0);
        });
        this.form.value.id = lastId + 1;
        // @ts-ignore
        this.loginService.register(this.form.value).subscribe((resp:any) =>{
          this.spinner.hide();
          this.toastService.show('Usuario registrado!','Se ha registrado en nuestro sistema','success');
          this.loginService.login(resp.usuario);
          this.router.navigate(['inicio']);
        },err=>{
          this.errorService.processError(err);
          this.spinner.hide();
        });
      },err=>{
        this.errorService.processError(err);
        this.spinner.hide();
      });

    }
  }
}

