

var BouncingBall = function(div_id, x_start, y_start, x_end, y_end) {
    var _div_id = div_id;
    var _x_start = x_start;
    var _y_start = y_start;
    var _x_end = x_end;
    var _y_end = y_end;
    
    this.move = function() {
        var timers = {
            timerID: 0,
            timers: [],
            add: function(fn) {
                this.timers.push(fn);
            },
            start: function runNext() {
                if (this.timerID)
                    return;
                (function() {
                    if (timers.timers.length > 0) {
                        for (var i = 0; i < timers.timers.length; i++) {
                            if (timers.timers[i]() === false) {
                                timers.timers.splice(i, 1);
                                i--;
                            }
                        }
                        timers.timerID = setTimeout(runNext, 0);
                    }
                })();
            },
            stop: function() {
                clearTimeout(this.timerID);
                this.timerID = 0;
            }

        };

        var box = document.getElementById(_div_id);
        var x = _x_start;
        var y = _y_start;

        timers.add(function() {
            box.style.left = x + "px";
            if((_x_end - _x_start) > 0) {
                if (++x > _x_end)
                    return false;
            } else {
                if (--x < _x_end)
                    return false;
                
            }
        });

        timers.add(function() {
            box.style.top = y + "px";
            if((_y_end - _y_start) > 0) {
                if (++y > _y_end)
                    return false;
            } else {
                if (--y < _y_end)
                    return false;              
            }
        });

        timers.start();
    };
};


window.onload = function() {
 
    var bouncingBall1 = new BouncingBall(
            "box1",
            0,
            0,
            200,
            200
            );

    bouncingBall1.move();
//alert("break");
   var bouncingBall2 = new BouncingBall(
            "box2",
            300,
            500,
            100,
            300
            );

    bouncingBall2.move();


};
