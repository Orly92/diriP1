import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppToastService {

  public toasts: any[] = [];

  constructor() { }

  show(header: string, body: string,color:string) {
    this.toasts.push({ header, body, color });
  }

  remove(toast : any) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
