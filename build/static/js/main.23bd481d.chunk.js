(window.webpackJsonpdot=window.webpackJsonpdot||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(9),c=a.n(n),r=a(6),l=a(1),o=a(2),d=a(4),u=a(3),p=a(5),h=a(7),m=a.n(h),g=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"content"},s.a.createElement("h3",{className:"title"},"click the dots to connect them"),s.a.createElement(b,{dots:15}))}}]),t}(s.a.Component),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={lastClicked:0,dotsVisible:2},a.clicked=a.clicked.bind(Object(r.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"clicked",value:function(e){null==this.state.lastClicked?this.setState({lastClicked:e}):14===this.state.lastClicked&&0===e?this.setState({lastClicked:14,dotsVisible:17}):this.state.lastClicked+1===e&&this.setState({lastClicked:e,dotsVisible:e+2})}},{key:"componentDidUpdate",value:function(){var e=document.getElementById("drawing-board").getContext("2d");if(this.state.dotsVisible>2){e.beginPath();var t=24*(this.state.dotsVisible-2)*Math.PI/180-Math.PI/2;e.arc(250,246,222,-Math.PI/2,t),e.strokeStyle="#FFFFFF",e.lineWidth=5,e.stroke()}else e.clearRect(0,0,500,500);17===this.state.dotsVisible&&new m.a.Burst({radius:{0:100},count:15,children:{shape:"polygon",points:5,fill:{cyan:"yellow"},angle:{360:0},duration:2e3,delay:"stagger(0, 100)"}}).tune({x:-7,y:-10}).replay()}},{key:"reset",value:function(){this.setState({lastClicked:0,dotsVisible:2})}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.state.dotsVisible&&a<this.props.dots;a++)t.push(s.a.createElement(f,{index:a,clicked:this.clicked}));return s.a.createElement("div",{className:"circle"},s.a.createElement("canvas",{id:"drawing-board",width:"500px",height:"500px"}),s.a.createElement("div",{className:"overlay"},t),s.a.createElement(k,null),s.a.createElement("img",{alt:"",className:"reload",onClick:function(){e.reset()},src:"img/reload.png"}))}}]),t}(s.a.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={pause:!0,audio:new Audio("music/circleoflife.mp3")},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"togglePause",value:function(){this.state.pause?(this.state.audio.play(),this.setState({pause:!1})):(this.state.audio.pause(),this.setState({pause:!0}))}},{key:"render",value:function(){var e=this;return this.state.pause?s.a.createElement("img",{alt:"",src:"img/mute.png",onClick:function(){return e.togglePause()},className:"music-controller"}):s.a.createElement("img",{alt:"",src:"img/volume.png",onClick:function(){return e.togglePause()},className:"music-controller"})}}]),t}(s.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new m.a.Burst({left:0,top:0,radius:{4:19},angle:45,children:{shape:"line",radius:6,scale:1,stroke:"#FD7932",strokeDasharray:"100%",strokeDashoffset:{"-100%":"100%"},duration:500,easing:"quad.out"}});document.getElementById(this.props.index).style.transform="rotate("+24*this.props.index+"deg)",document.getElementById("label-"+this.props.index.toString()).style.transform="rotate(-"+24*this.props.index+"deg)",document.getElementById("dot-"+this.props.index).addEventListener("click",(function(t){e.tune({x:t.pageX,y:t.pageY}).replay()}))}},{key:"getImage",value:function(){return"img/dot.png"}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"dot-wrapper",id:this.props.index},s.a.createElement("div",{onClick:function(){return e.props.clicked(e.props.index)},className:"dot",id:"dot-"+this.props.index},s.a.createElement("p",{id:"label-"+this.props.index.toString(),className:"label"},this.props.index+1),s.a.createElement("img",{alt:"",id:"image-"+this.props.index.toString(),src:this.getImage(this.props.index),className:"dot-image"})))}}]),t}(s.a.Component),y=g;c.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.23bd481d.chunk.js.map