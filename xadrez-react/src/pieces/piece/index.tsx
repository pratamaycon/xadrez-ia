export default class Piece {
    constructor(public player: any, public style: any) {
      this.player = player;
      this.style = { backgroundImage: `url('${style }')` };
    }
  
    getPlayer() {
      return this.player;
    }
  }
  