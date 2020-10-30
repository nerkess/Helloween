import { Icon } from './../models/card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public firstClickedIcon: Icon;
  public secondClickedIcon: Icon;

  constructor() { }

  public assign(icon: Icon){
    if(this.firstClickedIcon == null) {
      this.firstClickedIcon = icon;
    }else if(this.secondClickedIcon == null) {
      this.secondClickedIcon = icon;
    }
  }

  public allAssigned(): boolean{
    if(this.firstClickedIcon != null && this.secondClickedIcon != null) {
      return true;
    }else{
      return false;
    }
  }

  public areSame(): boolean {
    return this.firstClickedIcon.id === this.secondClickedIcon.id;
  }

}
