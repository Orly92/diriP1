import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  @Input()
  public title: string;
  @Input()
  public detail: string | null;

  constructor() {
    this.title = "";
    this.detail = "";
  }

  ngOnInit(): void {
  }

}
