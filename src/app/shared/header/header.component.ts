import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../services/login-service/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchParam: string;

  constructor(protected router: Router,protected renderer:Renderer2,
              public loginService:LoginService) {
    this.searchParam = "";
  }

  ngOnInit(): void {
  }

  searchWines() {
   this.router.navigate(['/listavinos/' + this.searchParam]);
  }

  logout() {
    this.loginService.logout();
  }
}
