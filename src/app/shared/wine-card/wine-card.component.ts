import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss']
})
export class WineCardComponent implements OnInit {
  @Input()
  public wine:any;

  constructor() { }

  ngOnInit(): void {
  }

  handleMissingImage($event: any) {
    ($event.target as HTMLImageElement).src = '../../assets/img/noimage.png';
  }
}
