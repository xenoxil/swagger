export default function pieaceImgChoice(pieaceName: string): string {
  switch (pieaceName) {
    case 'blackBishop':
      return 'src/images/blackBishop.svg';
    case 'blackKing':
      return 'src/images/blackKing.svg';
    case 'blackQueen':
      return 'src/images/blackQueen.svg';
    case 'blackRook':
      return 'src/images/blackRook.svg';
    case 'blackKnight':
      return 'src/images/blackKnight.svg';
    case 'blackPawn':
      return 'src/images/blackPawn.svg';
    case 'whiteKing':
      return 'src/images/whiteKing.svg';
    case 'whiteKnight':
      return 'src/images/whiteKnight.svg';
    case 'whiteRook':
      return 'src/images/whiteRook.svg';
    case 'whiteQueen':
      return 'src/images/whiteQueen.svg';
    case 'whitePawn':
      return 'src/images/whitePawn.svg';
    case 'whiteBishop':
      return 'src/images/whiteBishop.svg';
    default:
      return '';
  }
}
