import { GameService } from './services/game.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomePage } from './pages/home/home.page';
import { GamePage } from './pages/game/game.page';
import { GameState } from './state/game.state';
import { GameOverDialogComponent } from './components/game-over-dialog/game-over-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomePage,
    GamePage,
    GameOverDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    NgxsModule.forRoot([GameState])
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
