import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardBoardComponent } from './card-board/card-board.component';
import { CardComponent } from './card/card.component';
import { PlayerComponent } from './player/player.component';
import { GlobalService } from './services/global-service';

@NgModule({
  declarations: [
    AppComponent,
    CardBoardComponent,
    CardComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
