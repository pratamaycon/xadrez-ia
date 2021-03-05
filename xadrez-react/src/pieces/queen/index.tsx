import Piece from '../piece';

import queenw from '../../assets/q_w.svg';
import queenb from '../../assets/q_b.svg';

export default class Queen extends Piece {
    constructor(public player: any) {
      super(player, (player === 1 ? queenw : queenb));
    }
}