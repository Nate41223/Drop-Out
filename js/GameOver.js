function GameOver() {
    this.text = null;
    this.replayLevelButton = null;
    this.newLevelButton = null;
    
    this.init = function(room) {
        if (sceneManager.game.hasWon == false) {
            this.text = new PIXI.Text("Game Over",{fontFamily: "Arial", fontSize: 60, fill: 0xffffff, align: 'center'});
            this.text.x = sceneManager.game.width()/2;
            this.text.y = sceneManager.game.height()/3;
            this.text.anchor.set(.5);
            sceneManager.game.stage().addChild(this.text);
        } else if (sceneManager.game.hasWon == true) {
            this.text = new PIXI.Text("You Win!!",{fontFamily: "Arial", fontSize: 60, fill: 0xffffff, align: 'center'});
            this.text.x = sceneManager.game.width()/2;
            this.text.y = sceneManager.game.height()/3;
            this.text.anchor.set(.5);
            sceneManager.game.stage().addChild(this.text);
        };
        
        this.replayLevelButton = new PIXI.Sprite.fromImage("imgs/RetryStage.png");
        this.replayLevelButton.anchor.set(.5);
        this.replayLevelButton.x = sceneManager.game.width()/3;
        this.replayLevelButton.y = (sceneManager.game.height()/3)*2;
        this.replayLevelButton.interactive = true;
        this.replayLevelButton.buttonMode = true;
        this.replayLevelButton.on('pointerup', this.onReplayUp);
        sceneManager.game.stage().addChild(this.replayLevelButton);
        
        
        this.newLevelButton = new PIXI.Sprite.fromImage("imgs/NewStage.png");
        this.newLevelButton.anchor.set(.5);
        this.newLevelButton.x = (sceneManager.game.width()/3)*2;
        this.newLevelButton.y = (sceneManager.game.height()/3)*2;
        this.newLevelButton.interactive = true;
        this.newLevelButton.buttonMode = true;
        this.newLevelButton.on('pointerup', this.onNewUp);
        sceneManager.game.stage().addChild(this.newLevelButton);
    };
    
    this.onReplayUp = ()=> {
        this.dispose();
        sceneManager.newGame();
    };
    this.onNewUp = ()=> {
        this.dispose();
        sceneManager.game.room = null;
        sceneManager.newGame();
    };
    this.dispose = function() {
        sceneManager.game.stage().removeChild(this.text);
        sceneManager.game.stage().removeChild(this.replayLevelButton);
        sceneManager.game.stage().removeChild(this.newLevelButton);
        sceneManager.game.winLoseScreen = null;
    };
}