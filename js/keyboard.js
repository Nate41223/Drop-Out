const keys = {
    w:{keyCode:87,isDown:false},
    a:{keyCode:65,isDown:false},
    s:{keyCode:83,isDown:false},
    d:{keyCode:68,isDown:false}
};

const keyboard = {
    init: function() {
        document.body.addEventListener("keydown", (e)=>{
            if(e.keyCode == keys.w.keyCode) keys.w.isDown = true;
            if(e.keyCode == keys.a.keyCode) keys.a.isDown = true;
            if(e.keyCode == keys.s.keyCode) keys.s.isDown = true;
            if(e.keyCode == keys.d.keyCode) keys.d.isDown = true;
        });
        document.body.addEventListener("keyup", (e)=>{
            if(e.keyCode == keys.w.keyCode) keys.w.isDown = false;
            if(e.keyCode == keys.a.keyCode) keys.a.isDown = false;
            if(e.keyCode == keys.s.keyCode) keys.s.isDown = false;
            if(e.keyCode == keys.d.keyCode) keys.d.isDown = false;
        });
    },
};