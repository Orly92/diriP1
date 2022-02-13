import { Injectable } from '@angular/core';
import {ErrorModel} from "../../model/error.model";
import {AppToastService} from "../app-toast/app-toast.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(protected appToastService:AppToastService) { }

  public processError(err:any,showToast:boolean = true): ErrorModel[]{
    let message = err.message;
    switch (err.status) {
      case 0:
        message = "La aplicación servidor no está levantada";
        break;
      case 404:
        message = "Recurso o página no encontrada";
        break;
      case 400:
        message = "Request mal enviado al servidor";
        break;
      case 401:
        message = "Token no generado";
        break;
    }
    if(showToast)
      this.appToastService.show('Error!',message,'danger');

    return [{
      message:message
    }];
  }
}
