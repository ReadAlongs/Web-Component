(()=>{"use strict";var e,v={},m={};function t(e){var i=m[e];if(void 0!==i)return i.exports;var r=m[e]={exports:{}};return v[e].call(r.exports,r,r.exports,t),r.exports}t.m=v,e=[],t.O=(i,r,o,u)=>{if(!r){var a=1/0;for(n=0;n<e.length;n++){for(var[r,o,u]=e[n],s=!0,l=0;l<r.length;l++)(!1&u||a>=u)&&Object.keys(t.O).every(b=>t.O[b](r[l]))?r.splice(l--,1):(s=!1,u<a&&(a=u));if(s){e.splice(n--,1);var f=o();void 0!==f&&(i=f)}}return i}u=u||0;for(var n=e.length;n>0&&e[n-1][2]>u;n--)e[n]=e[n-1];e[n]=[r,o,u]},t.d=(e,i)=>{for(var r in i)t.o(i,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((i,r)=>(t.f[r](e,i),i),[])),t.u=e=>e+".c65f12fcdcd1e03c.js",t.miniCssF=e=>{},t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={},i="studio-web:";t.l=(r,o,u,n)=>{if(e[r])e[r].push(o);else{var a,s;if(void 0!==u)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==i+u){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",i+u),a.src=t.tu(r)),e[r]=[o];var c=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var h=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(_=>_(b)),g)return g(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),t.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.tt=()=>(void 0===e&&(e={createScriptURL:i=>i},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),t.tu=e=>t.tt().createScriptURL(e),t.p="",(()=>{t.b=document.baseURI||self.location.href;var e={666:0};t.f.j=(o,u)=>{var n=t.o(e,o)?e[o]:void 0;if(0!==n)if(n)u.push(n[2]);else if(666!=o){var a=new Promise((d,c)=>n=e[o]=[d,c]);u.push(n[2]=a);var s=t.p+t.u(o),l=new Error;t.l(s,d=>{if(t.o(e,o)&&(0!==(n=e[o])&&(e[o]=void 0),n)){var c=d&&("load"===d.type?"missing":d.type),p=d&&d.target&&d.target.src;l.message="Loading chunk "+o+" failed.\n("+c+": "+p+")",l.name="ChunkLoadError",l.type=c,l.request=p,n[1](l)}},"chunk-"+o,o)}else e[o]=0},t.O.j=o=>0===e[o];var i=(o,u)=>{var l,f,[n,a,s]=u,d=0;if(n.some(p=>0!==e[p])){for(l in a)t.o(a,l)&&(t.m[l]=a[l]);if(s)var c=s(t)}for(o&&o(u);d<n.length;d++)t.o(e,f=n[d])&&e[f]&&e[f][0](),e[f]=0;return t.O(c)},r=self.webpackChunkstudio_web=self.webpackChunkstudio_web||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))})()})();