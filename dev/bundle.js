(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,".car-image {\n  transform: scaleX(-1);\n  width: 200px;\n}\n\n.flag-image {\n  position: absolute;\n  top: 50%;\n  right: 190px;\n  width: 66px;\n  transform: translateY(-50%);\n}\n\n.car-block__track {\n  position: relative;\n  background-color: rgb(204, 211, 224);\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},654:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(379),a=n.n(r),o=n(795),i=n.n(o),c=n(569),s=n.n(c),l=n(565),d=n.n(l),u=n(216),p=n.n(u),h=n(589),f=n.n(h),m=n(426),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),a()(m.Z,v);const g=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=a(h,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},724:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.switchCarEngineToDriveMode=t.startStopCarEngine=t.deleteAllCars=t.deleteCar=t.updateCar=t.createCar=t.getCar=t.getTotalCarCount=t.getCars=t.request=void 0;const r="http://127.0.0.1:3000";var a;function o(e,t=a.GET,o=null,i=null){return n(this,void 0,void 0,(function*(){const n={method:t,headers:{"Content-Type":"application/json","X-Total-Count":"4"},signal:i};o&&(n.body=JSON.stringify(o));const a=yield fetch(`${r}${e}`,n);if(!a.ok)throw 429===a.status?new Error("Too many requests. Please try again later."):500===a.status?new Error("Car has been stopped suddenly. It's engine was broken down."):new Error(`Request failed. Status: ${a.status}`);return yield a.json()}))}function i(e=1,t=7){return n(this,void 0,void 0,(function*(){const n=yield o(`/garage?_page=${e}&_limit=${t}`);return console.log(n),n}))}function c(e){return n(this,void 0,void 0,(function*(){yield o(`/garage/${e}`,a.DELETE)}))}!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE",e.PATCH="PATCH"}(a||(a={})),t.request=o,t.getCars=i,t.getTotalCarCount=function(){return n(this,void 0,void 0,(function*(){const e=(yield fetch(`${r}/garage?_limit=1`)).headers.get("X-Total-Count");return e?parseInt(e,10):0}))},t.getCar=function(e){return n(this,void 0,void 0,(function*(){return yield o(`/garage/${e}`,a.GET)}))},t.createCar=function(e){return n(this,void 0,void 0,(function*(){return yield o("/garage",a.POST,e)}))},t.updateCar=function(e,t){return n(this,void 0,void 0,(function*(){return yield o(`/garage/${e}`,a.PUT,t)}))},t.deleteCar=c,t.deleteAllCars=function(){return n(this,void 0,void 0,(function*(){try{const e=yield i();if(console.log(e),console.log(e.length),e.length>4){const t=e.slice(4);yield Promise.all(t.map((e=>n(this,void 0,void 0,(function*(){e.id&&(yield c(e.id))}))))),console.log("cars deleted")}else console.log("no cars to delete")}catch(e){console.error("Error",e)}}))},t.startStopCarEngine=function(e,t){return n(this,void 0,void 0,(function*(){return yield o(`/engine?id=${e}&status=${t}`,a.PATCH)}))},t.switchCarEngineToDriveMode=function(e,t){return n(this,void 0,void 0,(function*(){try{return yield o(`/engine?id=${e}&status=drive`,a.PATCH,null,t)}catch(e){return console.log("Car has been stopped suddenly. It's engine was broken down."),{success:!1,error:"Car has been stopped suddenly. It's engine was broken down."}}}))}},752:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(654);const a=r(n(373)),o=r(n(671));alert("Please review this work at last cross-check date"),(new o.default).render(),(new a.default).initGarage()},289:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.carSvg=void 0,t.carSvg='\n<svg\n    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n    xmlns:ns1="http://sozi.baierouge.fr"\n    xmlns:cc="http://creativecommons.org/ns#"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    xmlns:dc="http://purl.org/dc/elements/1.1/"\n    id="svg2"\n    sodipodi:docname="sportscar-bw.svg"\n    viewBox="0 0 1055.1 349.62"\n    inkscape:export-xdpi="90"\n    version="1.1"\n    inkscape:export-ydpi="90"\n    inkscape:version="0.48.5 r10040"\n  >\n  <defs\n      id="defs4"\n    >\n    <linearGradient\n        id="linearGradient3889"\n        y2="348.08"\n        gradientUnits="userSpaceOnUse"\n        x2="408.71"\n        gradientTransform="matrix(.99987 -.015862 .015862 .99987 -3.5842 5.6207)"\n        y1="111.91"\n        x1="410.12"\n        inkscape:collect="always"\n      >\n      <stop\n          id="stop3885"\n          style="stop-color:#333333"\n          offset="0"\n      />\n      <stop\n          id="stop3891"\n          style="stop-color:#202020"\n          offset=".21594"\n      />\n      <stop\n          id="stop3887"\n          style="stop-color:#000000"\n          offset="1"\n      />\n    </linearGradient\n    >\n  </defs\n  >\n  <sodipodi:namedview\n      id="base"\n      fit-margin-left="40"\n      inkscape:zoom="1"\n      borderopacity="1.0"\n      inkscape:current-layer="layer2"\n      inkscape:cx="534.66229"\n      inkscape:cy="145.6375"\n      inkscape:window-maximized="1"\n      showgrid="false"\n      fit-margin-right="40"\n      showguides="true"\n      bordercolor="#666666"\n      inkscape:window-x="-8"\n      inkscape:guide-bbox="true"\n      inkscape:window-y="-8"\n      fit-margin-bottom="20"\n      inkscape:window-width="1366"\n      inkscape:pageopacity="0.0"\n      inkscape:pageshadow="2"\n      pagecolor="#ffffff"\n      inkscape:document-units="px"\n      inkscape:window-height="705"\n      fit-margin-top="20"\n  />\n  <g\n      id="layer1"\n      inkscape:label="bg"\n      inkscape:groupmode="layer"\n      transform="translate(174.93 -52.329)"\n    >\n    <path\n        id="path3816"\n        style="opacity:.1;stroke-linejoin:round;color:#000000;stroke:#000000;stroke-linecap:round;stroke-width:16;fill:#000000"\n        inkscape:connector-curvature="0"\n        d="m419.84 80.382c-14.13 0.17352-28.251 0.78277-42.32 1.8278-24.126 1.792-48.149 6.0334-71.534 12.23-18.94 5.0186-37.177 12.501-55.251 20.066-27.66 11.578-81.209 38.668-81.209 38.668s-62.011 5.8771-92.782 10.567c-40.552 6.1804-81.625 11.192-120.87 23.139-23.554 7.171-71.034 26.315-77.309 32.387-5.7112 5.5268-3.6948 16.054-0.90048 33.862-3.0836 0.64785-5.0508 3.4723-4.5174 6.8225l3.7727 19.13c0.60166 3.7789 4.134 6.7625 7.9201 6.719 0.0103-0.00013 0.0209-0.00033 0.0312-0.00049l8.4843 32.432s0.5857 2.3006 1.4234 3.0403c0.84084 0.74249 3.1732 1.0435 3.1732 1.0435l76.319 5.7276c-0.15512-2.6763-0.36256-5.3627-0.59658-8.054 13.221 32.031 45.021 54.355 81.769 53.772 37.211-0.59031 68.571-24.492 80.441-57.564-0.15528 3.3503-0.44766 7.0132-0.97716 11.298 0 0 185.61-4.7239 278.42-7.3235 51.594-1.4451 157.33-4.1211 157.33-4.1211-0.34483-2.2502-0.57567-4.2421-0.78456-6.1133 10.033 36.581 43.791 63.188 83.472 62.559 36.159-0.57363 66.689-23.576 78.535-55.565 5.2394-0.51074 34.996-3.7829 51.318-13.878 14.958-9.2519 35.043-38.802 40.398-52.085 5.3547-13.283 7.5778-22.251 8.529-39.609 0.72884-13.299-18.887-31.307-18.876-47.175 0.006-8.1996 7.6932-23.344 7.6932-23.344s-25.401 6.2872-38.29 5.6393c-18.11-0.91026-52.749-13.29-52.749-13.29l-96.357-23.725s-79.847-19.854-120.62-24.371c-30.848-3.4173-62-5.0933-93.086-4.7115zm230.43 121.68c5.9163-0.0939 11.694 0.44321 17.277 1.5386-5.4734-1.0106-11.12-1.48-16.899-1.3884-13.691 0.21718-26.577 3.6492-37.947 9.5719 11.213-6.0026 23.977-9.5065 37.569-9.7222z"\n    />\n    <path\n        id="path3838"\n        sodipodi:nodetypes="sssscsssccccccscccsccsccscsssscsccss"\n        style="opacity:.4;stroke-linejoin:round;fill-rule:evenodd;stroke:#000000;stroke-linecap:round;stroke-width:16;fill:#000000"\n        inkscape:connector-curvature="0"\n        d="m419.85 80.554c-14.13 0.17352-28.251 0.78277-42.32 1.8278-24.126 1.792-48.149 6.0334-71.534 12.23-18.94 5.0186-37.177 12.501-55.251 20.066-27.66 11.578-81.209 38.668-81.209 38.668s-62.011 5.8771-92.782 10.567c-40.552 6.1804-81.625 11.192-120.87 23.139-23.554 7.171-71.034 26.315-77.309 32.387-5.7112 5.5268-3.6948 16.054-0.90048 33.862-3.0836 0.64786-5.0508 3.4723-4.5174 6.8225l3.7727 19.13c0.60167 3.7789 4.134 6.7625 7.9201 6.719 0.0103-0.00013 0.0209-0.00033 0.0312-0.0005l8.4843 32.432s0.5857 2.3006 1.4234 3.0403c0.84085 0.74248 3.1732 1.0436 3.1732 1.0436l76.319 5.7276c-0.15512-2.6763-0.36256-5.3627-0.59658-8.054 13.221 32.031 45.021 54.355 81.769 53.772 37.211-0.59031 68.571-24.492 80.441-57.564-0.15528 3.3503-0.44767 7.0132-0.97716 11.298 0 0 185.61-4.7239 278.42-7.3235 51.594-1.4451 157.33-4.1211 157.33-4.1211-0.34484-2.2502-0.57569-4.2421-0.78457-6.1133 10.033 36.581 43.791 63.188 83.472 62.559 36.159-0.57362 66.689-23.576 78.535-55.565 5.2394-0.51073 34.996-3.7829 51.318-13.878 14.958-9.2519 35.043-38.802 40.398-52.085 5.3547-13.283 7.5778-22.251 8.529-39.609 0.72883-13.299-18.887-31.307-18.876-47.175 0.006-8.1996 7.6932-23.344 7.6932-23.344s-25.401 6.2872-38.29 5.6393c-18.11-0.91026-52.749-13.29-52.749-13.29l-96.357-23.725s-79.847-19.854-120.62-24.371c-30.848-3.4173-62-5.0933-93.086-4.7115z"\n    />\n  </g\n  >\n  <g\n      id="layer2"\n      inkscape:label="car"\n      inkscape:groupmode="layer"\n      transform="translate(174.93 -52.329)"\n    >\n    <path\n        id="path3006"\n        sodipodi:nodetypes="sssscsssccccccacccsccsccssccszcscsccss"\n        style="stroke-linejoin:round;fill-rule:evenodd;stroke:#ffffff;stroke-linecap:round;stroke-width:8;fill:url(#linearGradient3889)"\n        inkscape:connector-curvature="0"\n        d="m419.84 80.382c-14.13 0.17352-28.251 0.78277-42.32 1.8278-24.126 1.792-48.149 6.0334-71.534 12.23-18.94 5.0186-37.177 12.501-55.251 20.066-27.66 11.578-81.209 38.668-81.209 38.668s-62.011 5.8771-92.782 10.567c-40.552 6.1804-81.625 11.192-120.87 23.139-23.554 7.171-71.034 26.315-77.309 32.387-5.7112 5.5268-3.6992 16.054-0.90494 33.862-3.0836 0.64786-5.0508 3.4723-4.5174 6.8225l3.7682 19.13c0.60166 3.7789 4.134 6.7625 7.9201 6.719 0.0103-0.00012 0.0209-0.00033 0.0312-0.0005l8.4798 32.432s0.58354 2.2968 1.4212 3.0365c0.84084 0.74249 3.201 1.0384 3.201 1.0384l76.307 5.7364c-0.78409-13.528-2.8767-27.314-3.2398-40.704-0.72273-45.558 35.623-83.076 81.181-83.798 45.558-0.72273 83.076 35.623 83.798 81.181-0.83659 16.979 1.1722 24.362-1.1029 42.773 0 0 185.61-4.7239 278.42-7.3235 51.594-1.4451 157.33-4.1211 157.33-4.1211-2.2809-14.884-1.2309-20.459-1.573-30.198-0.72273-45.558 35.623-83.076 81.181-83.798 45.558-0.72274 83.076 35.623 83.798 81.181 0.12805 8.071-0.93051 15.894-2.9745 23.3-0.73759 3.8332-2.098 7.9903-0.30208 10.506 0 0 34.487-2.9039 52.41-13.989 14.958-9.2519 35.043-38.802 40.398-52.085 5.3547-13.283 7.5779-22.251 8.5291-39.609 0.72884-13.299-18.887-31.307-18.876-47.175 0.006-8.1996 7.6931-23.344 7.6931-23.344s-25.401 6.2872-38.29 5.6393c-18.11-0.91026-52.749-13.29-52.749-13.29l-96.357-23.725s-79.847-19.854-120.62-24.371c-30.848-3.4173-62-5.0933-93.086-4.7115z"\n    />\n    <path\n        id="path3798"\n        style="fill-rule:evenodd;fill:#ffffff"\n        d="m815.23 147.45-4.6607-8.8475c-4.3465 2.4578-9.11 4.3166-14.063 5.6758-5.3079 1.4568-10.859 2.3271-16.504 2.8718-13.448 1.2975-27.229 0.788-41.096 0.31415-17.483-0.60713-35.029-1.3015-52.588-1.1217-21.851 0.2246-43.671 1.7341-65.243 4.7782 21.701-1.9248 43.489-2.2978 65.191-1.3988 17.433 0.72166 34.823 2.3163 52.272 3.8264h0.00001c13.814 1.2039 27.811 2.4332 42.03 1.8294h0.00001c6.0018-0.25568 12.073-0.89782 18.108-2.2072 5.654-1.2275 11.242-3.0899 16.555-5.7206z"\n        sodipodi:nodetypes="cc"\n        inkscape:path-effect="#path-effect3800"\n        inkscape:connector-curvature="0"\n        inkscape:original-d="m 812.9013,143.02342 c -38.37521,20.21559 -95.49095,-2.96689 -191.82472,8.09453"\n    />\n    <path\n        id="path3790"\n        sodipodi:nodetypes="ccccccccccccc"\n        style="fill-rule:evenodd;fill:#ffffff"\n        inkscape:connector-curvature="0"\n        d="m191.81 163.04 21.681-1.2321c32.578-21.04 50.897-29.272 87.479-42.11h0.00002c31.866-11.19 65.173-18.413 98.907-21.567 32.674-3.0577 65.706-2.3721 98.516 0.57486 34.307 3.082 68.406 8.5502 102.37 14.637-33.807-6.89-67.782-13.168-102.12-17.077-32.843-3.7394-66.052-5.2182-99.154-2.9173l-0.00002 0.000001c-34.185 2.3798-68.134 8.8933-100.83 19.509h-0.00001c-37.512 12.187-73.237 29.568-106.85 50.183z"\n    />\n    <path\n        id="path3794"\n        sodipodi:nodetypes="cccscscsccccc"\n        style="fill-rule:evenodd;fill:#ffffff"\n        inkscape:connector-curvature="0"\n        d="m-107.42 226.71 0.56405 9.8503c17.258-11.814 36.82-20.442 56.861-27.831 22.098-8.1277 44.898-14.467 68.04-19.287 31.121-6.4812 62.788-10.53 94.59-12.923 11.785-0.88685 23.592-1.5366 35.41-1.9799 7.423-0.27847 14.854-0.4431 22.284-0.64852-7.4319-0.0513-14.863-0.14356-22.299-0.12172-11.836 0.0347-23.675 0.27637-35.51 0.75663-31.935 1.2953-63.866 4.2579-95.466 9.704l-0.000014 0.00001c-23.525 4.0549-46.836 9.6745-69.602 17.163-20.611 6.7611-36.155 13.497-54.871 25.317z"\n    />\n    <path\n        id="path3807"\n        sodipodi:nodetypes="ccccccccccccc"\n        style="fill-rule:evenodd;fill:#ffffff"\n        inkscape:connector-curvature="0"\n        d="m159.18 298.47-2.2516 10.402c31.326-9.1983 64.314-13.097 97.38-14.506h0.00002c34.212-1.4488 68.603-0.18207 102.99 1.4706 33.353 1.606 66.767 3.6977 100.23 3.8564 29.912 0.14623 60.068-1.1267 89.212-7.5496-29.306 5.6796-59.346 6.1645-89.168 5.2701-33.356-1.0054-66.616-3.9421-99.963-6.3977h-0.00001c-34.368-2.5341-68.877-4.6815-103.53-4.1056h-0.00002c-33.491 0.54761-62.199 2.9015-94.904 11.56z"\n    />\n    <path\n        id="path3782"\n        sodipodi:rx="80.307129"\n        sodipodi:ry="80.307129"\n        style="stroke-linejoin:round;color:#000000;stroke:#ffffff;stroke-linecap:round;stroke-width:7.6292;fill:#000000"\n        sodipodi:type="arc"\n        d="m319.21 450.82c0 44.352-35.955 80.307-80.307 80.307s-80.307-35.955-80.307-80.307 35.955-80.307 80.307-80.307 80.307 35.955 80.307 80.307z"\n        transform="matrix(1.0604 -.016822 .016822 1.0604 391.1 -186.65)"\n        sodipodi:cy="450.81635"\n        sodipodi:cx="238.90108"\n    />\n    <path\n        id="path3780"\n        sodipodi:rx="80.307129"\n        sodipodi:ry="80.307129"\n        style="stroke-linejoin:round;color:#000000;stroke:#ffffff;stroke-linecap:round;stroke-width:8.1992;fill:#000000"\n        sodipodi:type="arc"\n        d="m319.21 450.82c0 44.352-35.955 80.307-80.307 80.307s-80.307-35.955-80.307-80.307 35.955-80.307 80.307-80.307 80.307 35.955 80.307 80.307z"\n        transform="matrix(1.0822 -.017168 .017168 1.0822 -212.21 -196.93)"\n        sodipodi:cy="450.81635"\n        sodipodi:cx="238.90108"\n    />\n    <path\n        id="path3832"\n        sodipodi:nodetypes="acsscccccccscscccccccccca"\n        style="fill-rule:evenodd;fill:#ffffff"\n        inkscape:connector-curvature="0"\n        d="m588.77 124.41c-0.45047-3.2949-4.6324-8.836-4.6324-8.836 0.03 1.9576-3.5996 9.5927-4.7449 11.418-1.4005 2.2327-4.5959 6.2138-7.15 8.022-3.2449 2.2972-6.9775 4.6033-10.904 6.2411-4.8322 2.0027-9.8966 3.6108-15.072 5.0287l-0.00002 0.00001c-13.024 3.5656-26.492 5.8278-40.077 7.6784-16.42 2.2315-32.973 3.7333-49.573 4.9167-36.871 2.6278-73.898 3.6575-110.93 4.4855h-0.00002c-17.735 0.39632-35.476 0.72232-53.216 1.1248-15.443 0.35032-30.889 0.74273-46.319 1.4258 15.444-0.244 30.886-0.19665 46.331-0.10759 17.741 0.10233 35.482 0.28112 53.228 0.38951h0.00001c37.056 0.22673 74.148 0.25045 111.25-1.3328 16.704-0.71246 33.43-1.7524 50.125-3.5373l0.00001-0.00001c13.79-1.4696 27.649-3.4039 41.329-6.7194 5.4449-1.3188 10.901-2.8894 16.265-4.9259h0.00002c4.3472-1.6398 8.7136-3.6488 12.843-6.3315 3.2772-2.0932 6.4558-4.8183 8.9893-8.3949 2.2146-3.1801 2.747-6.9836 2.2601-10.545z"\n    />\n    <path\n        id="path3786"\n        style="stroke-linejoin:round;color:#000000;stroke:#ffffff;stroke-linecap:round;stroke-width:.96684;fill:#ffffff"\n        inkscape:connector-curvature="0"\n        d="m53.16 232.17c-31.937 0.50664-57.43 26.799-56.923 58.736 0.0373 2.3514 0.23046 4.6484 0.54385 6.919h0.57406c-0.071295-1.024-0.1346-2.044-0.15107-3.0818-0.49825-31.407 24.549-57.271 55.956-57.769 31.407-0.49825 57.271 24.579 57.769 55.986 0.026 1.6424-0.0408 3.2586-0.15107 4.8644h0.60428c0.38746-2.8633 0.5608-5.7885 0.51363-8.762-0.50664-31.937-26.799-57.399-58.736-56.893z"\n    />\n    <path\n        id="path3902"\n        style="stroke-linejoin:round;color:#000000;stroke:#ffffff;stroke-linecap:round;stroke-width:.95027;fill:#ffffff"\n        inkscape:connector-curvature="0"\n        d="m651.18 232.69c-31.389 0.49797-56.445 26.339-55.947 57.729 0.0263 1.6563 0.12963 3.2835 0.29696 4.8998h0.71271c-0.0136-0.37797-0.0534-0.74867-0.0595-1.1284-0.48972-30.869 24.128-56.289 54.997-56.778 30.869-0.48972 56.289 24.157 56.778 55.026 0.0153 0.96823 0.004 1.9251-0.0297 2.8805h0.68302c0.22352-2.206 0.33294-4.4425 0.29696-6.7112-0.49798-31.389-26.339-56.415-57.729-55.917z"\n    />\n  </g\n  >\n  <metadata\n    >\n    <rdf:RDF\n      >\n      <cc:Work\n        >\n        <dc:format\n          >image/svg+xml</dc:format\n        >\n        <dc:type\n            rdf:resource="http://purl.org/dc/dcmitype/StillImage"\n        />\n        <cc:license\n            rdf:resource="http://creativecommons.org/licenses/publicdomain/"\n        />\n        <dc:publisher\n          >\n          <cc:Agent\n              rdf:about="http://openclipart.org/"\n            >\n            <dc:title\n              >Openclipart</dc:title\n            >\n          </cc:Agent\n          >\n        </dc:publisher\n        >\n      </cc:Work\n      >\n      <cc:License\n          rdf:about="http://creativecommons.org/licenses/publicdomain/"\n        >\n        <cc:permits\n            rdf:resource="http://creativecommons.org/ns#Reproduction"\n        />\n        <cc:permits\n            rdf:resource="http://creativecommons.org/ns#Distribution"\n        />\n        <cc:permits\n            rdf:resource="http://creativecommons.org/ns#DerivativeWorks"\n        />\n      </cc:License\n      >\n    </rdf:RDF\n    >\n  </metadata\n  >\n</svg\n>\n\n'},699:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.carModels=t.carBrands=void 0,t.carBrands=["Toyota","Honda","Ford","Chevrolet","BMW","Mercedes-Benz","Audi","Volkswagen","Nissan","Hyundai","Kia","Volvo","Mazda","Subaru","Lexus","Jeep","Tesla","Ferrari","Porsche","Maserati"],t.carModels=["Camry","Civic","Mustang","Corvette","3 Series","E-Class","A4","Golf","Altima","Elantra","Optima","XC90","CX-5","Forester","RX 350","Wrangler","Model S","458 Italia","911 Carrera","GranTurismo"]},489:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createNewElement=void 0,t.createNewElement=(e,t)=>{const n=document.createElement(e);return n.classList.add(t),n}},916:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateRandomColor=void 0,t.generateRandomColor=function(){let e="#";for(let t=0;t<6;t+=1)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},586:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateRandomName=void 0;const r=n(699);t.generateRandomName=function(){return`${r.carBrands[Math.floor(Math.random()*r.carBrands.length)]} ${r.carModels[Math.floor(Math.random()*r.carModels.length)]}`}},373:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const a=n(586),o=n(916),i=n(724),c=n(489),s=n(289);t.default=class{constructor(){this.currentPage=1,this.carsPerPage=7,this.garageContainer=null,this.carNameInput=null,this.carColorInput=null,this.createCarButton=null,this.updateCarButton=null,this.selectedCar=null,this.carUpdateNameInput=null,this.carUpdateColorInput=null,this.generateCarsButton=null,this.resetRaceButton=null,this.raceButton=null,this.totalCount=1,this.abortController=null,this.addEventListeners()}initGarage(){this.render(),this.displayCars(),this.addEventListeners()}render(){const e=document.querySelector(".main");if(!e)throw new Error("Main element not found.");const t=(0,c.createNewElement)("div","garage-container");t.innerHTML='\n      <h2 class="garage-container__title">Garage</h2>\n      <div class="form-container">\n        <div class="form-container__create-car">\n          <input class="create-car__car-name-input" type="text" placeholder="Car Name" />\n          <input class="create-car__car-color-input" type="color" />\n          <button class="create-car__button">Create</button>\n        </div>\n        <div class="form-container__update-car">\n          <input class="update-car__car-name-input" type="text" placeholder="Car Name" />\n          <input class="update-car__car-color-input" type="color" />\n          <button class="update-car__button">Update</button>\n        </div>\n        <div class="form-container__buttons">\n          <button class="buttons buttons__race">Race</button>\n          <button class="buttons buttons__reset">Reset</button>\n          <button class="buttons buttons__generate">Generate cars</button>\n        </div>\n      </div>\n      <div class="pagination-container"></div>\n      <div class="car-list"></div>\n    ',e.appendChild(t),this.garageContainer=t,this.carNameInput=document.querySelector(".create-car__car-name-input"),this.carColorInput=document.querySelector(".create-car__car-color-input"),this.carUpdateNameInput=document.querySelector(".update-car__car-name-input"),this.carUpdateColorInput=document.querySelector(".update-car__car-color-input"),this.createCarButton=document.querySelector(".create-car__button"),this.updateCarButton=document.querySelector(".update-car__button"),this.generateCarsButton=document.querySelector(".buttons__generate"),this.resetRaceButton=document.querySelector(".buttons__reset"),this.raceButton=document.querySelector(".buttons__race")}displayCars(){return r(this,void 0,void 0,(function*(){try{const e=yield(0,i.getCars)(this.currentPage,this.carsPerPage),t=yield(0,i.getTotalCarCount)();if(this.garageContainer){const t=this.garageContainer.querySelector(".car-list");t&&(t.innerHTML="",e.forEach((e=>{this.addCarToList(e)})))}const n=Math.ceil(t/this.carsPerPage);this.renderPaginationButtons(n)}catch(e){console.error("errror",e)}}))}renderPaginationButtons(e){if(this.garageContainer){const t=this.garageContainer.querySelector(".pagination-container");if(t){t.innerHTML="";const n=(0,c.createNewElement)("button","pagination-prev-button");n.textContent="Previous",n.disabled=1===this.currentPage,n.addEventListener("click",(()=>this.handlePrevButtonClick())),t.appendChild(n);const r=(0,c.createNewElement)("div","current-page");r.textContent=`Page #${this.currentPage}`,t.appendChild(r);const a=(0,c.createNewElement)("div","total-count");a.textContent=`Garage (${this.totalCount})`,r.appendChild(a);const o=(0,c.createNewElement)("button","pagination-next-button");o.textContent="Next",o.disabled=this.currentPage===e,o.addEventListener("click",(()=>this.handleNextButtonClick())),t.appendChild(o),(0,i.getTotalCarCount)().then((t=>{this.totalCount=t,a.textContent=`Garage (${this.totalCount})`,o.disabled=this.currentPage===e})).catch((e=>{console.error("Error fetching total car count:",e)})),r.appendChild(a)}}}handlePrevButtonClick(){this.currentPage>1&&(this.currentPage-=1,this.renderPaginationButtons(Math.ceil(this.totalCount/this.carsPerPage)),this.displayCars())}handleNextButtonClick(){this.currentPage+=1,this.renderPaginationButtons(Math.ceil(this.totalCount/this.carsPerPage)),this.displayCars()}createRandomCars(){return r(this,void 0,void 0,(function*(){try{const e=100,t=[],n=[];for(let t=0;t<e;t+=1){const e={name:(0,a.generateRandomName)(),color:(0,o.generateRandomColor)()};n.push((0,i.createCar)(e))}const r=yield Promise.all(n);t.push(...r),this.displayCars()}catch(e){console.error(e)}}))}createCarImage(e){return s.carSvg.replace(/#000000/g,e).replace(/url\(#linearGradient3889\)/g,e)}addCarToList(e){if(this.garageContainer){const t=this.garageContainer.querySelector(".car-list");if(t){const n=(0,c.createNewElement)("div","car-block"),r="#000000",a=e.color||r;n.innerHTML=`\n        <div class="car-block__control-btns">\n          <button class="select-car-button">Select</button>\n          <button class="remove-car-button">Remove</button>\n          <p class="car-name">${e.name}</p>\n        </div>\n        <div class="car-block__track">\n          <button class="start-car-button">A</button>\n          <button class="stop-car-button">B</button>\n          <div class="car-image" id="${e.id}">\n            ${this.createCarImage(a)}\n          </div>\n          <img class="flag-image" src="../assets/img/flag-icon.svg">\n        </div>\n        `;const o=n.querySelector(".select-car-button"),i=n.querySelector(".remove-car-button");null==o||o.addEventListener("click",(()=>this.handleSelectedCar(e))),null==i||i.addEventListener("click",(()=>this.handleRemoveCar(e)));const s=n.querySelector(".start-car-button"),l=n.querySelector(".stop-car-button");l.disabled=!0,s.addEventListener("click",(()=>this.handleStartCarClick(e,s,l))),l.addEventListener("click",(()=>this.handleStopCarClick(e,s,l))),t.appendChild(n)}}}handleStartCarClick(e,t,n){try{if(n&&t){t.disabled=!0,n.disabled=!1;const r=new AbortController,{signal:a}=r;this.startAnimation(e,a)}}catch(e){console.log(e)}}handleStopCarClick(e,t,n){try{n&&t&&(t.disabled=!1,n.disabled=!0,this.stopAnimation(e))}catch(e){console.log(e)}}addEventListeners(){this.createCarButton&&this.createCarButton.addEventListener("click",this.handleCreateCarClick.bind(this)),this.updateCarButton&&this.updateCarButton.addEventListener("click",this.handleUpdateCarClick.bind(this)),this.generateCarsButton&&this.generateCarsButton.addEventListener("click",this.handleGenerateCarsClick.bind(this)),this.resetRaceButton&&(this.resetRaceButton.disabled=!0,this.resetRaceButton.addEventListener("click",this.handleResetRaceClick.bind(this))),this.raceButton&&(this.raceButton.disabled=!1,this.raceButton.addEventListener("click",this.handleRaceClick.bind(this)))}handleGenerateCarsClick(){return r(this,void 0,void 0,(function*(){try{yield this.createRandomCars()}catch(e){console.error("Error generating random cars",e)}}))}handleResetRaceClick(){var e,t;return r(this,void 0,void 0,(function*(){try{!1===(null===(e=this.resetRaceButton)||void 0===e?void 0:e.disabled)&&!0===(null===(t=this.raceButton)||void 0===t?void 0:t.disabled)&&(this.raceButton.disabled=!1,this.resetRaceButton.disabled=!0),this.abortController&&(this.abortController.abort(),this.abortController=null,document.querySelectorAll(".car-image").forEach((e=>r(this,void 0,void 0,(function*(){const t={id:+e.id};yield(0,i.startStopCarEngine)(t.id,"stopped")}))))),this.displayCars()}catch(e){console.error("Error reset cars",e)}}))}handleRaceClick(){return r(this,void 0,void 0,(function*(){this.abortController=new AbortController;const{signal:e}=this.abortController,t=document.querySelectorAll(".car-image"),n=Array.from(t).map((t=>r(this,void 0,void 0,(function*(){const n={id:+t.id};return this.startAnimation(n,e)}))));yield Promise.all(n).then((()=>{console.log("All cars started racing!")})),this.disableRaceAndStartButtons()}))}disableRaceAndStartButtons(){this.raceButton&&this.resetRaceButton&&(this.raceButton.disabled=!0,this.resetRaceButton.disabled=!1);const e=document.querySelectorAll(".start-car-button"),t=document.querySelectorAll(".stop-car-button");e.forEach((e=>{e.disabled=!0})),t.forEach((e=>{e.disabled=!0}))}handleCreateCarClick(){var e,t;const n=null===(e=this.carNameInput)||void 0===e?void 0:e.value,r=null===(t=this.carColorInput)||void 0===t?void 0:t.value;if(n&&r){const e={name:n,color:r};(0,i.createCar)(e),this.displayCars(),this.resetInputField()}}handleUpdateCarClick(){var e,t,n;const r=null===(e=this.carUpdateNameInput)||void 0===e?void 0:e.value,a=null===(t=this.carUpdateColorInput)||void 0===t?void 0:t.value;if(r&&a){const e={id:null===(n=this.selectedCar)||void 0===n?void 0:n.id,name:r,color:a};e.id&&((0,i.updateCar)(e.id,e),this.displayCars(),this.resetInputField())}}handleSelectedCar(e){this.selectedCar=e,this.updateCarButton&&(this.updateCarButton.disabled=!1),this.carUpdateNameInput&&this.carUpdateColorInput&&(this.carUpdateNameInput.value=e.name,this.carUpdateColorInput.value=e.color)}handleRemoveCar(e){e.id&&(this.deleteCarFromPage(e.id),this.displayCars(),this.resetInputField())}deleteCarFromPage(e){return r(this,void 0,void 0,(function*(){try{yield(0,i.deleteCar)(e)}catch(e){console.error("Erorr",e)}}))}resetInputField(){this.carNameInput&&this.carColorInput&&(this.carNameInput.value="",this.carColorInput.value="#000000"),this.carUpdateNameInput&&this.carUpdateColorInput&&(this.carUpdateNameInput.value="",this.carUpdateColorInput.value="#000000"),this.updateCarButton&&(this.updateCarButton.disabled=!0),this.selectedCar=null}startAnimation(e,t){return r(this,void 0,void 0,(function*(){let n=null;const{velocity:r,distance:a}=yield(0,i.startStopCarEngine)(e.id,"started"),o=Math.round(a/r),c=document.getElementById(`${e.id}`),s=document.querySelector(".flag-image"),l=Math.abs(c.getBoundingClientRect().left-s.getBoundingClientRect().left)+60,d=l,u=performance.now(),p=e=>{const t=(e-u)/o;if(t>1)c.style.transform=`translateX(${d}px) scaleX(-1)`;else{if(null!==n){const e=Math.round(t*l);c.style.transform=`translateX(${Math.min(e,l)}px) scaleX(-1)`}null!==n&&(n=requestAnimationFrame(p))}};n=requestAnimationFrame(p),(0,i.switchCarEngineToDriveMode)(e.id,t).then((t=>{console.log(t),t.success||(cancelAnimationFrame(n),console.log("velocity",r,"distance",a,n,"Car",e))})).catch((e=>{cancelAnimationFrame(n),console.log(n),console.error("Error during switchCarEngineToDriveMode:",e)})),console.log("Car",e),console.log("velocity",r,"distance",a,n,"Car",e)}))}stopAnimation(e){return r(this,void 0,void 0,(function*(){try{(0,i.startStopCarEngine)(e.id,"stopped").then((t=>console.log(t,e.name,"Car stopped",e))),this.displayCars()}catch(e){console.error("Error stop cars",e)}}))}}},671:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(489);t.default=class{constructor(){this.header=document.querySelector(".header"),this.headerTitle=document.querySelector(".header_title"),this.garageBtn=document.querySelector("garage-btn"),this.winnersBtn=document.querySelector(".winners-btn"),this.wrapper=document.querySelector(".wrapper"),this.main=document.querySelector(".main")}render(){var e,t;this.wrapper=(0,r.createNewElement)("div","wrapper"),this.header=(0,r.createNewElement)("header","header"),this.main=(0,r.createNewElement)("main","main"),this.header.innerHTML='\n      <h1 class="header_title">Async Race</h1>\n      <button class="garage-btn">Garage</button>\n      <button class="winners-btn">Winners</button>\n    ',this.garageBtn=this.header.querySelector(".garage-btn"),null===(e=this.garageBtn)||void 0===e||e.addEventListener("click",this.handleGarageClick.bind(this)),this.winnersBtn=this.header.querySelector(".winners-btn"),null===(t=this.winnersBtn)||void 0===t||t.addEventListener("click",this.handleWinnersClick.bind(this)),this.wrapper.append(this.header,this.main),document.body.prepend(this.wrapper)}handleGarageClick(){console.log("garagebtn clicked")}handleWinnersClick(){console.log("winnersbtn clicked")}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(752)})();