(this["webpackJsonpreact-drag-and-drop-react-beautiful-dnd"]=this["webpackJsonpreact-drag-and-drop-react-beautiful-dnd"]||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(3),i=n(0),o=n.n(i),l=n(2),s=n.n(l),c=n(1);const d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}const p=(e,t=0)=>Array.from({length:e},(e,t)=>t).map(e=>({id:"item-".concat(e+t,"-").concat((new Date).getTime()),content:"No".concat(e+1+t)})),f=[],b=(e,t)=>Object(a.a)({userSelect:"none",padding:5,margin:3,width:80,justifyContent:"center",border:"solid",background:e?"lightgreen":"grey"},t),y=e=>({background:e?"lightblue":"lightgrey",padding:5,paddingBottom:35,margin:5,width:100,minHeight:200,position:"relative"}),u={position:"absolute",bottom:0,margin:5},m={display:"flex",justifyContent:"center"};function h(){const e=Object(i.useState)([p(4),p(4,4),p(4,8),p(7,12),p(6,19)]),t=Object(r.a)(e,2),n=t[0],a=t[1];function l(){if(n[0].length<4)return;const e=[];n.map(t=>e.push([].concat(t))),f.push(e);const t=n[0].slice(0,4),r=n[3].slice(n[3].length-2,n[3].length),i=[...n];[...Array(2)].map(()=>i[3].pop()),i[3]=[...i[3],...t.slice(2,3)],i[3]=[...i[3],...t.slice(0,1)],i[3]=[...i[3],...r],i[3]=[...i[3],...t.slice(3,4)],i[3]=[...i[3],...t.slice(1,2)];const o=i[3].slice(0,4);i[0]=o,[...Array(4)].map(()=>i[3].shift()),a(i.filter(e=>e.length))}function s(){if(n[1].length<4)return;const e=n[1].slice(0,4),t=n[3].slice(n[3].length-2,n[3].length),r=[...n];[...Array(2)].map(()=>r[3].pop()),r[3]=[...r[3],...e.slice(2,3)],r[3]=[...r[3],...e.slice(0,1)],r[3]=[...r[3],...t],r[3]=[...r[3],...e.slice(3,4)],r[3]=[...r[3],...e.slice(1,2)];const i=r[3].slice(0,4);r[1]=i,[...Array(4)].map(()=>r[3].shift()),a(r.filter(e=>e.length))}function d(){if(n[2].length<4)return;const e=n[2].slice(0,4),t=n[3].slice(n[3].length-2,n[3].length),r=[...n];[...Array(2)].map(()=>r[3].pop()),r[3]=[...r[3],...e.slice(2,3)],r[3]=[...r[3],...e.slice(0,1)],r[3]=[...r[3],...t],r[3]=[...r[3],...e.slice(3,4)],r[3]=[...r[3],...e.slice(1,2)];const i=r[3].slice(0,4);r[2]=i,[...Array(4)].map(()=>r[3].shift()),a(r.filter(e=>e.length))}return o.a.createElement(c.a,{onDragEnd:function(e){const t=e.source,i=e.destination;if(!i)return;const o=+t.droppableId,l=+i.droppableId;if(o===l){const e=((e,t,n)=>{const a=Array.from(e),i=a.splice(t,1),o=Object(r.a)(i,1)[0];return a.splice(n,0,o),a})(n[o],t.index,i.index),l=[...n];l[o]=e,a(l)}else{const e=((e,t,n,a)=>{const i=Array.from(e),o=Array.from(t),l=i.splice(n.index,1),s=Object(r.a)(l,1)[0];o.splice(a.index,0,s);const c={};return c[n.droppableId]=i,c[a.droppableId]=o,c})(n[o],n[l],t,i),s=[...n];s[o]=e[o],s[l]=e[l],a(s.filter(e=>e.length))}}},o.a.createElement("div",null,o.a.createElement("div",{style:m},o.a.createElement(c.c,{key:0,droppableId:"".concat(0)},(e,t)=>o.a.createElement("div",Object.assign({ref:e.innerRef,style:y(t.isDraggingOver)},e.droppableProps),"\u7b2c1\u30b3\u30fc\u30c8",n[0].map((e,t)=>o.a.createElement(c.b,{key:e.id,draggableId:e.id,index:t},(t,n)=>o.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:b(n.isDragging,t.draggableProps.style)}),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},e.content)))),e.placeholder,o.a.createElement("button",{type:"button",onClick:l,style:u},"\u7d42\u4e86"))),o.a.createElement(c.c,{key:1,droppableId:"".concat(1)},(e,t)=>o.a.createElement("div",Object.assign({ref:e.innerRef,style:y(t.isDraggingOver)},e.droppableProps),"\u7b2c2\u30b3\u30fc\u30c8",n[1].map((e,t)=>o.a.createElement(c.b,{key:e.id,draggableId:e.id,index:t},(t,n)=>o.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:b(n.isDragging,t.draggableProps.style)}),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},e.content)))),e.placeholder,o.a.createElement("button",{type:"button",onClick:s,style:u},"\u7d42\u4e86"))),o.a.createElement(c.c,{key:2,droppableId:"".concat(2)},(e,t)=>o.a.createElement("div",Object.assign({ref:e.innerRef,style:y(t.isDraggingOver)},e.droppableProps),"\u7b2c3\u30b3\u30fc\u30c8",n[2].map((e,t)=>o.a.createElement(c.b,{key:e.id,draggableId:e.id,index:t},(t,n)=>o.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:b(n.isDragging,t.draggableProps.style)}),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},e.content)))),e.placeholder,o.a.createElement("button",{type:"button",onClick:d,style:u},"\u7d42\u4e86")))),o.a.createElement("div",{style:m},o.a.createElement("button",{type:"button",onClick:function(){if(f.length<1)return;const e=f[f.length-1].slice();f.pop(),a(e)}},"Ctrl+Z")),o.a.createElement("div",{style:m},o.a.createElement(c.c,{key:3,droppableId:"".concat(3)},(e,t)=>o.a.createElement("div",Object.assign({ref:e.innerRef,style:y(t.isDraggingOver)},e.droppableProps),"\u9806\u756a\u5f85\u3061",n[3].map((e,t)=>o.a.createElement(c.b,{key:e.id,draggableId:e.id,index:t},(t,n)=>o.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:b(n.isDragging,t.draggableProps.style)}),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},e.content)))),e.placeholder)),o.a.createElement(c.c,{key:4,droppableId:"".concat(4)},(e,t)=>o.a.createElement("div",Object.assign({ref:e.innerRef,style:y(t.isDraggingOver)},e.droppableProps),"\u4f11\u307f",n[4].map((e,t)=>o.a.createElement(c.b,{key:e.id,draggableId:e.id,index:t},(t,n)=>o.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:b(n.isDragging,t.draggableProps.style)}),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},e.content)))),e.placeholder)))))}const v=document.getElementById("root");s.a.render(o.a.createElement(h,null),v),function(e){if("serviceWorker"in navigator){if(new URL("/coat-app-dnd",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("/coat-app-dnd","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):g(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(t,e)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.b222bf2c.chunk.js.map