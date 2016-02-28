function setupHeaderCanvas() {
	var sketch = function(p) {
        var lines = [];
        
		p.setup = function() {
			var canvas = p.createCanvas(window.innerWidth, 150);
			canvas.parent("p5Header");
			init();
		};

		function init() {
            p.colorMode(p.HSB, 360, 100, 100, 100);
            p.rectMode(p.CENTER);
            lines = [];
            for(var i = 0; i < 5; i++) {
                lines.push(new Line());
            }
		}

		p.draw = function() {
            p.background(255);
            for(var i = 0; i < lines.length; i++) {
                lines[i].display();
            }
		};

		p.windowResized = function() {
			p.resizeCanvas(window.innerWidth, 150);
			init();
		};
        
        function Line() {
            this.posY;
            this.size;
            this.hue;
            this.alpha = 0;
            this.speed;
        }
        
        Line.prototype = {
            resetProperties: function() {
                this.posY = p.random(p.height);
                this.size = p.random(p.height/2);
                this.hue = p.random(200, 260);
                this.alpha = 100;
                this.speed = p.random(0.2, 1);
            },
            display: function() {
                if(this.alpha <= 0) this.resetProperties();
                p.noStroke();
                p.fill(this.hue, 80, 60, this.alpha);
                p.rect(p.width/2, this.posY, p.width, this.size);
                
                this.alpha -= this.speed;
            },
        }
	};

	var mySketch = new p5(sketch);
}

$(window).load(setupHeaderCanvas);
