import { GameService } from './services/game.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomePage } from './pages/home/home.page';
import { GamePage } from './pages/game/game.page';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomePage,
    GamePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
