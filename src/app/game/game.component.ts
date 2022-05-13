import { Gamelogic } from './../gamelogic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [Gamelogic]
})
export class GameComponent implements OnInit {

  constructor( public game : Gamelogic) { }

  ngOnInit(): void {
  }

  startGame() {
    this.game.gameStart();
    const currentPlayer = 'Current turn: Player: ' + this.game.currentTurn;
    const information = document.querySelector('.current-status');
    information!.innerHTML = currentPlayer;
  }

  async clickSubField( subfild: any):Promise<void> {
    if( this.game.gameStatus === 1) {
      const position = subfild.currentTarget.getAttribute('position');
      const information = document.querySelector('.current-status');

      this.game.setField(position, this.game.currentTurn);
      const color = this.game.getPlayerColorClass();
      subfild.currentTarget.classList.add(color);

      // await this.game.checkGameWinner();
      await this.game.checkGameWinner().then( (end: boolean) => {
        if (this.game.gameStatus === 0 && end) {
          information!.innerHTML = "Winner person is :" + this.game.currentTurn;
        }
      });

      await this.game.checkGameFull().then( (end: boolean) => {
        if (this.game.gameStatus === 0 && end) {
          information!.innerHTML = "No Winner!!!";
        }
      });

      this.game.changePlayer();

      if( this.game.gameStatus === 1) {
        const currentPlayer = 'Current turn: Player: ' + this.game.currentTurn;
        information!.innerHTML = currentPlayer;
      }

    }

    
  }

}
