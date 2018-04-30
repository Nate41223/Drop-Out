function Tile(name, gridx, gridy) {
    
    this.sprite = null;
    this.width = 65;
    this.height = 65;
    this.x = 0;
    this.y = 0;
    this.name = name;
    
    this.init = function() {
        if(name == "wall") this.sprite = new PIXI.Sprite.fromImage("imgs/WallTile.png");
        if(name == "saf1") this.sprite = new PIXI.Sprite.fromImage("imgs/FloorTile.png");
        if(name == "saf2") this.sprite = new PIXI.Sprite.fromImage("imgs/FloorTile.png");
        if(name == "help") this.sprite = new PIXI.Sprite.fromImage("imgs/FloorTile.png");
        if(name == "disp") this.sprite = new PIXI.Sprite.fromImage("imgs/FloorTile.png");
        
        this.sprite.anchor.set(.5);
        //this.sprite.scale.set(4);
        //this.width = this.sprite.width * this.width; // sprites don't calculate sprite width till second frame
        //this.height = this.sprite.height * this.height; // sprites don't calculate sprite height till second frame
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.x = gridx * 65 + 65/2;
        this.sprite.y = gridy * 65 + 65/2;
        this.x = this.sprite.x;
        this.y = this.sprite.y;
        sceneManager.game.stage().addChild(this.sprite);
    };
    
    this.update = function(startTimer, dts) {
        if(startTimer <= 1) {
            this.sprite.alpha -= dts;
        };
    };
    this.dispose = function() {
        sceneManager.game.stage().removeChild(this.sprite);
    };
}