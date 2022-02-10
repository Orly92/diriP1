import { Component, OnInit } from '@angular/core';
import {WineModel} from "../shared/model/wine.model";
import {WinesService} from "../shared/services/wines-services/wines.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {

  public wine:WineModel;
  public detailTitle: string;

  constructor(protected winesService:WinesService,protected router:ActivatedRoute,protected location:Location) {
    this.detailTitle = "";
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
    this.router.params.subscribe(params=>{
      this.winesService.getWine(params["wineId"]).subscribe(resp=>{
        this.wine = <WineModel>resp;
      },err=>{

      });
    })
  }

  redirectToBack() {
    this.location.back();
  }
}
