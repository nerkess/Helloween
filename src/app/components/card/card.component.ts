import { Icon } from './../../models/card';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() icon: Icon; 

  constructor() { }

  ngOnInit(): void {
  }

}
