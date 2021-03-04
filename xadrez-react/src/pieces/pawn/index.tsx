import Piece from '../piece';

import pawnb from '../../assets/p_b.svg'
import pawnw from '../../assets/p_w.svg'

export default class Pawn extends Piece {
    public initialPositions = {};
    constructor(public player: any) {
      super(player, (player === 1 ? pawnw : pawnb));
      this.initialPositions = {
        1: [48, 49, 50, 51, 52, 53, 54, 55],
        2: [8, 9, 10, 11, 12, 13, 14, 15]
      }
    }
    
}