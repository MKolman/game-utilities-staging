(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7576ea86"],{"21bb":function(t,n,e){"use strict";var i=e("cfa4"),s=e.n(i);s.a},bfed:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fullscreen"},[e("canvas",{attrs:{id:"canvas"}}),e("md-button",{staticClass:"md-icon-button md-primary",staticStyle:{top:"24px",position:"absolute",left:"24px","margin-left":"0"},attrs:{to:"/"}},[e("md-icon",{staticClass:"md-size-2x"},[t._v("close")])],1),e("md-button",{staticClass:"md-fab md-fab-bottom-left md-primary",on:{click:t.undoLine}},[e("md-icon",{},[t._v("undo")])],1)],1)},s=[],a={name:"draw",data:function(){return{linesDrawn:[],windowWidth:window.innerWidth,windowHeight:window.innerHeight,canvas:null,context:null}},mounted:function(){this.canvas=document.getElementById("canvas"),this.canvas.width=2*window.innerWidth,this.canvas.height=2*window.innerHeight,this.context=this.canvas.getContext("2d"),this.initializeDraw()},methods:{undoLine:function(){this.clearCanvas(this.canvas,this.context),this.linesDrawn.pop();for(var t=0;t<this.linesDrawn.length;t++){for(var n=0;n<this.linesDrawn[t].length;n++)0==n?(this.context.moveTo(this.linesDrawn[t][n][0],this.linesDrawn[t][n][1]),this.context.beginPath()):this.context.lineTo(this.linesDrawn[t][n][0],this.linesDrawn[t][n][1]);this.context.stroke()}},getPosition:function(t){var n=this.canvas.getBoundingClientRect();return{X:t.clientX-n.left,Y:t.clientY-n.top}},initializeDraw:function(){var t=this,n=this,e=n.canvas,i=n.context;i.scale(2,2),i.strokeStyle="#444444",i.lineJoin="round",i.lineWidth=10;var s="ontouchstart"in document.documentElement;if(s){var a={isDrawing:!1,touchstart:function(t){i.beginPath(),i.moveTo(t.x,t.y),this.isDrawing=!0,n.linesDrawn.push([[t.x,t.y],[t.x,t.y]])},touchmove:function(t){this.isDrawing&&(i.lineTo(t.x,t.y),i.stroke(),n.linesDrawn[n.linesDrawn.length-1].push([t.x,t.y]))},touchend:function(t){this.isDrawing&&(this.touchmove(t),this.isDrawing=!1)}},o=function(t){var n={x:t.targetTouches[0].pageX,y:t.targetTouches[0].pageY},i=e;if(i.offsetParent)do{n.x-=i.offsetLeft,n.y-=i.offsetTop}while(null!=(i=i.offsetParent));a[t.type](n)};e.addEventListener("touchstart",o,!1),e.addEventListener("touchmove",o,!1),e.addEventListener("touchend",o,!1),e.addEventListener("touchmove",function(t){t.preventDefault()},!1)}else{var r=function(n){var s=t.getPosition(n,e);i.lineTo(s.X,s.Y),i.stroke(),t.linesDrawn[t.linesDrawn.length-1].push([s.X,s.Y])},c=function t(n){r(n),i.closePath(),e.removeEventListener("mousemove",r),e.removeEventListener("mouseup",t),e.removeEventListener("mouseout",t)};this.canvas.addEventListener("mousedown",function(n){var s=t.getPosition(n,t.canvas);i.moveTo(s.X,s.Y),i.beginPath(),t.linesDrawn.push([[s.X,s.Y]]),e.addEventListener("mousemove",r),e.addEventListener("mouseup",c),e.addEventListener("mouseout",c)})}},clearCanvas:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}},o=a,r=(e("21bb"),e("2877")),c=Object(r["a"])(o,i,s,!1,null,"dbf5b814",null);n["default"]=c.exports},cfa4:function(t,n,e){}}]);
//# sourceMappingURL=chunk-7576ea86.3d5b35f9.js.map