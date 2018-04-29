function Tile(name, gridx, gridy) {
    
    this.sprite = null;
    
    this.init = function() {
        if(name == "wall") this.sprite = new PIXI.Sprite.fromImage("imgs/Wall.png");
        if(name == "safe") this.sprite = new PIXI.Sprite.fromImage("imgs/Safe.png");
        if(name == "help") this.sprite = new PIXI.Sprite.fromImage("imgs/Help.png");
        if(name == "disp") this.sprite = new PIXI.Sprite.fromImage("imgs/Disp.png");
        
        this.sprite.anchor.set(.5);
        this.sprite.scale.set(6.5);
        
        this.sprite.x = gridx * 65 + 65/2;
        this.sprite.y = gridy * 65 + 65/2;
        game.stage().addChild(this.sprite);
    };
}