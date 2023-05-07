import { useEffect, useLayoutEffect, useState } from 'react';
import pieaceImgChoice from '../../pieceImgChoice';
import Piece from '../Piece';

export interface PieceType {
  row: number;
  name: string;
  column: number;
  key: string;
  alive: boolean;
}
type fieldArrType = {
  isGreen: boolean;
  id: number;
  focus?: boolean;
};

const ChessField = () => {
  const [fieldArray, setFieldArray] = useState<fieldArrType[]>([]);

  useLayoutEffect(() => {
    let isGreen = false;
    const tempFieldArray: fieldArrType[] = [];
    for (let i = 0; i < 64; i++) {
      tempFieldArray.push({ isGreen: isGreen, id: i + 1 });
      isGreen = !isGreen;
      if ((i + 1) % 8 === 0) {
        isGreen = !isGreen;
      }
    }
    setFieldArray(tempFieldArray);
    return () => {
      isGreen = false;
    };
  }, []);

  const [piecesArray, setPiecesArray] = useState<PieceType[]>([
    {
      name: 'blackPawn',
      row: 7,
      column: 1,
      key: 'b1',
      alive: true,
    },
    {
      name: 'blackPawn',
      row: 7,
      column: 2,
      key: 'b2',
      alive: true,
    },
    {
      name: 'blackPawn',
      row: 7,
      column: 3,
      key: 'b3',
      alive: true,
    },
    {
      name: 'blackPawn',
      row: 7,
      column: 4,
      key: 'b4',
      alive: true,
    },
    {
      name: 'blackPawn',
      row: 7,
      column: 5,
      key: 'b5',
      alive: true,
    },
    {
      name: 'blackPawn',
      row: 7,
      column: 6,
      key: 'b6',
      alive: true,
    },
    {
      name: 'blackPawn',
      row: 7,
      column: 7,
      key: 'b7',
      alive: true,
    },
    {
      name: 'blackPawn',
      row: 7,
      column: 8,
      key: 'b8',
      alive: true,
    },
    {
      name: 'blackRook',
      row: 8,
      column: 8,
      key: 'bR2',
      alive: true,
    },
    {
      name: 'blackRook',
      row: 8,
      column: 1,
      key: 'bR1',
      alive: true,
    },
    {
      name: 'blackKnight',
      row: 8,
      column: 2,
      key: 'bKn1',
      alive: true,
    },
    {
      name: 'blackKnight',
      row: 8,
      column: 7,
      key: 'bKn2',
      alive: true,
    },
    {
      name: 'blackBishop',
      row: 8,
      column: 6,
      key: 'bB1',
      alive: true,
    },
    {
      name: 'blackBishop',
      row: 8,
      column: 3,
      key: 'bB2',
      alive: true,
    },
    { name: 'blackKing', row: 8, column: 4, key: 'bK', alive: true },
    { name: 'blackQueen', row: 8, column: 5, key: 'bQ', alive: true },
    {
      name: 'whitePawn',
      row: 2,
      column: 1,
      key: 'w1',
      alive: true,
    },
    {
      name: 'whitePawn',
      row: 2,
      column: 2,
      key: 'w2',
      alive: true,
    },
    {
      name: 'whitePawn',
      row: 2,
      column: 3,
      key: 'w3',
      alive: true,
    },
    {
      name: 'whitePawn',
      row: 2,
      column: 4,
      key: 'w4',
      alive: true,
    },
    {
      name: 'whitePawn',
      row: 2,
      column: 5,
      key: 'w5',
      alive: true,
    },
    {
      name: 'whitePawn',
      row: 2,
      column: 6,
      key: 'w6',
      alive: true,
    },
    {
      name: 'whitePawn',
      row: 2,
      column: 7,
      key: 'w7',
      alive: true,
    },
    {
      name: 'whitePawn',
      row: 2,
      column: 8,
      key: 'w8',
      alive: true,
    },
    {
      name: 'whiteRook',
      row: 1,
      column: 8,
      key: 'wR2',
      alive: true,
    },
    {
      name: 'whiteRook',
      row: 1,
      column: 1,
      key: 'wR1',
      alive: true,
    },
    {
      name: 'whiteKnight',
      row: 1,
      column: 2,
      key: 'wKn1',
      alive: true,
    },
    {
      name: 'whiteKnight',
      row: 1,
      column: 7,
      key: 'wKn2',
      alive: true,
    },
    {
      name: 'whiteBishop',
      row: 1,
      column: 6,
      key: 'wB1',
      alive: true,
    },
    {
      name: 'whiteBishop',
      row: 1,
      column: 3,
      key: 'wB2',
      alive: true,
    },
    { name: 'whiteKing', row: 1, column: 4, key: 'wK', alive: true },
    { name: 'whiteQueen', row: 1, column: 5, key: 'wQ', alive: true },
  ]);

  return (
    <div className="chessField">
      {fieldArray.map((item) => {
        return (
          <div
            className={`chessField__cell ${item.isGreen ? 'chessField__cell_green' : ''} ${
              item.focus ? `piece_focus` : ''
            }`}
            key={item.id}
            onClick={() => {
              item.focus = true;
            }}
          />
        );
      })}
      <div>
        {piecesArray.map((piece) => {
          return <Piece {...piece} key={piece.key} />;
        })}
      </div>
    </div>
  );
};

export default ChessField;
