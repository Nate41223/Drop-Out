function Player() {
    
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.height = 10;
    
    const sprite = new PIXI.Sprite.fromImage("imgs/Player.png");
    sprite.anchor.set(.5);
    sprite.scale.set(10);
    game.stage().addChild(sprite);
    
    
    this.update = function(dt) {
        
    };
}