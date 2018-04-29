function Game() {
    
    this.player = null;
    this.room = null;
    this.tiles = [];
    
    const pixi = new PIXI.Application({width:1000,height:1000,backgroundColor:0x0000FF});
    document.body.append(pixi.view);
    
    this.stage = ()=> {
        return pixi.stage;
    };
    
    this.init = function() {
        
        keyboard.init();
        this.room = "room" + 1;
        /*
        var xp = "room" + 1;
        console.log(xp);
        console.log(rooms[xp])
        console.log(rooms);
        */
        for (var i = rooms[this.room].grid.length - 1; i >= 0; i--) {
            for (var e = rooms[this.room].grid[i].length - 1; e >= 0; e--) {
                if(rooms[this.room].grid[i][e] != "    ") {
                    var tile = new Tile(rooms[this.room].grid[i][e], e, i);
                    tile.init();
                    this.tiles.push(tile);
                };
            };
        };
        this.player = new Player();
    };
    
    pixi.ticker.add((dt)=> {
        this.player.update(dt);
        
        for (var i = this.tiles.length - 1; i >= 0; i--) {
            if(this.isColliding(this.player.sprite, this.tiles[i].sprite)) {
                if(this.tiles[i].name == "wall") this.player.handleCollision(dt,this.player.sprite.getBounds(),this.tiles[i].sprite.getBounds());
            };
        };
    });
    
    this.isColliding = function(a,b) {
        var ab = a.getBounds();
        var bb = b.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    };  
}
const game = new Game();
game.init();