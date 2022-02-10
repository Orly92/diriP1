import { Injectable } from '@angular/core';
import {WineModel} from "../../model/wine.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WinesService {

  protected winesUrl:string = "http://localhost:3000/vinos";
  constructor(protected http:HttpClient) {
  }

  getWines(){
    return this.http.get(this.winesUrl);
  }

  searchWines(name:string){
    return this.http.get(this.winesUrl + '?nombre_like=' + name.toUpperCase());
  }

  getWine(id:number){
    return this.http.get(this.winesUrl + '/' + id);
  }
}
