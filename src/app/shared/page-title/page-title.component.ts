import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  @Input()
  public title: string;

  constructor() {
    this.title = "";
  }

  ngOnInit(): void {
  }

}
