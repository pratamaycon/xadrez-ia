import Piece from '../piece';

import kingw from '../../assets/k_w.svg';
import kingb from '../../assets/k_b.svg';

export default class King extends Piece {
    constructor(public player: any) {
      super(player, (player === 1 ? kingw : kingb));
    }
}