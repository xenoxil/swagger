import React, { useLayoutEffect, useState } from 'react';
import { PieceType } from './chessField/chessField';
import store from '../store/store';

interface move {
  row: number;
  column: number;
}

const Piece = (props: PieceType) => {
  const [row, setRow] = useState(props.row);
  const [column, setColumn] = useState(props.column);
  const [pieceType, setPiece] = useState(props.name);
  const [alive, setAlive] = useState(props.alive);
  const [possibleMoves, setPossibleMoves] = useState<move[]>([]);
  const [isMovesVisible, setIsMovesVisible] = useState(false);

  useLayoutEffect(() => {}, []);
  const movesCalc = () => {
    switch (pieceType) {
      case 'blackKing':
        setPossibleMoves(() =>
          [
            { row: 0, column: -1 },

            { row: -1, column: 0 },
            { row: -1, column: -1 },
            { row: -1, column: 1 },
            { row: 0, column: 1 },
            { row: 1, column: 0 },
            { row: 1, column: -1 },
            { row: 1, column: 1 },
          ].filter((item) => {
            // debugger;
            return (
              row + item.row > 0 &&
              row + item.row < 8 &&
              column + item.column > 0 &&
              column + item.column < 8 &&
              store.currentPosition[row + item.row][column + item.column] === ''
            );
          }),
        );
        break;
      case 'blackBishop':
        return;

      case 'blackQueen':
        return;
      case 'blackRook':
        return;
      case 'blackKnight':
        return;
      case 'blackPawn':
        setPossibleMoves(() =>
          [
            { row: -1, column: -1 },
            { row: -1, column: 0 },
            { row: -1, column: 1 },
            { row: -2, column: 0 },
          ].filter((item) => {
            // debugger;
            return (
              row + item.row > 0 &&
              row + item.row <= 8 &&
              column + item.column > 0 &&
              column + item.column <= 8 &&
              ((column + item.column !== column &&
                store.currentPosition[row + item.row][column + item.column].includes('white')) ||
                (column + item.column === column &&
                  item.row !== 7 &&
                  store.currentPosition[row + item.row][column + item.column] === '') ||
                (row === 7 &&
                  item.row === -2 &&
                  store.currentPosition[row + item.row][column + item.column] === ''))
            );
          }),
        );
        break;

      case 'whiteKing':
        return;
      case 'whiteKnight':
        return;
      case 'whiteRook':
        return;
      case 'whiteQueen':
        return;
      case 'whitePawn':
        setPossibleMoves(() =>
          [
            { row: 1, column: -1 },
            { row: 1, column: 0 },
            { row: 1, column: 1 },
            { row: 2, column: 0 },
          ].filter((item) => {
            // debugger;
            return (
              row + item.row > 0 &&
              row + item.row <= 8 &&
              column + item.column > 0 &&
              column + item.column <= 8 &&
              ((column + item.column !== column &&
                store.currentPosition[row + item.row][column + item.column].includes('black')) ||
                (column + item.column === column &&
                  item.row !== 2 &&
                  store.currentPosition[row + item.row][column + item.column] === '') ||
                (row === 2 && store.currentPosition[row + item.row][column + item.column] === ''))
            );
          }),
        );
        break;

      case 'whiteBishop':
        return;
      default:
        return;
    }
  };
  return (
    <>
      <div
        className={`piece ${pieceType}`}
        style={{
          transform: `translateX(${column * 100 - 100}px) translateY(-${row * 100 - 100}px)`,
          display: `${alive ? 'block' : 'none'}`,
          // backgroundColor: `${this._focus ? 'red' : 'transparent'}`,
        }}
        onClick={() => {
          setIsMovesVisible(true);
          movesCalc();
        }}></div>
      {possibleMoves.map((move: move) => {
        return (
          <div
            className="move"
            style={{
              transform: `translateX(${(column + move.column) * 100 - 100}px) translateY(-${
                (row + move.row) * 100 - 100
              }px)`,
              display: `${isMovesVisible ? 'block' : 'none'}`,
            }}
            key={Math.random()}
            onClick={() => {
              setColumn(column + move.column);
              setRow(row + move.row);
              setIsMovesVisible(false);
              store.setPieceNewPosition(
                [row, column],
                [row + move.row, column + move.column],
                pieceType,
              );
            }}
          />
        );
      })}
    </>
  );
};
// }
// };
// export class Piece extends React.Component {
//   _row: number = 1;
//   _column: number = 1;
//   _pieceType: string = 'whitePawn';
//   _key: string = '';
//   _alive: boolean;
//   _focus: boolean = false;

//   constructor(props: PieceType) {
//     super(props);
//     // тело конструктора
//     this._row = props.row;
//     this._column = props.column;
//     this._pieceType = props.name;
//     this._alive = props.alive;
//     this._key = props.key;
//   }

//   setPosition(row: number, column: number) {
//     this._row = row;
//     this._column = column;
//   }
//   _setFocus(boolean: boolean) {
//     this._focus = boolean;
//   }

//   render() {

export default Piece;
