import { Component, OnInit } from '@angular/core';
import {WineModel} from "../shared/model/wine.model";
import {WinesService} from "../shared/services/wines-services/wines.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {ErrorModel} from "../shared/model/error.model";
import {ErrorService} from "../shared/services/error-services/error.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {

  public wine:WineModel;
  public detailTitle: string = "";
  public errors: ErrorModel[] = [];

  constructor(protected winesService:WinesService,
              protected router:ActivatedRoute,
              protected location:Location,
              protected errorService:ErrorService,
              protected spinner:NgxSpinnerService) {
    this.wine = {
      precio:0,
      nombre:"",
      uvas:"",
      region:"",
      pais:"",
      imagen:"",
      id:0,
      descripcion:"",
      anyo:0
    }

  }

  ngOnInit(): void {
    this.spinner.show();

    this.router.params.subscribe(params=>{
      this.winesService.getWine(params["wineId"]).subscribe(resp=>{
        this.spinner.hide();
        this.wine = <WineModel>resp;
      },err=>{
        this.spinner.hide();
        this.errors = this.errorService.processError(err);
      });
    })
  }

  redirectToBack() {
    this.location.back();
  }

  handleMissingImage($event: any) {
    ($event.target as HTMLImageElement).src = '../../assets/img/noimage.png';
  }
}
