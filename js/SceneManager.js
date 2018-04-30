function SceneManager() {
    this.game = null;
    //game.init();
    
    this.init = function() {
        this.game = new Game();
        this.game.init();
    };
    this.newGame = function() {
        this.game.init();
    };
}
const sceneManager = new SceneManager();
sceneManager.init();