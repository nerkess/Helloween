import { Icon, ICONS } from './../models/card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public icons: Array<Icon> = ICONS;

  constructor() { }

}
