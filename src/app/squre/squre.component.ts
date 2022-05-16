import { Component, Input, OnInit } from '@angular/core';
import { Gamelogic } from '../class/gamelogic';

@Component({
  selector: 'app-squre',
  templateUrl: './squre.component.html',
  styleUrls: ['./squre.component.scss']
})
export class SqureComponent implements OnInit {

  @Input() square: any; 

  constructor( public gameLogic: Gamelogic ) { }

  ngOnInit() {
  }

  changePlayer(){ 

    this.gameLogic.isGameRunning = true;

    if ( this.gameLogic.isGameRunning && this.square.state === null ){
      this.square.state =  this.gameLogic.activePlayer;
      this.gameLogic.changePlayerTurn( this.square);
    }
    
  }
}
