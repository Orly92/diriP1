import { Component, OnInit } from '@angular/core';
import {AppToastService} from "../services/app-toast/app-toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './app-toast.component.html',
  styleUrls: ['./app-toast.component.scss']
})
export class AppToastComponent implements OnInit {

  constructor(public toastService:AppToastService) {
    console.log('entro',toastService.toasts);
  }

  ngOnInit(): void {
  }

}
