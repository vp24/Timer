(this.webpackJsonppomo=this.webpackJsonppomo||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/ting.24ab9209.wav"},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(2),s=n.n(c),o=(n(13),n(3)),r=n(4),u=n(7),l=n(6),m=(n(14),n(5)),d=n.n(m),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).secondUp=function(){a.setState((function(e,t){return{timer:e.timer+1}}))},a.secondDown=function(){a.setState((function(e,t){return{timer:e.timer-1}}))},a.minuteUp=function(){a.setState((function(e,t){return{timer:e.timer+60}}))},a.minuteDown=function(){a.setState((function(e,t){return{timer:e.timer-60}}))},a.pauseClicked=function(){!0===a.state.isActive&&!1===a.state.isEnded?a.timerID=setInterval((function(){return a.secondDown()}),1e3):clearInterval(a.timerID)},a.resetClicked=function(){a.setState({timer:300,isActive:!1,isEnded:!1}),clearInterval(a.timerID)},a.pauseButton=function(){!1===a.state.isEnded&&a.setState((function(e){return{isActive:!e.isActive}}),(function(){return a.pauseClicked()}))},a.showTime=function(){var e=Math.floor(a.state.timer/60),t=a.state.timer%60;return t>9?i.a.createElement("h1",{className:"largerFont"},a.state.isEnded?"Time's Up":"".concat(e,":").concat(t)):i.a.createElement("h1",{className:"largerFont"},a.state.isEnded?"Time's Up":"".concat(e,":0").concat(t))},a.audio=new Audio(d.a),a.play=function(){a.audio.play()},a.state={timer:300,isActive:!1,isEnded:!1},a}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(){this.state.timer<=0&&!1===this.state.isEnded&&(this.play(),clearInterval(this.timerID),this.setState({isActive:!1,isEnded:!0}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("h2",{className:"title"},"Clock"),this.showTime(),i.a.createElement("div",{className:"times"},i.a.createElement("p",null,"Minutes"),i.a.createElement("div",{className:"minutes"},i.a.createElement("button",{className:"timeButton",onClick:function(){return e.minuteUp()}},"+"),i.a.createElement("button",{className:"timeButton",onClick:function(){return e.minuteDown()}},"-")),i.a.createElement("p",null,"Seconds"),i.a.createElement("div",{className:"seconds"},i.a.createElement("button",{className:"timeButton",onClick:function(){return e.secondUp()}},"+"),i.a.createElement("button",{className:"timeButton",onClick:function(){return e.secondDown()}},"-"))),i.a.createElement("div",{className:"resume"},i.a.createElement("button",{className:"resumeButton",onClick:function(){return e.pauseButton()}},this.state.isActive?"Pause":"Start")),i.a.createElement("div",{className:"reset"},i.a.createElement("button",{className:"resetButton",onClick:function(){return e.resetClicked()}},"Reset")))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c25dd800.chunk.js.map