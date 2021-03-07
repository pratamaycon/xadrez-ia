import Piece from '../piece';

import Knightw from '../../assets/n_w.svg';
import Knightb from '../../assets/n_b.svg';

export default class Knight extends Piece {
    constructor(public player: any) {
      super(player, (player === 1 ? Knightw : Knightb));
    }
}