import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public lat: number = 38.359261986495326;
  public lng: number = -0.4750480344055538;
  public zoom: number = 17;

  constructor() { }

  ngOnInit(): void {
  }

}
