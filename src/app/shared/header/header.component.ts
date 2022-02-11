import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchParam: string;

  constructor(protected router: Router,protected renderer:Renderer2) {
    this.searchParam = "";
  }

  ngOnInit(): void {
  }

  searchWines() {
   this.router.navigate(['/listavinos/' + this.searchParam]);
  }

}
