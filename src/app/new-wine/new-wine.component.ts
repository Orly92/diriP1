import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WinesService} from "../shared/services/wines-services/wines.service";
import {DataService} from "../shared/services/data-service/data.service";

@Component({
  selector: 'app-new-wine',
  templateUrl: './new-wine.component.html',
  styleUrls: ['./new-wine.component.scss']
})
export class NewWineComponent implements OnInit {

  public form: FormGroup;
  public formTryToSubmited: boolean = false;
  public countries: string[] = [];

  constructor(protected formBuilder:FormBuilder,
              protected wineService:WinesService,
              protected dataService:DataService) {

    this.countries = dataService.getCountries();

    this.form =this.formBuilder.group({
      'nombre': new FormControl('',[Validators.required,
                  Validators.minLength(3),Validators.maxLength(60)]),
      'uvas': new FormControl('',[Validators.required]),
      'pais': new FormControl('',null),
      'descripcion': new FormControl('',null),
      'region': new FormControl('',null),
      'imagen': new FormControl('',null),
      'anyo': new FormControl('',[Validators.required,
                    Validators.min(1900),Validators.max(new Date().getFullYear())]),
      'precio': new FormControl(0,[Validators.required,Validators.min(0)])
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.formTryToSubmited = true;
    if(!this.form.invalid){
      this.wineService.getLastWine().subscribe(resp=>{
        // @ts-ignore
        this.form.value.id = resp[0].id + 1;

        this.wineService.addWine(this.form.value).subscribe((resp: any)=>{
          alert("bien");
        },(err:any)=>{
          alert("error 2");
        })
      },err=>{
        alert("error 1");
      });
    }
  }

  get nombre(){
    return this.form?.get("nombre");
  }
  get uvas(){
    return this.form?.get("uvas");
  }
  get anyo(){
    return this.form?.get("anyo");
  }
  get precio(){
    return this.form?.get("precio");
  }
}
