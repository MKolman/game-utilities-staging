(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-246b0ee4"],{"11e9":function(e,t,n){var o=n("52a7"),i=n("4630"),a=n("6821"),c=n("6a99"),r=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?u:function(e,t){if(e=a(e),t=c(t,!0),s)try{return u(e,t)}catch(n){}if(r(e,t))return i(!o.f.call(e,t),e[t])}},"1c6a":function(e,t,n){"use strict";var o=n("7809"),i=n.n(o);i.a},"1e0f":function(e,t,n){},"2b72":function(e,t,n){},"41fa":function(e,t,n){"use strict";var o=n("8101"),i=n.n(o);i.a},"5dbc":function(e,t,n){var o=n("d3f4"),i=n("8b97").set;e.exports=function(e,t,n){var a,c=t.constructor;return c!==n&&"function"==typeof c&&(a=c.prototype)!==n.prototype&&o(a)&&i&&i(e,a),e}},7809:function(e,t,n){},8101:function(e,t,n){},8410:function(e,t,n){"use strict";var o=n("1e0f"),i=n.n(o);i.a},"8b97":function(e,t,n){var o=n("d3f4"),i=n("cb7c"),a=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{o=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),o(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,n){return a(e,n),t?e.__proto__=n:o(e,n),e}}({},!1):void 0),check:a}},9093:function(e,t,n){var o=n("ce10"),i=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,i)}},"94ed":function(e,t,n){"use strict";var o=n("2b72"),i=n.n(o);i.a},aa77:function(e,t,n){var o=n("5ca1"),i=n("be13"),a=n("79e5"),c=n("fdef"),r="["+c+"]",s="​",u=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),m=function(e,t,n){var i={},r=a(function(){return!!c[e]()||s[e]()!=s}),u=i[e]=r?t(f):c[e];n&&(i[n]=u),o(o.P+o.F*r,"String",i)},f=m.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=m},c14f:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"scores"}},[n("h1",[e._v("SCORE")]),n("md-table",{staticStyle:{width:"100%"}},e._l(e.scores,function(t,o){return n("md-table-row",{key:o},[n("md-table-cell",[n("md-button",{staticClass:"cell md-raised",on:{click:function(e){t.nameDialog=!0}}},[e._v(" "+e._s(t.name)+" ")])],1),n("md-table-cell",[n("md-button",{staticClass:"cell md-raised"},[e._v(" "+e._s(t.value)+" ")])],1),n("md-table-cell",[n("ButtonPress",{staticClass:"cell md-raised",on:{long:function(e){t.scoreDialog=!0},click:function(e){t.value-=1}}},[n("md-icon",[e._v("remove")])],1)],1),n("md-table-cell",[n("ButtonPress",{staticClass:"cell md-raised",on:{long:function(e){t.scoreDialog=!0},click:function(e){t.value+=1}}},[n("md-icon",[e._v("add")])],1)],1),n("ScoreDialog",e._b({on:{close:function(n){return e.closeScore(t,n)}}},"ScoreDialog",t,!1)),n("NameDialog",e._b({attrs:{isNew:!1},on:{close:function(n){return e.closeName(t,n)},delete:function(t){return e.scores.splice(o,1)}}},"NameDialog",t,!1))],1)}),1),n("md-button",{staticClass:"md-fab-bottom-center md-fab md-primary",on:{click:function(t){e.newUserDialog=!0}}},[n("md-icon",[e._v("person_add")])],1),n("NameDialog",{attrs:{nameDialog:e.newUserDialog,num:e.scores.length,isNew:!0},on:{close:function(t){return e.createUser(t)}}})],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-dialog",{attrs:{"md-fullscreen":!1,"md-active":e.scoreDialog},on:{"md-clicked-outside":function(t){return e.close()}}},[n("md-dialog-title",[e._v(e._s(e.name)+": "+e._s(e.value)+" + "+e._s(e.addition)+" = "+e._s(e.value+e.addition))]),n("md-dialog-content",e._l([1,-1],function(t){return n("span",{key:t},[e._l([1,2,5,10,20],function(o){return n("md-button",{key:o*t,staticClass:"md-icon-button md-raised",on:{click:function(n){e.addition+=o*t}}},[e._v(" "+e._s(t>0?"+":"-")+e._s(o)+" ")])}),n("br")],2)}),0),n("md-dialog-actions",[n("md-button",{on:{click:function(t){return e.close()}}},[e._v("Close")]),n("md-button",{staticClass:"md-primary",on:{click:function(t){return e.save()}}},[e._v("Save")])],1)],1)},c=[],r=(n("c5f6"),{name:"ScoreDialog",props:{name:String,value:Number,scoreDialog:Boolean},data:function(){return{addition:0,setDefault:!1}},methods:{save:function(){this.$emit("close",this.addition)},close:function(){this.$emit("close")}}}),s=r,u=(n("8410"),n("2877")),l=Object(u["a"])(s,a,c,!1,null,"7e72ec30",null),m=l.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-dialog",{attrs:{"md-fullscreen":!1,"md-active":e.nameDialog},on:{"md-clicked-outside":function(t){return e.$emit("close")}}},[n("md-dialog-title",[e._v("Name")]),n("md-dialog-content",[n("md-field",[n("md-input",{attrs:{autofocus:"",placeholder:"Player "+e.num},model:{value:e.tempName,callback:function(t){e.tempName=t},expression:"tempName"}})],1)],1),e.isNew?e._e():n("md-dialog-actions",[n("md-button",{staticClass:"md-primary md-raised",on:{click:function(t){return e.$emit("delete")}}},[e._v("Delete")]),n("md-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("Close")]),n("md-button",{staticClass:"md-primary",on:{click:function(t){return e.$emit("close",e.tempName||"Player "+e.num)}}},[e._v("Save")])],1),e.isNew?n("md-dialog-actions",[n("md-button",{on:{click:function(t){return e.$emit("close")}}},[e._v("Close")]),n("md-button",{staticClass:"md-primary",on:{click:function(t){return e.$emit("close",e.tempName||"Player "+e.num)}}},[e._v("Create")])],1):e._e()],1)},d=[],p=(n("7f7f"),{name:"ScoreDialog",props:{name:String,nameDialog:Boolean,num:Number,isNew:Boolean},data:function(){return{tempName:""}},watch:{name:function(){this.reset()},nameDialog:function(){this.reset()}},mounted:function(){this.tempName=this.name},methods:{reset:function(){this.tempName=this.name},save:function(){this.$emit("close",this.addition)},close:function(){this.$emit("close")}}}),h=p,g=(n("1c6a"),Object(u["a"])(h,f,d,!1,null,"86b0357a",null)),v=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-button",{class:{"md-primary":null!==e.timeout},on:{mousedown:function(t){return e.handleMousedown()},touchstart:function(t){return e.handleMousedown()},mouseup:function(t){return e.handleMouseup()}}},[e._t("default")],2)},b=[],N={name:"ButtonPress",data:function(){return{timeout:null}},methods:{handleMousedown:function(){var e=this;null===this.timeout&&(this.timeout=setTimeout(function(){e.timeout=null,e.$emit("long")},300))},handleMouseup:function(){null!==this.timeout&&(this.$emit("click"),clearTimeout(this.timeout),this.timeout=null)}}},D=N,y=(n("94ed"),Object(u["a"])(D,_,b,!1,null,null,null)),w=y.exports;function S(e,t){var n=localStorage.getItem(e);if(n)try{return JSON.parse(n)}catch(o){localStorage.removeItem(e)}return t}function k(e,t){localStorage.setItem(e,JSON.stringify(t))}var I={name:"scores",components:{ScoreDialog:m,NameDialog:v,ButtonPress:w},computed:{openDialog:{get:function(){return-1!==this.changeNameIndex},set:function(e){!1===e&&(this.changeNameIndex=-1)}}},data:function(){return{scores:[],newUserDialog:!1}},mounted:function(){this.scores=S("scores",[]);for(var e=0;e<this.scores.length;e++)void 0===this.scores[e].nameDialog&&(this.scores[e].nameDialog=!1),void 0===this.scores[e].scoreDialog&&(this.scores[e].scoreDialog=!1)},watch:{scores:{handler:function(){k("scores",this.scores)},deep:!0}},methods:{closeScore:function(e,t){e.scoreDialog=!1,t&&(e.value+=t)},closeName:function(e,t){e.nameDialog=!1,t&&(e.name=t)},createUser:function(e){this.newUserDialog=!1,e&&this.scores.push({name:e,value:0,nameDialog:!1,scoreDialog:!1})}}},E=I,C=(n("41fa"),Object(u["a"])(E,o,i,!1,null,null,null));t["default"]=C.exports},c5f6:function(e,t,n){"use strict";var o=n("7726"),i=n("69a8"),a=n("2d95"),c=n("5dbc"),r=n("6a99"),s=n("79e5"),u=n("9093").f,l=n("11e9").f,m=n("86cc").f,f=n("aa77").trim,d="Number",p=o[d],h=p,g=p.prototype,v=a(n("2aeb")(g))==d,_="trim"in String.prototype,b=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=_?t.trim():f(t,3);var n,o,i,a=t.charCodeAt(0);if(43===a||45===a){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+t}for(var c,s=t.slice(2),u=0,l=s.length;u<l;u++)if(c=s.charCodeAt(u),c<48||c>i)return NaN;return parseInt(s,o)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(v?s(function(){g.valueOf.call(n)}):a(n)!=d)?c(new h(b(t)),n,p):b(t)};for(var N,D=n("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;D.length>y;y++)i(h,N=D[y])&&!i(p,N)&&m(p,N,l(h,N));p.prototype=g,g.constructor=p,n("2aba")(o,d,p)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-246b0ee4.ee7c4fe2.js.map