import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchParam: string;
  private sidebarVisible: boolean;

  @ViewChild("menu")
  protected menu: ElementRef | undefined;

  constructor(protected router: Router,protected renderer:Renderer2) {
    this.searchParam = "";
    this.sidebarVisible = false;
  }

  ngOnInit(): void {
  }

  searchWines() {
   this.router.navigate(['/listavinos/' + this.searchParam]);
  }

  sidebarToggle() {
    let removeClassName = "showMenu";
    let addClassName = "hideMenu";
    if (!this.sidebarVisible) {
      removeClassName = "hideMenu";
      addClassName = "showMenu";
    }
    this.renderer.removeClass(this.menu?.nativeElement,removeClassName);
    this.renderer.addClass(this.menu?.nativeElement,addClassName);
    this.sidebarVisible = !this.sidebarVisible;
  }
}
