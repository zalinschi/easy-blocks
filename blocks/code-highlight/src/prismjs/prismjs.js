/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-tomorrow */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,M={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof W?new W(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function r(e,t){var a,n;switch(t=t||{},M.util.type(e)){case"Object":if(n=M.util.objId(e),t[n])return t[n];for(var i in a={},t[n]=a,e)e.hasOwnProperty(i)&&(a[i]=r(e[i],t));return a;case"Array":return n=M.util.objId(e),t[n]?t[n]:(a=[],t[n]=a,e.forEach(function(e,n){a[n]=r(e,t)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var r=document.getElementsByTagName("script");for(var t in r)if(r[t].src==n)return r[t]}return null}},isActive:function(e,n,r){for(var t="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(t))return!1;e=e.parentElement}return!!r}},languages:{extend:function(e,n){var r=M.util.clone(M.languages[e]);for(var t in n)r[t]=n[t];return r},insertBefore:function(r,e,n,t){var a=(t=t||M.languages)[r],i={};for(var l in a)if(a.hasOwnProperty(l)){if(l==e)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);n.hasOwnProperty(l)||(i[l]=a[l])}var s=t[r];return t[r]=i,M.languages.DFS(M.languages,function(e,n){n===s&&e!=r&&(this[e]=i)}),i},DFS:function e(n,r,t,a){a=a||{};var i=M.util.objId;for(var l in n)if(n.hasOwnProperty(l)){r.call(n,l,n[l],t||l);var o=n[l],s=M.util.type(o);"Object"!==s||a[i(o)]?"Array"!==s||a[i(o)]||(a[i(o)]=!0,e(o,r,l,a)):(a[i(o)]=!0,e(o,r,null,a))}}},plugins:{},highlightAll:function(e,n){M.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,r){var t={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};M.hooks.run("before-highlightall",t),t.elements=Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)),M.hooks.run("before-all-elements-highlight",t);for(var a,i=0;a=t.elements[i++];)M.highlightElement(a,!0===n,t.callback)},highlightElement:function(e,n,r){var t=M.util.getLanguage(e),a=M.languages[t];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+t;var i=e.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+t);var l={element:e,language:t,grammar:a,code:e.textContent};function o(e){l.highlightedCode=e,M.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,M.hooks.run("after-highlight",l),M.hooks.run("complete",l),r&&r.call(l.element)}if(M.hooks.run("before-sanity-check",l),!l.code)return M.hooks.run("complete",l),void(r&&r.call(l.element));if(M.hooks.run("before-highlight",l),l.grammar)if(n&&u.Worker){var s=new Worker(M.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(M.highlight(l.code,l.grammar,l.language));else o(M.util.encode(l.code))},highlight:function(e,n,r){var t={code:e,grammar:n,language:r};return M.hooks.run("before-tokenize",t),t.tokens=M.tokenize(t.code,t.grammar),M.hooks.run("after-tokenize",t),W.stringify(M.util.encode(t.tokens),t.language)},tokenize:function(e,n){var r=n.rest;if(r){for(var t in r)n[t]=r[t];delete n.rest}var a=new i;return I(a,a.head,e),function e(n,r,t,a,i,l){for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var s=t[o];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(l&&l.cause==o+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=c.alias;if(h&&!c.pattern.global){var v=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,v+"g")}for(var p=c.pattern||c,m=a.next,y=i;m!==r.tail&&!(l&&y>=l.reach);y+=m.value.length,m=m.next){var k=m.value;if(r.length>n.length)return;if(!(k instanceof W)){var b,x=1;if(h){if(!(b=z(p,y,n,f)))break;var w=b.index,A=b.index+b[0].length,P=y;for(P+=m.value.length;P<=w;)m=m.next,P+=m.value.length;if(P-=m.value.length,y=P,m.value instanceof W)continue;for(var S=m;S!==r.tail&&(P<A||"string"==typeof S.value);S=S.next)x++,P+=S.value.length;x--,k=n.slice(y,P),b.index-=y}else if(!(b=z(p,0,k,f)))continue;var w=b.index,E=b[0],O=k.slice(0,w),L=k.slice(w+E.length),N=y+k.length;l&&N>l.reach&&(l.reach=N);var j=m.prev;O&&(j=I(r,j,O),y+=O.length),q(r,j,x);var C=new W(o,g?M.tokenize(E,g):E,d,E);if(m=I(r,j,C),L&&I(r,m,L),1<x){var _={cause:o+","+u,reach:N};e(n,r,t,m.prev,y,_),l&&_.reach>l.reach&&(l.reach=_.reach)}}}}}}(e,a,n,a.head,0),function(e){var n=[],r=e.head.next;for(;r!==e.tail;)n.push(r.value),r=r.next;return n}(a)},hooks:{all:{},add:function(e,n){var r=M.hooks.all;r[e]=r[e]||[],r[e].push(n)},run:function(e,n){var r=M.hooks.all[e];if(r&&r.length)for(var t,a=0;t=r[a++];)t(n)}},Token:W};function W(e,n,r,t){this.type=e,this.content=n,this.alias=r,this.length=0|(t||"").length}function z(e,n,r,t){e.lastIndex=n;var a=e.exec(r);if(a&&t&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function I(e,n,r){var t=n.next,a={value:r,prev:n,next:t};return n.next=a,t.prev=a,e.length++,a}function q(e,n,r){for(var t=n.next,a=0;a<r&&t!==e.tail;a++)t=t.next;(n.next=t).prev=n,e.length-=a}if(u.Prism=M,W.stringify=function n(e,r){if("string"==typeof e)return e;if(Array.isArray(e)){var t="";return e.forEach(function(e){t+=n(e,r)}),t}var a={type:e.type,content:n(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(a.classes,i):a.classes.push(i)),M.hooks.run("wrap",a);var l="";for(var o in a.attributes)l+=" "+o+'="'+(a.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+l+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(M.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,t=n.code,a=n.immediateClose;u.postMessage(M.highlight(t,M.languages[r],r)),a&&u.close()},!1)),M;var e=M.util.currentScript();function r(){M.manual||M.highlightAll()}if(e&&(M.filename=e.src,e.hasAttribute("data-manual")&&(M.manual=!0)),!M.manual){var t=document.readyState;"loading"===t||"interactive"===t&&e&&e.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return M}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);