(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53529c40"],{1288:function(t,s,e){},"41fa":function(t,s,e){"use strict";var a=e("8101"),c=e.n(a);c.a},8101:function(t,s,e){},c14f:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("Score")],1)},c=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"md-layout md-layout-item md-size-100"},[e("h1",{staticClass:"md-layout-item md-size-100"},[t._v("SCORE")]),t._l(t.scores,function(s,a){return e("HalfButton",{key:a,staticClass:"flex-button"},[0==s.alt?e("span",{staticClass:"md-layout-item md-size-20",on:{click:function(t){s.value-=5}}},[t._v(" –5 ")]):t._e(),0==s.alt?e("span",{staticClass:"border md-layout-item md-size-20",on:{click:function(t){s.value-=1}}},[t._v(" –1 ")]):t._e(),1==s.alt?e("span",{staticClass:"md-layout-item md-size-20",on:{click:function(t){s.alt=0}}},[e("md-icon",{staticClass:"md-size-2x"},[t._v("arrow_back")])],1):t._e(),1==s.alt?e("span",{staticClass:"border md-layout-item md-size-20",on:{click:function(e){return t.scores.push({value:s.value,alt:0})}}},[e("md-icon",{staticClass:"md-size-2x"},[t._v("filter_none")])],1):t._e(),e("input",{staticClass:"md-input md-layout-item md-size-20",attrs:{type:"number"},domProps:{value:s.value},on:{focus:function(t){s.alt=1}}}),0==s.alt?e("span",{staticClass:"md-layout-item md-size-20",on:{click:function(t){s.value+=1}}},[t._v(" +1 ")]):t._e(),0==s.alt?e("span",{staticClass:"border md-layout-item md-size-20",on:{click:function(t){s.value+=5}}},[t._v(" +5 ")]):t._e(),1==s.alt?e("span",{staticClass:"md-layout-item md-size-20",on:{click:function(s){return t.scores.splice(a,1)}}},[e("md-icon",{staticClass:"md-size-2x"},[t._v("delete")])],1):t._e(),1==s.alt?e("span",{staticClass:"border md-layout-item md-size-20",on:{click:function(t){s.value=0}}},[e("md-icon",{staticClass:"md-size-2x"},[t._v("cached")])],1):t._e()])}),e("HalfButton",{on:{click:function(s){return t.scores.push({value:0,alt:0})}}},[t._v("+")])],2)},i=[],o={name:"Score",data:function(){return{scores:[]}},watch:{scores:{handler:function(){localStorage.setItem("scores",JSON.stringify(this.scores))},deep:!0}},mounted:function(){this.scores=this.loadScores()},methods:{loadScores:function(){var t=localStorage.getItem("scores");if(t)try{return JSON.parse(t)}catch(s){localStorage.removeItem("scores")}return[{value:0,alt:0}]}}},l=o,u=(e("c390"),e("2877")),r=Object(u["a"])(l,n,i,!1,null,null,null),m=r.exports,d={name:"scores",components:{Score:m}},f=d,v=(e("41fa"),Object(u["a"])(f,a,c,!1,null,null,null));s["default"]=v.exports},c390:function(t,s,e){"use strict";var a=e("1288"),c=e.n(a);c.a}}]);
//# sourceMappingURL=chunk-53529c40.7040028d.js.map