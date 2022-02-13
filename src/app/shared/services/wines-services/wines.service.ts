import { Injectable } from '@angular/core';
import {WineModel} from "../../model/wine.model";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

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
  getLastWine(){
    return this.http.get(this.winesUrl + '?_page=1&_limit=1&_sort=id&_order=desc');
  }
  addWine(form: WineModel){
    return this.http.post(this.winesUrl,form);
  }
}
