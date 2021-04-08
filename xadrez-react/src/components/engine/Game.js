import * as Chess from 'chess.js';
import {BehaviorSubject} from 'rxjs';


let promotemove = 'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'
const chess = new Chess(promotemove)


export const gameSubject = new BehaviorSubject({
    board: chess.board()
})

