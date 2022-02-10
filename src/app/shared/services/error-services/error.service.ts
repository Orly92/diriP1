import { Injectable } from '@angular/core';
import {ErrorModel} from "../../model/error.model";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public processError(err:any): ErrorModel[]{
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
    return [{
      message:message
    }];
  }
}
