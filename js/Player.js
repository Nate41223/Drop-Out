function Player() {
    
    this.x = 100;
    this.y = 100;
    this.width = 10;
    this.height = 10;
    this.vx = 0;
    this.vy = 0;
    this.vMax = 5;
    
    
    const sprite = new PIXI.Sprite.fromImage("imgs/Player.png");
    sprite.x = this.x;
    sprite.y = this.y;
    sprite.anchor.set(.5);
    sprite.scale.set(5);
    this.width = sprite.width * this.width; // sprites don't calculate sprite width till second frame
    this.height = sprite.height * this.height; // sprites don't calculate sprite height till second frame
    game.stage().addChild(sprite);
    
    this.update = function(dt) {
        
        var moveH = 0;
        var moveV = 0;
        
        if(keys.w.isDown == true) moveV--; 
        if(keys.a.isDown == true) moveH--;
        if(keys.s.isDown == true) moveV++;
        if(keys.d.isDown == true) moveH++;
        
        this.vx += moveH*1*dt;
        this.vy += moveV*1*dt;
        
        if (this.vx > this.vMax) this.vx = this.vMax;
        if (this.vx <- this.vMax) this.vx =- this.vMax;
        if (this.vy > this.vMax) this.vy = this.vMax;
        if (this.vy <- this.vMax) this.vy =- this.vMax;
        
        if(this.vx != 0 && moveH == 0) {
            if(this.vx > 0) {
                this.vx -= 1*dt;
                if(this.vx < 0) this.vx = 0;
            }
            if(this.vx < 0) {
                this.vx += 1*dt;
                if(this.vx > 0) this.vx = 0;
            }
        }
        if(this.vy != 0 && moveV == 0) {
            if(this.vy > 0) {
                this.vy -= 1*dt;
                if(this.vy < 0) this.vy = 0;
            }
            if(this.vy < 0) {
                this.vy += 1*dt;
                if(this.vy > 0) this.vy = 0;
            }
        }
        
        this.y += this.vy * dt;
        this.x += this.vx * dt;
        
        sprite.x = this.x;
        sprite.y = this.y;
    };
}