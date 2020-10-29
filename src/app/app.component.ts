import { CardsService } from './services/cards.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helloween';

  constructor(public cardsService: CardsService){}
}
