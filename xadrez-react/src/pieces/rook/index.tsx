import Piece from '../piece';

import rookw from '../../assets/r_w.svg';
import rookb from '../../assets/r_b.svg';

export default class Rook extends Piece {
    constructor(public player: any) {
      super(player, (player === 1 ? rookw : rookb));
    }
}