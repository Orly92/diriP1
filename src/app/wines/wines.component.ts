import { Component, OnInit } from '@angular/core';
import {WinesService} from "../shared/services/wines-services/wines.service";
import {ActivatedRoute} from "@angular/router";
import {WineModel} from "../shared/model/wine.model";
import {ErrorModel} from "../shared/model/error.model";
import {ErrorService} from "../shared/services/error-services/error.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {

  public wines:WineModel[] = [];
  public errors:ErrorModel[] = [];

  constructor(protected winesService:WinesService,
              protected router:ActivatedRoute,
              protected errorService:ErrorService,
              protected spinner:NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.spinner.show();

    this.router.params.subscribe(params=>{
      if(params["name"] !== undefined){
        this.winesService.searchWines(params["name"]).subscribe(resp=>{
          this.spinner.hide();
          this.wines = <WineModel[]>resp;
        },err=>{
          this.spinner.hide();
          this.errors = this.errorService.processError(err);
        });
      }else{
        this.winesService.getWines().subscribe(resp=>{
          this.spinner.hide();
          this.wines = <WineModel[]>resp;
        },err=>{
          this.spinner.hide();
          this.errors = this.errorService.processError(err);
        });
      }
    })
  }


}
