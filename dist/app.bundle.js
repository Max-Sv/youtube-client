!function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=9)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[e].concat(o).concat([r]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&i[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var i=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}n[t]=i}return n[t]}}(),c=null,l=0,d=[],u=e(4);function p(t,n){for(var e=0;e<t.length;e++){var i=t[e],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(v(i.parts[a],n))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(v(i.parts[a],n));o[i.id]={id:i.id,refs:1,parts:s}}}}function h(t,n){for(var e=[],i={},r=0;r<t.length;r++){var o=t[r],a=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):e.push(i[a]={id:a,parts:[s]})}return e}function f(t,n){var e=s(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),d.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertAt.before,e);e.insertBefore(n,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=d.indexOf(t);n>=0&&d.splice(n,1)}function b(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return e.nc}();i&&(t.attrs.nonce=i)}return g(n,t.attrs),f(t,n),n}function g(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function v(t,n){var e,i,r,o;if(n.transform&&t.css){if(!(o="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=o}if(n.singleton){var a=l++;e=c||(c=b(n)),i=w.bind(null,e,a,!1),r=w.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(n,t.attrs),f(t,n),n}(n),i=function(t,n,e){var i=e.css,r=e.sourceMap,o=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),r=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(n),i=function(t,n){var e=n.css,i=n.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){m(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=h(t,n);return p(e,n),function(t){for(var i=[],r=0;r<e.length;r++){var a=e[r];(s=o[a.id]).refs--,i.push(s)}t&&p(h(t,n),n);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var x,y=(x=[],function(t,n){return x[t]=n,x.filter(Boolean).join("\n")});function w(t,n,e,i){var r=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(n,r);else{var o=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}},function(t,n,e){var i=e(3);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,'html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont-weight: normal;\r\n\tvertical-align: baseline;\r\n\tbackground: transparent;\r\n}\r\n\r\narticle, aside, figure, footer, header, nav, section, details, summary {display: block;}\r\n\r\n/* Handle box-sizing while better addressing child elements:\r\n   https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */\r\nhtml {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: inherit;\r\n}\r\n\r\n/* consider resetting the default cursor: https://gist.github.com/murtaugh/5247154 */\r\n\r\n/* Responsive images and other embedded objects\r\n*/\r\nimg,\r\nobject,\r\nembed {max-width: 100%;}\r\n\r\n/*\r\n   Note: keeping IMG here will cause problems if you\'re using foreground images as sprites.\r\n\t In fact, it *will* cause problems with Google Maps\' controls at small size.\r\n\tIf this is the case for you, try uncommenting the following:\r\n\r\n#map img {\r\n\t\tmax-width: none;\r\n}\r\n*/\r\n\r\n/* force a vertical scrollbar to prevent a jumpy page */\r\nhtml {overflow-y: scroll;}\r\n\r\n/* we use a lot of ULs that aren\'t bulleted.\r\n\tdon\'t forget to restore the bullets within content. */\r\nul {list-style: none;}\r\n\r\nblockquote, q {quotes: none;}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {content: \'\'; content: none;}\r\n\r\na {margin: 0; padding: 0; font-size: 100%; vertical-align: baseline; background: transparent;}\r\n\r\ndel {text-decoration: line-through;}\r\n\r\nabbr[title], dfn[title] {border-bottom: 1px dotted #000; cursor: help;}\r\n\r\n/* tables still need cellspacing="0" in the markup */\r\ntable {border-collapse: collapse; border-spacing: 0;}\r\nth {font-weight: bold; vertical-align: bottom;}\r\ntd {font-weight: normal; vertical-align: top;}\r\n\r\nhr {display: block; height: 1px; border: 0; border-top: 1px solid #ccc; margin: 1em 0; padding: 0;}\r\n\r\ninput, select {vertical-align: middle;}\r\n\r\npre {\r\n    white-space: pre; /* CSS2 */\r\n    white-space: pre-wrap; /* CSS 2.1 */\r\n    white-space: pre-line; /* CSS 3 (and 2.1 as well, actually) */\r\n    word-wrap: break-word; /* IE */\r\n}\r\n\r\ninput[type="radio"] {vertical-align: text-bottom;}\r\ninput[type="checkbox"] {vertical-align: bottom;}\r\n.ie7 input[type="checkbox"] {vertical-align: baseline;}\r\n.ie6 input {vertical-align: text-bottom;}\r\n\r\nselect, input, textarea {font: 99% sans-serif;}\r\n\r\ntable {font-size: inherit; font: 100%;}\r\n\r\nsmall {font-size: 85%;}\r\n\r\nstrong {font-weight: bold;}\r\n\r\ntd, td img {vertical-align: top;}\r\n\r\n/* Make sure sup and sub don\'t mess with your line-heights https://gist.github.com/413930 */\r\nsub, sup {font-size: 75%; line-height: 0; position: relative;}\r\nsup {top: -0.5em;}\r\nsub {bottom: -0.25em;}\r\n\r\n/* standardize any monospaced elements */\r\npre, code, kbd, samp {font-family: monospace, sans-serif;}\r\n\r\n/* hand cursor on clickable elements */\r\n.clickable,\r\nlabel,\r\ninput[type=button],\r\ninput[type=submit],\r\ninput[type=file],\r\nbutton {cursor: pointer;}\r\n\r\n/* Webkit browsers add a 2px margin outside the chrome of form elements */\r\nbutton, input, select, textarea {margin: 0;}\r\n\r\n/* make buttons play nice in IE */\r\nbutton,\r\ninput[type=button] {width: auto; overflow: visible;}\r\n\r\n/* scale images in IE7 more attractively */\r\n.ie7 img {-ms-interpolation-mode: bicubic;}\r\n\r\n/* prevent BG image flicker upon hover\r\n   (commented out as usage is rare, and the filter syntax messes with some pre-processors)\r\n.ie6 html {filter: expression(document.execCommand("BackgroundImageCache", false, true));}\r\n*/\r\n\r\n/* let\'s clear some floats */\r\n.clearfix:before, .clearfix:after { content: "\\0020"; display: block; height: 0; overflow: hidden; }\r\n.clearfix:after { clear: both; }\r\n.clearfix { zoom: 1; }\r\n',""])},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,i=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r,o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,n,e){var i=e(6);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".header {\n  z-index: 2;\n  width: auto;\n  min-height: 60px;\n  height: 30vh;\n  background-color: #444;\n  box-shadow: 0px 8px 28px 0px #939393;\n  transition: bottom 2s linear;\n}\n\n.search-form {\n  display: inline-block;\n  margin: auto, 0;\n  width: 80%;\n}\n\n.search-form__input {\n  margin-left: 25%;\n  padding-top: 2px;\n  width: 50%;\n  border:solid 3px #dc3030;\n  border-radius: 0.2em;\n  font-size: 2em;\n  padding-left: 1%;\n  line-height: 30px;\n  background-color: #edf1f5;\n}\n\n#input:focus {\n  background-color: #ffffff;\n}\n.search-form__button {\n  margin-left: -7px;\n  margin-top: 6vh;\n  background-color: #dc3030;\n  border: solid 5px #dc3030;\n  border-radius: 0.2em;\n  width: 7em;\n  line-height: 34px;\n  color: #ffffff;\n  outline:none\n}\n.search-form__button:hover {\n  background: #434343;\n  letter-spacing: 1px;\n  box-shadow: 5px 40px -10px rgba(0,0,0,0.57);\n  transition: all 0.4s ease 0s;\n  outline:none\n}\n\n.search-form__button:hover:active {\n  background: #1a1818;\n  letter-spacing: 0.2px;\n  box-shadow: 5px 40px -10px rgba(0,0,0,0.57);\n  transition: all 0.4s ease 0s;\n  outline:none\n}\n\n.main {\n  z-index: 0;\n  width: auto;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0 auto;\n  background-color: rgb(94, 94, 94);\n  transition: left 500ms linear;\n}\n\n.content {\n  /* display: flex; */\n  width: 999999px;\n\theight: 300px;\n  position: relative;\n  /* justify-content: space-around; */\n  transition: left 500ms linear;\n}\n\n\n.pagination {\n  /* height:40px; */\n\t/* width:100%; */\n  text-align: center;\n\tmargin-top: 1.5em;\n}\n\n.pagination a {\n  display: inline-block;\n  margin: 2px;\n\ttext-decoration: none;\n  border: 2px solid #dc3030;\n  border-radius: 5px;\n\tcolor: #fff;\n\twidth: 4em;\n\theight: 2em;\n\tline-height: 2;\n  text-align: center;\n  cursor:pointer;\n}\n\n.pagination a.pagination__prev:hover {\n  background-color: black;\n}\n\n.pagination a.pagination__current {\n  cursor: default;\n}\n\n.pagination a.pagination__next:hover {\n  background-color: black;\n}\n\n@media all and (max-width: 1800px) {\n  .header, .main {\n    width: 1700px;\n  }\n}\n@media all and (max-width: 1400px) {\n  .header, .main {\n    width: 1350px;\n  }\n}\n@media all and (max-width: 1200px) {\n  .header, .main {\n    width: 1100px;\n  }\n}\n@media all and (max-width: 800px) {\n  .header, .main {\n    width: 750px;\n  }\n}\n@media all and (max-width: 420px) {\n  .header, .main {\n    width: 400px;\n  }\n  .search-form__input {\n    margin-left: 10%;\n  }\n}\n",""])},function(t,n,e){var i=e(8);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".content__clip {\n  float: left;\n  position: relative;\n\twidth: 300px;\n  height: 400px;\n  overflow: hidden;\n  /* margin: 20px; */\n  border: 2px solid #dc3030;\n  border-radius: 5px;\n}\n\n.content__image {\n  height: 180px;\n}\n\n.content__title {\n  background-color: rgba(220,48,48,0.6);\n  display: block;\n  width: 100%;\n  height: auto;\n  color: white;\n  font-family: sans-serif;\n  font-weight: bold;\n  text-align: center;\n}\n\n.content__title:hover {\n  background-color: rgba(220, 48, 48, 1);\n}\n\n.content__clip span {\n  display: block;\n  width: 100%;\n  margin-top: 15px;\n  background-color: rgba(54, 53, 53, 0.534);\n  font-family: sans-serif;\n  text-align: center;\n  color: white;\n  font-size: 1em;\n}\n\n.content__description {\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  background-color: rgba(54, 53, 53, 0.534);\n  color: white;\n  font-family: sans-serif;\n  font-size: 0.8em;\n}\n\na {\n  text-decoration: none;\n}\n",""])},function(t,n,e){"use strict";e.r(n);class i{constructor(){this.header=document.createElement("header"),this.form=document.createElement("form"),this.input=document.createElement("input"),this.button=document.createElement("button"),this.main=document.createElement("main"),this.header.classList.add("header"),this.form.classList.add("search-form"),this.button.classList.add("search-form__button"),this.button.setAttribute("type","button"),this.button.setAttribute("id","button"),this.button.textContent="Search",this.input.classList.add("search-form__input"),this.input.setAttribute("type","text"),this.input.setAttribute("placeholder","Enter what video you want to find..."),this.input.setAttribute("id","input"),this.input.setAttribute("autocomplete","off"),this.form.appendChild(this.input),this.form.appendChild(this.button),this.header.appendChild(this.form)}}function r(t,n){const e="AIzaSyDDOiiewv2iadjJnU6dioJUXFW27uqVTKM";let i;return i=n?`https://www.googleapis.com/youtube/v3/search?key=${e}&type=video&part=snippet&maxResults=15&q=${t}&pageToken=${n}`:`https://www.googleapis.com/youtube/v3/search?key=${e}&type=video&part=snippet&maxResults=15&q=${t}`,fetch(i).then(t=>t.json()).then(t=>{const n=[];r.token=t.nextPageToken,t.items.forEach(t=>n.push(t.id.videoId));const i=`https://www.googleapis.com/youtube/v3/videos?key=${e}&id=${n.join(",")}&part=snippet,statistics`;return fetch(i).then(t=>t.json())})}function o(t){const n=document.querySelector(".main"),e=document.createElement("div"),i=document.createElement("a"),r=document.createElement("p"),o=document.createElement("div"),a=document.createElement("span"),s=document.createElement("span"),c=document.createElement("span");e.classList.add("content__clip"),i.classList.add("content__title"),i.setAttribute("href",`https://www.youtube.com/watch?v=${t.id}`),i.setAttribute("target","_blank"),i.textContent=`${t.snippet.title}`,o.classList.add("content__image"),o.style.backgroundImage=`url('${t.snippet.thumbnails.medium.url}')`,a.classList.add("content__chanel"),a.textContent=`${t.snippet.channelTitle}`,r.classList.add("content__description"),r.textContent=`${t.snippet.localized.description}`,s.classList.add("content__creationDate"),s.textContent=`${new Date(Date.parse(t.snippet.publishedAt)).toLocaleDateString()}`,c.classList.add("content__numberOfViews"),c.textContent=`${t.statistics.commentCount}`,o.appendChild(i),o.appendChild(a),o.appendChild(s),o.appendChild(c),e.appendChild(o),e.appendChild(r);const l=Math.floor(n.clientWidth/300),d=(n.clientWidth-300*l)/(2*l);return e.style.margin=`${d}px`,e}class a{constructor(t){this.main=t,this.content=this.main.querySelector(".content"),this.clip=this.main.querySelector(".content__clip"),this.clips=this.main.querySelectorAll(".content__clip"),this.previous=this.main.querySelector(".pagination__prev"),this.current=this.main.querySelector(".pagination__current"),this.next=this.main.querySelector(".pagination__next"),this.index=1,this.current.textContent=this.index,this.total=15,this.numClips=Math.floor(this.main.clientWidth/this.clip.clientWidth),this.x0=null}actions(){this.next.addEventListener("click",this.clickNext.bind(this),!1),this.previous.addEventListener("click",this.clickPrev.bind(this),!1),document.addEventListener("mousedown",this.lock.bind(this),!1),document.addEventListener("touchstart",this.lock.bind(this),!1),document.addEventListener("mouseup",this.move.bind(this),!1),document.addEventListener("touchend",this.move.bind(this),!1)}lock(t){var n;this.x0=(n=t,n.changedTouches?n.changedTouches[0]:n).clientX}move(t){if(this.x0||0===this.x0){const e=(n=t,n.changedTouches?n.changedTouches[0]:n).clientX-this.x0,i=Math.sign(e);console.log(`${i}swipe!!`),-1===i&&this.clickNext(),1===i&&this.clickPrev(),this.x0=null}var n}slideTo(t){const n=this.clips[t];this.content.style.left=`-${n.offsetLeft}px`}clickNext(){this.index+=1,this.previous.style.display="inline-block",this.current.textContent=this.index,this.total-this.index*this.numClips<=this.numClips&&r(r.value,r.token).then(t=>{t.items.forEach(t=>this.content.appendChild(o(t))),this.total+=15,this.clips=this.main.querySelectorAll(".content__clip")}),this.slideTo(this.numClips*(this.index-1))}clickPrev(){1===this.index?this.previous.style.display="none":(this.index-=1,this.current.textContent=this.index,this.previous.style.display="inline-block",this.slideTo(this.numClips*(this.index-1)),1===this.index&&(this.previous.style.display="none"))}}class s{constructor(t){this.header=document.querySelector(".header"),this.input=document.querySelector(".search-form__input"),this.button=document.querySelector(".search-form__button"),this.main=document.querySelector(".main"),this.section=document.createElement("section"),this.data=t,this.section.classList.add("content")}renderContent(t){this.header.style.height="10vh",this.input.style.fontSize="1.6em",this.button.style.marginTop="5px",this.button.style.lineHeight="28px",t.items.forEach(t=>this.section.appendChild(o(t))),this.main.appendChild(this.section),this.main.appendChild(function(){const t=document.createElement("div"),n=document.createElement("a"),e=document.createElement("a"),i=document.createElement("a");return t.classList.add("pagination"),n.classList.add("pagination__current"),e.classList.add("pagination__prev"),i.classList.add("pagination__next"),e.textContent="<<",i.textContent=">>",t.appendChild(e),t.appendChild(n),t.appendChild(i),e.style.display="none",t}()),new a(this.main).actions()}}function c(t){if("click"===t.type||"Enter"===t.code){t.preventDefault();const n=document.querySelector("#input"),{value:e}=n;if(e){const t=document.querySelector(".main"),i=document.querySelector(".content"),o=document.querySelector(".pagination");t.removeChild(i),t.removeChild(o),r.value=e,r(e).then(t=>{new s(t).renderContent(t)}),n.value="",n.blur()}}}e(2),e(5),e(7);var l=class{constructor(){this.input=new i,this.main=document.createElement("main"),this.section=document.createElement("section"),this.pagination=document.createElement("div")}render(){this.main.classList.add("main"),this.section.classList.add("content"),this.pagination.classList.add("pagination"),document.body.appendChild(this.input.header),document.body.appendChild(this.main),this.main.appendChild(this.section),this.main.appendChild(this.pagination),document.addEventListener("keydown",c),document.querySelector("#button").addEventListener("click",c)}};(new class{constructor(){this.apiKey="AIzaSyDDOiiewv2iadjJnU6dioJUXFW27uqVTKM"}start(){r.key=this.apiKey,(new l).render()}}).start()}]);
//# sourceMappingURL=app.bundle.js.map