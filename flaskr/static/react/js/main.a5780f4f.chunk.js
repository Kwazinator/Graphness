(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{169:function(e,t,a){e.exports=a(353)},174:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),o=a.n(c),i=(a(174),a(34)),u=a(35),s=a(53),l=a(28),m=a(37),h=(a(83),a(12));function p(e){return function(){var t,a=Object(l.a)(e);if(v()){var n=Object(l.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(s.a)(this,t)}}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var f=function(e){Object(m.a)(a,e);var t=p(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.name,r.a.createElement(h.d,{width:this.props.width,height:this.props.height,data:this.props.data,margin:{top:5,right:30,left:20,bottom:5},onClick:this.props.onClick},r.a.createElement(h.a,{strokeDasharray:"3 3"}),r.a.createElement(h.f,{dataKey:"name"}),r.a.createElement(h.g,null),r.a.createElement(h.e,null),r.a.createElement(h.b,null),r.a.createElement(h.c,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),r.a.createElement(h.c,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})))}}]),a}(r.a.Component),d=function(e){Object(m.a)(a,e);var t=p(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={token:1,dataarray:Array(9).fill([{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}]),namearray:Array(9).fill("name2")},n}return Object(u.a)(a,[{key:"handleClick",value:function(e){var t=this.state.dataarray;t[e]=[{name:"Page B",uv:4e3,pv:2400,amt:2400},{name:"Page C",uv:3e3,pv:1398,amt:2210},{name:"Page D",uv:2e3,pv:9800,amt:2290},{name:"Page E",uv:2780,pv:3908,amt:2e3},{name:"Page F",uv:1890,pv:4800,amt:2181},{name:"Page G",uv:2390,pv:3800,amt:2500},{name:"Page H",uv:3490,pv:4300,amt:2100}],this.setState({dataarray:t,namearray:Array(9).fill("name1")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"graph-x"},r.a.createElement("div",{className:"graph-graphDetails"},r.a.createElement(f,{data:this.state.dataarray[0],name:this.state.namearray[0],onClick:function(){return e.handleClick(0)},height:this.props.height,width:this.props.width})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(139);a(352);function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var E=function(e){Object(m.a)(n,e);var t,a=(t=n,function(){var e,a=Object(l.a)(t);if(g()){var n=Object(l.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(s.a)(this,e)});function n(e){var t;return Object(i.a)(this,n),t=a.call(this,e),"bar"==e.type&&(t.state={config:{type:"bar",series:[{values:[4,5,3,4,5,3,5,4,11]}]}}),"line"==e.type&&(t.state={config:{type:"line",series:[{values:[20,40,25,50,15,45,33,34]},{values:[5,30,21,18,59,50,28,33]},{values:[30,5,18,21,33,41,29,15]}]}}),t}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(y.a,{data:this.state.config,width:400,height:240})}}]),n}(r.a.Component);o.a.render(r.a.createElement(d,{width:600,height:360}),document.getElementById("root")),o.a.render(r.a.createElement(d,{width:400,height:240}),document.getElementById("row1")),o.a.render(r.a.createElement(E,{type:"bar"}),document.getElementById("row2")),o.a.render(r.a.createElement(E,{type:"line"}),document.getElementById("row3")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.a5780f4f.chunk.js.map