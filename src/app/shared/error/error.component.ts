import {Component, Input, OnInit} from '@angular/core';
import {ErrorModel} from "../model/error.model";

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input()
  public errors:ErrorModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
