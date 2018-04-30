function SceneManager() {
    this.game = null;
    //game.init();
    
    this.init = function() {
        this.game = new Game();
        this.game.init();
    };
    this.newGame = function() {
        this.game.init();
        this.game.startTimer = 5;
        this.game.hasWon = false;
        this.game.hasWonTimer = .75;
    };
}
const sceneManager = new SceneManager();
sceneManager.init();