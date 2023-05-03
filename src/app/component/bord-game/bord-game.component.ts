import { Component } from '@angular/core';


@Component({
  selector: 'app-bord-game',
  templateUrl: './bord-game.component.html',
  styleUrls: ['./bord-game.component.css'],
})
export class BordGameComponent {



  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  currentPlayer: string = 'X';
  winner: string = '';
  gameEnded: boolean = false;



  makeMove(row: number, col: number) {
    if (!this.gameEnded && this.board[row][col] === '') {
      this.board[row][col] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.getWinner();
    }
  }

  getWinner(): void {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] !== '' && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
        this.winner = this.board[i][0];
        this.gameEnded = true;
        return;
      }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
      if (this.board[0][j] !== '' && this.board[0][j] === this.board[1][j] && this.board[1][j] === this.board[2][j]) {
        this.winner = this.board[0][j];
        this.gameEnded = true;
        return;
      }
    }

    // Check diagonals
    if (this.board[0][0] !== '' && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      this.winner = this.board[0][0];
      this.gameEnded = true;
      return;
    }
    if (this.board[0][2] !== '' && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      this.winner = this.board[0][2];
      this.gameEnded = true;
      return;
    }

    this.gameEnded = this.board.every(row => row.every(cell => cell !== ''));
  }

  resetGame() {
    this.currentPlayer = 'X';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.winner = '';
    this.gameEnded = false;
  }

}
