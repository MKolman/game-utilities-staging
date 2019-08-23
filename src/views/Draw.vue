<template>
  <div class="fullscreen">
    <canvas id="canvas"></canvas>
    <router-link to="/" class="close">✕</router-link>
    <a v-on:click="undoLine" class="undo">↺</a>
  </div>
</template>
<script>
export default {
  name: "draw",
  data() {
    return {
      linesDrawn: [],
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      canvas: null,
      context: null
    };
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.canvas.width = 2 * window.innerWidth;
    this.canvas.height = 2 * window.innerHeight;
    this.context = this.canvas.getContext("2d");
    this.initializeDraw();
  },
  methods: {
    undoLine: function() {
      this.clearCanvas(this.canvas, this.context);
      this.linesDrawn.pop();
      for (let line = 0; line < this.linesDrawn.length; line++) {
        for (
          let segment = 0;
          segment < this.linesDrawn[line].length;
          segment++
        ) {
          if (segment == 0) {
            this.context.moveTo(
              this.linesDrawn[line][segment][0],
              this.linesDrawn[line][segment][1]
            );
            this.context.beginPath();
          } else {
            this.context.lineTo(
              this.linesDrawn[line][segment][0],
              this.linesDrawn[line][segment][1]
            );
          }
        }
        this.context.stroke();
      }
    },

    // works out the X, Y position of the click inside the canvas from the X, Y position on the page
    getPosition: function(mouseEvent) {
      var rect = this.canvas.getBoundingClientRect();
      return {
        X: mouseEvent.clientX - rect.left,
        Y: mouseEvent.clientY - rect.top
      };
    },

    initializeDraw: function() {
      // get references to the canvas element as well as the 2D drawing context
      let canvas = this.canvas;
      var context = this.context;
      context.scale(2, 2);
      context.strokeStyle = "#444444";
      context.lineJoin = "round";
      context.lineWidth = 10;

      // This will be defined on a TOUCH device such as iPad or Android, etc.
      var is_touch_device = "ontouchstart" in document.documentElement;

      if (is_touch_device) {
        // create a drawer which tracks touch movements
        var drawer = {
          isDrawing: false,
          touchstart: function(coors) {
            context.beginPath();
            context.moveTo(coors.x, coors.y);
            this.isDrawing = true;
            this.linesDrawn.push([[coors.x, coors.y], [coors.x, coors.y]]);
          },
          touchmove: function(coors) {
            if (this.isDrawing) {
              context.lineTo(coors.x, coors.y);
              context.stroke();
              this.linesDrawn[this.linesDrawn.length - 1].push([
                coors.x,
                coors.y
              ]);
            }
          },
          touchend: function(coors) {
            if (this.isDrawing) {
              this.touchmove(coors);
              this.isDrawing = false;
            }
          }
        };

        // create a function to pass touch events and coordinates to drawer
        let draw = function(event) {
          // get the touch coordinates.  Using the first touch in case of multi-touch
          var coors = {
            x: event.targetTouches[0].pageX,
            y: event.targetTouches[0].pageY
          };

          // Now we need to get the offset of the canvas location
          var obj = canvas;

          if (obj.offsetParent) {
            // Every time we find a new object, we add its offsetLeft and offsetTop to curleft and curtop.
            do {
              coors.x -= obj.offsetLeft;
              coors.y -= obj.offsetTop;
            } while (
              // The while loop can be "while (obj = obj.offsetParent)" only, which does return null
              // when null is passed back, but that creates a warning in some editors (i.e. VS2010).
              (obj = obj.offsetParent) != null
            );
          }

          // pass the coordinates to the appropriate handler
          drawer[event.type](coors);
        };

        // attach the touchstart, touchmove, touchend event listeners.
        canvas.addEventListener("touchstart", draw, false);
        canvas.addEventListener("touchmove", draw, false);
        canvas.addEventListener("touchend", draw, false);

        // prevent elastic scrolling
        canvas.addEventListener(
          "touchmove",
          function(event) {
            event.preventDefault();
          },
          false
        );
      } else {
        // draws a line to the x and y coordinates of the mouse event inside
        // the specified element using the specified context
        let drawLine = mouseEvent => {
          var position = this.getPosition(mouseEvent, canvas);

          context.lineTo(position.X, position.Y);
          context.stroke();
          this.linesDrawn[this.linesDrawn.length - 1].push([
            position.X,
            position.Y
          ]);
        };

        // draws a line from the last coordiantes in the path to the finishing
        // coordinates and unbind any event handlers which need to be preceded
        // by the mouse down event
        let finishDrawing = function(mouseEvent) {
          // draw the line to the finishing coordinates
          drawLine(mouseEvent);

          context.closePath();

          // remove event handlers
          canvas.removeEventListener("mousemove", drawLine);
          canvas.removeEventListener("mouseup", finishDrawing);
          canvas.removeEventListener("mouseout", finishDrawing);
        };

        // start drawing when the mousedown event fires, and attach handlers to
        // draw a line to wherever the mouse moves to
        this.canvas.addEventListener("mousedown", mouseEvent => {
          var position = this.getPosition(mouseEvent, this.canvas);
          context.moveTo(position.X, position.Y);
          context.beginPath();
          this.linesDrawn.push([[position.X, position.Y]]);

          // attach event handlers
          canvas.addEventListener("mousemove", drawLine);
          canvas.addEventListener("mouseup", finishDrawing);
          canvas.addEventListener("mouseout", finishDrawing);
        });
      }
    },

    // Clear the canvas context using the canvas width and height
    clearCanvas: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
};
</script>
<style scoped lang="scss">
.fullscreen {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

.undo,
.close {
  position: absolute;
  left: 0;
  font-size: 3em;
  text-decoration: none;
  &.undo {
    bottom: 0;
    cursor: pointer;
  }
  &.close {
    top: 0;
  }
}
</style>
