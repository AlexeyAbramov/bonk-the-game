(this["webpackJsonpbonk-the-game"]=this["webpackJsonpbonk-the-game"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(4),r=s.n(n),i=(s(14),s(7)),o=s(5),l=s(6),u=s(2),d=s(9),h=s(8),m=s(0),b=function(e){var t=e.box,s=e.currentBox;return console.log(e),Object(m.jsx)("div",{className:"cell ".concat(s===t?"mole":""),onClick:s===t?e.plusScore:null})},j=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={board:[1,2,3,4,5,6,7,8,9],currentBox:0,time:30,timeleft:null,dashbord:[],score:0,isPlaying:!1},a.startGame=a.startGame.bind(Object(u.a)(a)),a.plusScore=a.plusScore.bind(Object(u.a)(a)),a}return Object(l.a)(s,[{key:"startGame",value:function(){this.setState({isPlaying:!0}),this.updateTimer(),this.moveCell()}},{key:"updateTimer",value:function(){var e=this,t=this.state.time,s=setInterval((function(){0===(t=e.state.timeleft-1)&&(e.endGame(),clearInterval(s)),e.setState({timeleft:t})}),1e3);return this.setState({timeleft:t})}},{key:"moveCell",value:function(){var e=this,t=setInterval((function(){var s=e.state.board[Math.floor(9*Math.random())];e.setState({currentBox:s}),0===e.state.timeleft&&clearInterval(t)}),700)}},{key:"endGame",value:function(){var e=this,t=Object(i.a)(this.state.dashbord),s=this.state.score;t.push(s),this.setState({isPlaying:!1,dashbord:t,score:0}),setTimeout((function(){e.setState({currentBox:0})}),500)}},{key:"plusScore",value:function(){this.setState({score:this.state.score+1})}},{key:"render",value:function(){var e=this,t=this.state,s=t.board,a=t.currentBox,c=t.timeleft,n=t.dashbord,r=t.score;return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"heading",children:[Object(m.jsx)("div",{className:"time",children:Object(m.jsxs)("h2",{className:"text",children:["\u0412\u0440\u0435\u043c\u044f: ",c]})}),Object(m.jsx)("div",{className:"dashbord",children:Object(m.jsxs)("h2",{className:"text",children:["\u0421\u0447\u0435\u0442: ",r]})})]}),Object(m.jsxs)("div",{className:"game",children:[Object(m.jsx)("div",{className:"wrapper",children:s.map((function(t,s){return Object(m.jsx)(b,{index:s,box:t,currentBox:a,plusScore:e.plusScore},t)}))}),this.state.dashbord&&Object(m.jsx)("div",{className:"dashbord",children:n.map((function(e,t){return Object(m.jsx)("p",{className:"score",children:"\u0421\u0447\u0451\u0442 ".concat(t+1," \u0438\u0433\u0440\u044b : ").concat(e)},t)}))})]}),!this.state.isPlaying&&Object(m.jsx)("button",{className:"button",onClick:this.startGame,children:"\u0418\u0433\u0440\u0430\u0442\u044c"})]})}}]),s}(c.a.Component);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.da2bc9ce.chunk.js.map