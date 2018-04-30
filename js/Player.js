function Player() {
    
    this.x = 100;
    this.y = 815;
    this.width = 10;
    this.height = 10;
    this.vx = 0;
    this.vy = 0;
    this.vMax = 5;
    
    
    this.sprite = new PIXI.Sprite.fromImage("imgs/Player.png");
    this.sprite.x = this.x;
    this.sprite.y = this.y;
    this.sprite.anchor.set(.5);
    this.sprite.scale.set(3);
    this.width = this.sprite.width * this.width; // sprites don't calculate sprite width till second frame
    this.height = this.sprite.height * this.height; // sprites don't calculate sprite height till second frame
    sceneManager.game.stage().addChild(this.sprite);
    
    this.update = function(dt) {
        
        //console.log(this.sprite.getBounds);
        
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
        
        this.sprite.x = this.x;
        this.sprite.y = this.y;
    };
    this.handleCollision = function(dt, playerB, tileB) {
        var potentialY = 0;
        var potentialX = 0;
        if(playerB.y <= tileB.y && playerB.y + playerB.height >= tileB.y) potentialY = tileB.y - playerB.height/2; //above
        if(playerB.y >= tileB.y && playerB.y <= tileB.y + tileB.height) potentialY = tileB.y + tileB.height + playerB.height/2; //below
        if(playerB.x <= tileB.x && playerB.x + playerB.width >= tileB.x) potentialX = tileB.x - playerB.width/2; //left
        if(playerB.x >= tileB.x && playerB.x <= tileB.x + tileB.width) potentialX = tileB.x + tileB.width + playerB.width/2;//right
        
        var distY = Math.abs(potentialY - this.y);
        var distX = Math.abs(potentialX - this.x);
        if (distX < distY) this.x = potentialX;
        else if (distX > distY) this.y = potentialY;
        //this.y -= this.vy * dt;
        //this.x -= this.vx * dt;
        
        this.sprite.x = this.x;
        this.sprite.y = this.y;
    };
    this.dispose = function() {
        sceneManager.game.stage().removeChild(this.sprite);
    };
}