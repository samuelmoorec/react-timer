(this["webpackJsonptimer-app"]=this["webpackJsonptimer-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),s=(a(10),a(2)),i=a(1),o=a.n(i),u=(a(12),function(e){var t=e.laps;return c.a.createElement("div",null,function(){var e,a=0;return t.map((function(t,n){return n>0?e=c.a.createElement("p",{className:"lap"},c.a.createElement("span",{className:"lapTitleAndIndex"},c.a.createElement("span",{className:"lapTitle"},"lap"),c.a.createElement("span",{className:"lapIndex"},n+1)),c.a.createElement("span",{className:"timeAndDiff"},c.a.createElement("span",{className:"lapTime"},t.toFixed(2)),"   ",function(e,t){var a=e-t;return a>0?c.a.createElement("span",{className:"slowerLap lapDifference"},a.toFixed(2)):c.a.createElement("span",{className:"fasterLap lapDifference"},Math.abs(a).toFixed(2))}(t,a))):(a=t,e=c.a.createElement("p",{className:"lap firstLap"},c.a.createElement("span",{className:"lapTitleAndIndex"},c.a.createElement("span",{className:"lapTitle"},"lap"),c.a.createElement("span",{className:"lapIndex"},n+1)),c.a.createElement("span",{className:"lapTime"},t.toFixed(2)))),a=t,e}))}())}),m=(a(13),function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),i=Object(s.a)(l,2),m=i[0],p=i[1],f=Object(n.useState)("0.00"),d=Object(s.a)(f,2),E=d[0],b=d[1],v=Object(n.useState)(!1),h=Object(s.a)(v,2),N=h[0],O=h[1],j=Object(n.useState)([]),x=Object(s.a)(j,2),g=x[0],w=x[1],F=Object(n.useState)([]),S=Object(s.a)(F,2),T=S[0],k=S[1];Object(n.useEffect)((function(){var e=setInterval((function(){return I()}),1);return function(){clearInterval(e)}}));var I=function(){N&&b(L())},L=function(){return void 0===a?"0.00":void 0===m?(o()().diff(o()(a),"milliseconds")/1e3).toFixed(2):void 0!==m?((o()().diff(o()(a),"milliseconds")+A())/1e3).toFixed(2):""},A=function(){var e=0;return g.forEach((function(t){return e+=t})),e},C=function(e){return e.push(o()().diff(o()(a),"milliseconds")),e};return c.a.createElement("div",{className:"timer_container"},c.a.createElement("p",{className:"timer"},E),c.a.createElement("button",{onClick:function(){N?(p(o()().valueOf()),w(C(g))):r(o()().valueOf()),O((function(e){return!e}))}},N?"Pause Timer":"Start Timer"),c.a.createElement("button",{disabled:N,onClick:function(){b("0.00"),O(!1),w([]),k([])}},"Reset"),c.a.createElement("button",{disabled:!N,onClick:function(){N&&(0===T.length?(T.push(Number.parseFloat(E)),k(T)):(T.push(Number.parseFloat(E)-T.reduce((function(e,t){return e+t}))),k(T)))}},"Lap"),c.a.createElement("p",null,"Lap Average ",T.length>0?(T.reduce((function(e,t){return e+t}))/T.length).toFixed(2):"0.00","s"),c.a.createElement(u,{laps:T}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.cc7be9b9.chunk.js.map