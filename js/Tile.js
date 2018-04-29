function Tile(name, gridx, gridy) {
    
    this.sprite = null;
    this.width = 10;
    this.height = 10;
    this.x = 0;
    this.y = 0;
    this.name = name;
    
    this.init = function() {
        if(name == "wall") this.sprite = new PIXI.Sprite.fromImage("imgs/Wall.png");
        if(name == "safe") this.sprite = new PIXI.Sprite.fromImage("imgs/Safe.png");
        if(name == "help") this.sprite = new PIXI.Sprite.fromImage("imgs/Help.png");
        if(name == "disp") this.sprite = new PIXI.Sprite.fromImage("imgs/Disp.png");
        
        this.sprite.anchor.set(.5);
        this.sprite.scale.set(6.5);
        this.width = this.sprite.width * this.width; // sprites don't calculate sprite width till second frame
        this.height = this.sprite.height * this.height; // sprites don't calculate sprite height till second frame
        
        this.sprite.x = gridx * 65 + 65/2;
        this.sprite.y = gridy * 65 + 65/2;
        this.x = this.sprite.x;
        this.y = this.sprite.y;
        game.stage().addChild(this.sprite);
    };
}