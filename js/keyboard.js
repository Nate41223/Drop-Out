const keys = {
    w:{keyCode:87,isDown:false},
    a:{keyCode:65,isDown:false},
    s:{keyCode:83,isDown:false},
    d:{keyCode:68,isDown:false}
};

const keyboard = {
    keyDown: function(e){
        if(e.keyCode == keys.w.keyCode) keys.w.isDown = true;
        if(e.keyCode == keys.a.keyCode) keys.a.isDown = true;
        if(e.keyCode == keys.s.keyCode) keys.s.isDown = true;
        if(e.keyCode == keys.d.keyCode) keys.d.isDown = true;
    },
    keyUp: function(e){
        if(e.keyCode == keys.w.keyCode) keys.w.isDown = false;
        if(e.keyCode == keys.a.keyCode) keys.a.isDown = false;
        if(e.keyCode == keys.s.keyCode) keys.s.isDown = false;
        if(e.keyCode == keys.d.keyCode) keys.d.isDown = false;
    },
    init: function() {
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
        document.body.addEventListener("keydown", this.keyDown);
        document.body.addEventListener("keyup", this.keyUp);
        /*
        document.body.addEventListener("keydown", (e)=>{
            keyboard.keyDown = e;
            if(e.keyCode == keys.w.keyCode) console.log("hi");
            if(e.keyCode == keys.a.keyCode) keys.a.isDown = true;
            if(e.keyCode == keys.s.keyCode) keys.s.isDown = true;
            if(e.keyCode == keys.d.keyCode) keys.d.isDown = true;
        });
        
        document.body.addEventListener("keyup", (e)=>{
            console.log(e);
            keyboard.keyUp = e;
            console.log(keyboard.keyUp);
            if(e.keyCode == keys.w.keyCode) keys.w.isDown = false;
            if(e.keyCode == keys.a.keyCode) keys.a.isDown = false;
            if(e.keyCode == keys.s.keyCode) keys.s.isDown = false;
            if(e.keyCode == keys.d.keyCode) keys.d.isDown = false;
        });
        */
    },
    dispose: function() {
        document.body.removeEventListener("keydown",this.keyDown);
        document.body.removeEventListener("keyup",this.keyUp);
        keys.w.isDown = false;
        keys.a.isDown = false;
        keys.s.isDown = false;
        keys.d.isDown = false;
    }
};