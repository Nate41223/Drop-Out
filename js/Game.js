function Game() {
    
    this.player = null;
    
    const pixi = new PIXI.Application({width:1000,height:1000,backgroundColor:0x000000});
    document.body.append(pixi.view);
    
    this.init = function() {
        
    };
}
const game = new Game();
game.init();