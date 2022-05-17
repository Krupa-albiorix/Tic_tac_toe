import { Gamelogic } from '../class/gamelogic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [Gamelogic]
})
export class GameComponent implements OnInit {

  constructor(public gameLogic: Gamelogic) { }

  ngOnInit(): void { }

  resetGame() {
    this.gameLogic.newGame()
  }

}
