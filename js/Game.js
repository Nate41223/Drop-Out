function Game() {
    
    this.player = null;
    this.room = null;
    this.tiles = [];
    this.startTimer = 2.5;
    this.winLoseScreen = null;
    this.hasWonTimer = .75;
    this.hasWon = false;
    
    const pixi = new PIXI.Application({width:780,height:910,backgroundColor:0x000000});
    document.body.append(pixi.view);
    
    this.stage = ()=> {
        return pixi.stage;
    };
    
    this.getS = ()=> {
        return pixi.ticker.elapsedMS/1000;
    };
    
    this.width = ()=> {
        return pixi.screen.width;
    }
    
    this.height = ()=> {
        return pixi.screen.height;
    }
    
    this.init = function() {
        
        keyboard.init();
        console.log(Object.keys(rooms).length);
        if(this.room == null){
            this.room = "room" + Math.round(Math.random() * (Object.keys(rooms).length - 1) + 1);
        };
        console.log(this.room);
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
        if(this.player != null) {
            if(this.startTimer > 0) {
                this.startTimer -= this.getS();
            }else this.startTimer = 0;
            
            this.player.update(dt, this.getS());
            
            var isSafe = false;
            
            for (var i = this.tiles.length - 1; i >= 0; i--) {
                if(this.isColliding(this.player.sprite, this.tiles[i].sprite)) {
                    if(this.tiles[i].name == "wall" || this.tiles[i].name == "disp" && this.startTimer != 0||this.tiles[i].name == "help" && this.startTimer != 0) {
                        this.player.handleCollision(dt,this.player.sprite.getBounds(),this.tiles[i].sprite.getBounds());
                    };
                    if(this.tiles[i].name == "saf1") {
                        isSafe = true;
                        this.hasWonTimer -= this.getS();
                        if(this.hasWonTimer <= 0) {
                            this.hasWon = true;
                            this.reset();
                            this.gameOver();
                            break;
                        }; 
                    };
                    if(this.tiles[i].name == "saf2") {
                        isSafe = true;
                    };
                    if(this.tiles[i].name == "disp" || this.tiles[i].name == "help") {
                        isSafe = true;
                    };
                };
                if(this.tiles[i].name == "disp") {
                    this.tiles[i].update(this.startTimer, this.getS());  
                };
            };
            if (isSafe == false) {
                this.reset();
                this.gameOver();
            };
        };
    });
    
    this.isColliding = function(a,b) {
        var ab = a.getBounds();
        var bb = b.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    };  
    this.reset = function() {
        keyboard.dispose();
        this.player.dispose();
        sceneManager.game.player = null;
        for (var i = this.tiles.length - 1; i >= 0; i--) {
            this.tiles[i].dispose();
            this.tiles.splice(i,1);
        };
        //sceneManager.newGame();
    };
    this.gameOver = function() {
        this.winLoseScreen = new GameOver();
        this.winLoseScreen.init(this.room);
    };
}
//const game = new Game();
//game.init();