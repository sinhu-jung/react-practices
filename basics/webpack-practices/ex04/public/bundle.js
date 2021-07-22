(()=>{"use strict";var e,n,t,r,o,a,i,c,s,u,d,l,f,p,v={56:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(645),o=t.n(r),a=t(815),i=o()((function(e){return e[1]}));i.i(a.Z),i.push([e.id,".Header{\n    width: 180px;\n    text-align: center; \n    margin:100px auto;\n    padding: 20px;\n    border: 2px solid #999;\n    color: #1144fe;\n    background-color:#cdc1ce\n}",""]);const c=i},815:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"html {\n    box-sizing: border-box;\n}\n\n*, *:before, *:after {\n    box-sizing: inherit\n}\n\nbody {\n    margin: 0;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    background-color:#dfdf99;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    margin:0;\n    padding:0;\n}",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var f=t(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(n[f].references++,n[f].updater(p)):n.push({identifier:l,updater:o(p,r),references:1}),i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function m(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return v[e](t,t.exports,m),t.exports}m.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return m.d(n,{a:n}),n},m.d=(e,n)=>{for(var t in n)m.o(n,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},m.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=m(379),n=m.n(e),t=m(795),r=m.n(t),o=m(569),a=m.n(o),i=m(565),c=m.n(i),s=m(216),u=m.n(s),d=m(589),l=m.n(d),f=m(56),(p={}).styleTagTransform=l(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=u(),n()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals,document.getElementById("root").appendChild((()=>{const e=document.createElement("h1");return e.className="Header",e.textContent="Hello World2",e})())})();