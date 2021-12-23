import { Component, OnInit } from '@angular/core';
import {WinesService} from "../shared/wines-services/wines.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {

  public wines:any[];
  constructor(protected winesService:WinesService,protected router:ActivatedRoute) {
    this.wines = [];

    router.params.subscribe(params=>{
      if(params["name"] !== undefined){
        this.wines = this.winesService.searchWines(params["name"]);
      }else{
        this.wines = this.winesService.getWines();
      }
    })
  }

  ngOnInit(): void {
  }

}
