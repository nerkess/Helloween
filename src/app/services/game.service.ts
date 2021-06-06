import { Observable, Subscription } from 'rxjs';
import { GameState } from './../state/game.state';
import { AddScore, GameOver } from './../state/game.actions';
import { Select, Store } from '@ngxs/store';
import { Icon } from './../models/card';
import { Injectable, OnDestroy } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnDestroy {
  public randomIcons: Icon[] = [];
  public firstClickedIcon: Icon;
  public secondClickedIcon: Icon;
  private targetScore: number;
  private subs: Subscription[];

  @Select(GameState.getScore) score$: Observable<number>;
  @Select(GameState.getTargetScore) targetScore$: Observable<number>;

  constructor(private _snackBar: MatSnackBar, private store: Store) {
    this.subs = [];

    this.subs.push(this.targetScore$.subscribe(targetScore => {
      this.targetScore = targetScore;
    }));

    this.subs.push(this.score$.subscribe(score => {
        if(score === this.targetScore && this.targetScore > 0) {
          this.snackbarOpen('YOU WOOOOON!!!', 'YAAAS!');
          setTimeout(() => {
            this.store.dispatch(new GameOver());
          }, 3000);
        }
    }));
  }

  ngOnDestroy() {
    for(const sub of this.subs){
      sub.unsubscribe();
    }
  }

  public onIconClicked(icon: Icon){
    if(this.firstClickedIcon == null){
      this.firstClickedIcon = icon;
    }else if(this.secondClickedIcon == null) {
      this.secondClickedIcon = icon;
      setTimeout(() => {
        if(this.areSame()){
          this.snackbarOpen('Cool!', 'Thanks ᕙ(`▿´)ᕗ');
          this.store.dispatch(new AddScore());
        }else{
          // this.snackbarOpen('Your memory is really weak :P', 'I know!');
          this.firstClickedIcon.clicked = false;
          this.secondClickedIcon.clicked = false;
        }
        this.makeNull();
      }, 500);
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

  private snackbarOpen(message1: string, message2: string){
    this._snackBar.open(message1, message2, {
      duration: 2000,
    });
  }
}
