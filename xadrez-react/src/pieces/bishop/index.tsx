import Piece from '../piece';

import bishopw from '../../assets/b_w.svg';
import bishopb from '../../assets/b_b.svg';

export default class Bishop extends Piece {
    constructor(public player: any) {
      super(player, (player === 1 ? bishopw : bishopb));
    }
}