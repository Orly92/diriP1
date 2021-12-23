import { Component, OnInit } from '@angular/core';
import {WinesService} from "../shared/wines-services/wines.service";

@Component({
  selector: 'wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {

  public wines:any[];
  constructor(protected winesService:WinesService) {
    this.wines = this.winesService.getWines();
  }

  ngOnInit(): void {
  }

}
