import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { NewGameComponent } from './new-game/new-game.component';
import { LotteryComponent } from './lottery/lottery.component';
import { NumberComponent } from './number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGamesComponent,
    NewGameComponent,
    LotteryComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
