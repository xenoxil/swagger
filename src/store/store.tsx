import { makeAutoObservable } from 'mobx';

class Store {
  currentPosition: string[][] = [
    [],
    [
      '',
      'whiteRook',
      'whiteKnight',
      'whiteBishop',
      'whiteBishop',
      'whiteQueen',
      'whiteKing',
      'whiteKnight',
      'whiteRook',
    ],
    [
      '',
      'whitePawn',
      'whitePawn',
      'whitePawn',
      'whitePawn',
      'whitePawn',
      'whitePawn',
      'whitePawn',
      'whitePawn',
    ],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    [
      '',
      'blackPawn',
      'blackPawn',
      'blackPawn',
      'blackPawn',
      'blackPawn',
      'blackPawn',
      'blackPawn',
      'blackPawn',
    ],
    [
      '',
      'blackRook',
      'blackKnight',
      'blackBishop',
      'blackBishop',
      'blackQueen',
      'blackKing',
      'blackKnight',
      'blackRook',
    ],
  ];
  ///////////////////////////////////////

  constructor() {
    makeAutoObservable(this);
  }
  setPieceNewPosition(
    lastPiecePosition: number[],
    currentPiecePosition: number[],
    pieceType: string,
  ) {
    this.currentPosition[lastPiecePosition[0]][lastPiecePosition[1]] = '';
    this.currentPosition[currentPiecePosition[0]][currentPiecePosition[1]] = pieceType;
  }
}

export default new Store();
