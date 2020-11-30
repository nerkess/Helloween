import { Icon, ICONS } from './../models/card';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public randomIcons: Array<Icon> = [];
  public score: number = 0;
  public firstClickedIcon: Icon;
  public secondClickedIcon: Icon;

  constructor(private _snackBar: MatSnackBar) {
    this.randomIcons = ICONS.slice(0, 10);
    this.randomIcons = this.randomIcons.concat(this.randomIcons).map(icon => ({
      id: icon.id,
      url: icon.url,
      clicked: icon.clicked
    }));
    this.shuffleArray();
  }

  public onIconClicked(icon: Icon){
    console.log(this.randomIcons);
    if(this.firstClickedIcon == null){
      this.firstClickedIcon = icon;
    }else if(this.secondClickedIcon == null) {
      this.secondClickedIcon = icon;
      setTimeout(() => {
        if(this.areSame()){
          this.snackbarOpen('You did it!!!', 'YAAAS!');
          this.score += 20;
        }else{
          this.snackbarOpen('Your memory is really weak :P', 'I know!');
          this.firstClickedIcon.clicked = false;
          this.secondClickedIcon.clicked = false;
        }
        this.makeNull();
      }, 2000);
    }
  }

  private makeNull(){
    this.firstClickedIcon = null;
    this.secondClickedIcon = null;
  }

  public twoIconsClicked(): boolean{
    return (this.firstClickedIcon != null && this.secondClickedIcon != null) ? true : false;
  }

  public areSame(): boolean {
    return (this.firstClickedIcon.id === this.secondClickedIcon.id) ? true : false;
  }

  private shuffleArray(){
    this.randomIcons.sort(() => Math.random() - 0.5);
  }

  private snackbarOpen(message1: string, message2: string){
    this._snackBar.open(message1, message2, {
      duration: 2000,
    });
  }
}
