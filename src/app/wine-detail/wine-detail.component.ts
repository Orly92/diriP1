import { Component, OnInit } from '@angular/core';
import {WineModel} from "../shared/model/wine.model";
import {WinesService} from "../shared/wines-services/wines.service";
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
    router.params.subscribe(params=>{
      this.wine = <WineModel>this.winesService.getWine(params["wineId"]);
    })
  }

  ngOnInit(): void {
  }

  redirectToBack() {
    this.location.back();
  }
}
