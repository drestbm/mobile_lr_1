(this.webpackJsonpr_mobile=this.webpackJsonpr_mobile||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/yes.1defd085.svg"},function(e,t,n){e.exports=n.p+"static/media/no.41cd842a.svg"},function(e,t,n){e.exports=n.p+"static/media/reload.8f19d1d7.svg"},function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),s=n.n(i),c=n(1),o=n(2),u=n(4),l=n(3),h=n(5),m=n(6),d=(n(17),n(9)),f=n.n(d),p=n(10),b=n.n(p),v=n(11),g=n.n(v),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-container"},r.a.createElement("h1",{className:"text"},this.props.text))}}]),t}(r.a.Component),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).viewRef=r.a.createRef(),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"preloader"},r.a.createElement("img",{className:"preloader__image_animate",src:g.a}))}}]),t}(r.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"photo-container"},r.a.createElement("img",{className:"photo",src:this.props.photo}))}}]),t}(r.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"but",onClick:this.props.func},this.props.text)}}]),t}(r.a.Component),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={page:"home",status:"yes",show:!1,min:0,max:100,value:0},n.handleMinChange=n.handleMinChange.bind(Object(m.a)(n)),n.handleMaxChange=n.handleMaxChange.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({show:!0})}),3e3)}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"getRandomArbitrary",value:function(){return Math.floor(Math.random()*(this.state.max-this.state.min)+this.state.min)}},{key:"getRandomInt",value:function(){return 0===Math.floor(2*Math.random())}},{key:"renderHeader",value:function(e){return r.a.createElement(y,{text:e})}},{key:"renderPhoto",value:function(e){return r.a.createElement(O,{photo:e})}},{key:"renderYN",value:function(){return this.state.show?"yes"===this.state.status?this.renderPhoto(f.a):this.renderPhoto(b.a):r.a.createElement(j,null)}},{key:"changeStatus",value:function(){var e=this;clearTimeout(this.timeoutId),this.setState({show:!1}),this.timeoutId=setTimeout((function(){e.setState({show:!0})}),3e3),this.getRandomInt()?this.setState({status:"yes"}):this.setState({status:"no"})}},{key:"renderButton",value:function(e,t){return r.a.createElement(E,{text:e,func:t})}},{key:"changePage",value:function(e){this.setState({page:e})}},{key:"handleMinChange",value:function(e){this.setState({min:Math.floor(e.target.value)})}},{key:"handleMaxChange",value:function(e){this.setState({max:Math.floor(e.target.value)})}},{key:"page",value:function(){var e=this;return"home"===this.state.page?r.a.createElement("div",null,this.renderHeader("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e"),this.renderButton("\u0414\u0430/\u041d\u0435\u0442",(function(){e.changePage("yesno")})),this.renderButton("\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0447\u0438\u0441\u0435\u043b",(function(){e.changePage("numgen")}))):"yesno"===this.state.page?r.a.createElement("div",null,this.renderYN(),this.renderButton("\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c",(function(){e.state.show&&e.changeStatus()})),this.renderButton("\u041d\u0430\u0437\u0430\u0434",(function(){e.state.show&&e.changePage("home")}))):"numgen"===this.state.page?r.a.createElement("div",null,r.a.createElement("div",{className:"number-container"},r.a.createElement("h2",{className:"number"}," ",this.state.value," ")),r.a.createElement("table",{className:"in-container"},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"label"}," min: ")),r.a.createElement("td",null,r.a.createElement("div",{className:"label"}," max: "))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{className:"in",type:"number",value:this.state.min,onChange:this.handleMinChange})),r.a.createElement("td",null,r.a.createElement("input",{className:"in",type:"number",value:this.state.max,onChange:this.handleMaxChange})))),this.renderButton("\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c",(function(){e.setState({value:e.getRandomArbitrary()})})),this.renderButton("\u041d\u0430\u0437\u0430\u0434",(function(){e.changePage("home","\u041d\u0430\u0439\u0434\u0438 \u0432\u0442\u043e\u0440\u0443\u044e \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u043a\u0443")}))):void 0}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},this.page())}}]),t}(r.a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null)}}]),t}(r.a.Component);s.a.render(r.a.createElement(x,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.d8c5fa2a.chunk.js.map