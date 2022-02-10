import { Component, OnInit } from '@angular/core';
import {WinesService} from "../shared/wines-services/wines.service";
import {ActivatedRoute} from "@angular/router";
import {WineModel} from "../shared/model/wine.model";

@Component({
  selector: 'wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {

  public wines:WineModel[];
  constructor(protected winesService:WinesService,protected router:ActivatedRoute) {
    this.wines = [];

    router.params.subscribe(params=>{
      if(params["name"] !== undefined){
        this.winesService.searchWines(params["name"]).subscribe(resp=>{
          this.wines = <WineModel[]>resp;
        },err=>{

        });
      }else{
       this.winesService.getWines().subscribe(resp=>{
         this.wines = <WineModel[]>resp;
        },err=>{

        });
      }
    })
  }

  ngOnInit(): void {
  }

}
