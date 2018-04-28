function Game() {
    
    this.player = null;
    
    const pixi = new PIXI.Application({width:1000,height:1000,backgroundColor:0x0000FF});
    document.body.append(pixi.view);
    
    this.stage = ()=> {
        return pixi.stage;
    };
    
    this.init = function() {
        this.player = new Player();
    };
}
const game = new Game();
game.init();