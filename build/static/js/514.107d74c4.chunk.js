(self.webpackChunkproject=self.webpackChunkproject||[]).push([[514],{96015:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(87462),o=n(63366),i=n(72791),a=n(28182),s=n(53842),f=n(60104),c=n(78519),u=n(30418),p=n(80184),l=["className","component"];var d=n(55902),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,d=void 0===n?"MuiBox-root":n,h=e.generateClassName,m=e.styleFunctionSx,v=void 0===m?f.Z:m,y=(0,s.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(v);return i.forwardRef((function(e,n){var i=(0,u.Z)(t),s=(0,c.Z)(e),f=s.className,m=s.component,v=void 0===m?"div":m,g=(0,o.Z)(s,l);return(0,p.jsx)(y,(0,r.Z)({as:v,ref:n,className:(0,a.Z)(f,h?h(d):d),theme:i},g))}))}({defaultTheme:(0,n(70686).Z)(),defaultClassName:"MuiBox-root",generateClassName:d.Z.generate}),m=h},43120:function(e,t,n){"use strict";function r(e){return e?(e.nodeName||"").toLowerCase():null}n.d(t,{Z:function(){return r}})},93265:function(e,t,n){"use strict";function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}n.d(t,{Z:function(){return r}})},39265:function(e,t,n){"use strict";n.d(t,{Re:function(){return i},Zq:function(){return a},kK:function(){return o}});var r=n(93265);function o(e){return e instanceof(0,r.Z)(e).Element||e instanceof Element}function i(e){return e instanceof(0,r.Z)(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!==typeof ShadowRoot&&(e instanceof(0,r.Z)(e).ShadowRoot||e instanceof ShadowRoot)}},13514:function(e,t,n){"use strict";var r=n(43120),o=n(39265);t.Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},a=t.elements[e];(0,o.Re)(a)&&(0,r.Z)(a)&&(Object.assign(a.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?a.removeAttribute(e):a.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],a=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});(0,o.Re)(i)&&(0,r.Z)(i)&&(Object.assign(i.style,s),Object.keys(a).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]}},57832:function(e,t,n){"use strict";n.d(t,{fi:function(){return we}});var r=n(39265),o=Math.max,i=Math.min,a=Math.round,s=n(93265);function f(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function u(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),i=1,f=1;t&&(0,r.Re)(e)&&(i=e.offsetWidth>0&&a(o.width)/e.offsetWidth||1,f=e.offsetHeight>0&&a(o.height)/e.offsetHeight||1);var u=((0,r.kK)(e)?(0,s.Z)(e):window).visualViewport,p=!c()&&n,l=(o.left+(p&&u?u.offsetLeft:0))/i,d=(o.top+(p&&u?u.offsetTop:0))/f,h=o.width/i,m=o.height/f;return{width:h,height:m,top:d,right:l+h,bottom:d+m,left:l,x:l,y:d}}function p(e){var t=(0,s.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}var l=n(43120);function d(e){return(((0,r.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return u(d(e)).left+p(e).scrollLeft}function m(e){return(0,s.Z)(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,t,n){void 0===n&&(n=!1);var o=(0,r.Re)(t),i=(0,r.Re)(t)&&function(e){var t=e.getBoundingClientRect(),n=a(t.width)/e.offsetWidth||1,r=a(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),f=d(t),c=u(e,i,n),m={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(o||!o&&!n)&&(("body"!==(0,l.Z)(t)||v(f))&&(m=function(e){return e!==(0,s.Z)(e)&&(0,r.Re)(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:p(e);var t}(t)),(0,r.Re)(t)?((y=u(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):f&&(y.x=h(f))),{x:c.left+m.scrollLeft-y.x,y:c.top+m.scrollTop-y.y,width:c.width,height:c.height}}function g(e){var t=u(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return"html"===(0,l.Z)(e)?e:e.assignedSlot||e.parentNode||((0,r.Zq)(e)?e.host:null)||d(e)}function x(e){return["html","body","#document"].indexOf((0,l.Z)(e))>=0?e.ownerDocument.body:(0,r.Re)(e)&&v(e)?e:x(b(e))}function w(e,t){var n;void 0===t&&(t=[]);var r=x(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=(0,s.Z)(r),a=o?[i].concat(i.visualViewport||[],v(r)?r:[]):r,f=t.concat(a);return o?f:f.concat(w(b(a)))}function O(e){return["table","td","th"].indexOf((0,l.Z)(e))>=0}function j(e){return(0,r.Re)(e)&&"fixed"!==m(e).position?e.offsetParent:null}function Z(e){for(var t=(0,s.Z)(e),n=j(e);n&&O(n)&&"static"===m(n).position;)n=j(n);return n&&("html"===(0,l.Z)(n)||"body"===(0,l.Z)(n)&&"static"===m(n).position)?t:n||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&(0,r.Re)(e)&&"fixed"===m(e).position)return null;var n=b(e);for((0,r.Zq)(n)&&(n=n.host);(0,r.Re)(n)&&["html","body"].indexOf((0,l.Z)(n))<0;){var o=m(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var k="top",E="bottom",R="right",D="left",A="auto",P=[k,E,R,D],T="start",L="end",W="clippingParents",M="viewport",B="popper",C="reference",H=P.reduce((function(e,t){return e.concat([t+"-"+T,t+"-"+L])}),[]),S=[].concat(P,[A]).reduce((function(e,t){return e.concat([t,t+"-"+T,t+"-"+L])}),[]),q=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function N(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function V(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var _={placement:"bottom",modifiers:[],strategy:"absolute"};function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function K(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,i=t.defaultOptions,a=void 0===i?_:i;return function(e,t,n){void 0===n&&(n=a);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},_,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,c={state:i,setOptions:function(n){var f="function"===typeof n?n(i.options):n;u(),i.options=Object.assign({},a,i.options,f),i.scrollParents={reference:(0,r.kK)(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var p=function(e){var t=N(e);return q.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,i.options.modifiers)));return i.orderedModifiers=p.filter((function(e){return e.enabled})),i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"===typeof o){var a=o({state:i,name:t,instance:c,options:r}),f=function(){};s.push(a||f)}})),c.update()},forceUpdate:function(){if(!f){var e=i.elements,t=e.reference,n=e.popper;if(I(t,n)){i.rects={reference:y(t,Z(n),"fixed"===i.options.strategy),popper:g(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var o=i.orderedModifiers[r],a=o.fn,s=o.options,u=void 0===s?{}:s,p=o.name;"function"===typeof a&&(i=a({state:i,options:u,name:p,instance:c})||i)}else i.reset=!1,r=-1}}},update:V((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){u(),f=!0}};if(!I(e,t))return c;function u(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var F={passive:!0};var U={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,f=void 0===a||a,c=(0,s.Z)(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,F)})),f&&c.addEventListener("resize",n.update,F),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,F)})),f&&c.removeEventListener("resize",n.update,F)}},data:{}};function z(e){return e.split("-")[0]}function Y(e){return e.split("-")[1]}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?z(o):null,a=o?Y(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case k:t={x:s,y:n.y-r.height};break;case E:t={x:s,y:n.y+n.height};break;case R:t={x:n.x+n.width,y:f};break;case D:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?X(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case T:t[c]=t[c]-(n[u]/2-r[u]/2);break;case L:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var J={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=G({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function $(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,f=e.offsets,c=e.position,u=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=f.x,y=void 0===v?0:v,g=f.y,b=void 0===g?0:g,x="function"===typeof l?l({x:y,y:b}):{x:y,y:b};y=x.x,b=x.y;var w=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),j=D,A=k,P=window;if(p){var T=Z(n),W="clientHeight",M="clientWidth";if(T===(0,s.Z)(n)&&"static"!==m(T=d(n)).position&&"absolute"===c&&(W="scrollHeight",M="scrollWidth"),o===k||(o===D||o===R)&&i===L)A=E,b-=(h&&T===P&&P.visualViewport?P.visualViewport.height:T[W])-r.height,b*=u?1:-1;if(o===D||(o===k||o===E)&&i===L)j=R,y-=(h&&T===P&&P.visualViewport?P.visualViewport.width:T[M])-r.width,y*=u?1:-1}var B,C=Object.assign({position:c},p&&Q),H=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:a(t*r)/r||0,y:a(n*r)/r||0}}({x:y,y:b}):{x:y,y:b};return y=H.x,b=H.y,u?Object.assign({},C,((B={})[A]=O?"0":"",B[j]=w?"0":"",B.transform=(P.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",B)):Object.assign({},C,((t={})[A]=O?b+"px":"",t[j]=w?y+"px":"",t.transform="",t))}var ee={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:z(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,$(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,$(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},te=n(13514);var ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=z(e),o=[D,k].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[D,R].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},re={left:"right",right:"left",bottom:"top",top:"bottom"};function oe(e){return e.replace(/left|right|bottom|top/g,(function(e){return re[e]}))}var ie={start:"end",end:"start"};function ae(e){return e.replace(/start|end/g,(function(e){return ie[e]}))}function se(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,r.Zq)(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ce(e,t,n){return t===M?fe(function(e,t){var n=(0,s.Z)(e),r=d(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,f=0,u=0;if(o){i=o.width,a=o.height;var p=c();(p||!p&&"fixed"===t)&&(f=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:f+h(e),y:u}}(e,n)):(0,r.kK)(t)?function(e,t){var n=u(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):fe(function(e){var t,n=d(e),r=p(e),i=null==(t=e.ownerDocument)?void 0:t.body,a=o(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=o(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(i||n).direction&&(f+=o(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function ue(e,t,n,a){var s="clippingParents"===t?function(e){var t=w(b(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&(0,r.Re)(e)?Z(e):e;return(0,r.kK)(n)?t.filter((function(e){return(0,r.kK)(e)&&se(e,n)&&"body"!==(0,l.Z)(e)})):[]}(e):[].concat(t),f=[].concat(s,[n]),c=f[0],u=f.reduce((function(t,n){var r=ce(e,n,a);return t.top=o(r.top,t.top),t.right=i(r.right,t.right),t.bottom=i(r.bottom,t.bottom),t.left=o(r.left,t.left),t}),ce(e,c,a));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function pe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function le(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function de(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,a=n.strategy,s=void 0===a?e.strategy:a,f=n.boundary,c=void 0===f?W:f,p=n.rootBoundary,l=void 0===p?M:p,h=n.elementContext,m=void 0===h?B:h,v=n.altBoundary,y=void 0!==v&&v,g=n.padding,b=void 0===g?0:g,x=pe("number"!==typeof b?b:le(b,P)),w=m===B?C:B,O=e.rects.popper,j=e.elements[y?w:m],Z=ue((0,r.kK)(j)?j:j.contextElement||d(e.elements.popper),c,l,s),D=u(e.elements.reference),A=G({reference:D,element:O,strategy:"absolute",placement:i}),T=fe(Object.assign({},O,A)),L=m===B?T:D,H={top:Z.top-L.top+x.top,bottom:L.bottom-Z.bottom+x.bottom,left:Z.left-L.left+x.left,right:L.right-Z.right+x.right},S=e.modifiersData.offset;if(m===B&&S){var q=S[i];Object.keys(H).forEach((function(e){var t=[R,E].indexOf(e)>=0?1:-1,n=[k,E].indexOf(e)>=0?"y":"x";H[e]+=q[n]*t}))}return H}var he={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=z(v),g=f||(y===v||!h?[oe(v)]:function(e){if(z(e)===A)return[];var t=oe(e);return[ae(e),t,ae(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(z(n)===A?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?S:f,u=Y(r),p=u?s?H:H.filter((function(e){return Y(e)===u})):P,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=de(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[z(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,j=!0,Z=b[0],L=0;L<b.length;L++){var W=b[L],M=z(W),B=Y(W)===T,C=[k,E].indexOf(M)>=0,q=C?"width":"height",N=de(t,{placement:W,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),V=C?B?R:D:B?E:k;x[q]>w[q]&&(V=oe(V));var _=oe(V),I=[];if(i&&I.push(N[M]<=0),s&&I.push(N[V]<=0,N[_]<=0),I.every((function(e){return e}))){Z=W,j=!1;break}O.set(W,I)}if(j)for(var K=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return Z=t,"break"},F=h?3:1;F>0;F--){if("break"===K(F))break}t.placement!==Z&&(t.modifiersData[r]._skip=!0,t.placement=Z,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function me(e,t,n){return o(e,i(t,n))}var ve={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,s=void 0===a||a,f=n.altAxis,c=void 0!==f&&f,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,y=void 0===v?0:v,b=de(t,{boundary:u,rootBoundary:p,padding:d,altBoundary:l}),x=z(t.placement),w=Y(t.placement),O=!w,j=X(x),A="x"===j?"y":"x",P=t.modifiersData.popperOffsets,L=t.rects.reference,W=t.rects.popper,M="function"===typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,B="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(P){if(s){var S,q="y"===j?k:D,N="y"===j?E:R,V="y"===j?"height":"width",_=P[j],I=_+b[q],K=_-b[N],F=m?-W[V]/2:0,U=w===T?L[V]:W[V],G=w===T?-W[V]:-L[V],J=t.elements.arrow,Q=m&&J?g(J):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[q],te=$[N],ne=me(0,L[V],Q[V]),re=O?L[V]/2-F-ne-ee-B.mainAxis:U-ne-ee-B.mainAxis,oe=O?-L[V]/2+F+ne+te+B.mainAxis:G+ne+te+B.mainAxis,ie=t.elements.arrow&&Z(t.elements.arrow),ae=ie?"y"===j?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(S=null==C?void 0:C[j])?S:0,fe=_+oe-se,ce=me(m?i(I,_+re-se-ae):I,_,m?o(K,fe):K);P[j]=ce,H[j]=ce-_}if(c){var ue,pe="x"===j?k:D,le="x"===j?E:R,he=P[A],ve="y"===A?"height":"width",ye=he+b[pe],ge=he-b[le],be=-1!==[k,D].indexOf(x),xe=null!=(ue=null==C?void 0:C[A])?ue:0,we=be?ye:he-L[ve]-W[ve]-xe+B.altAxis,Oe=be?he+L[ve]+W[ve]-xe-B.altAxis:ge,je=m&&be?function(e,t,n){var r=me(e,t,n);return r>n?n:r}(we,he,Oe):me(m?we:ye,he,m?Oe:ge);P[A]=je,H[A]=je-he}t.modifiersData[r]=H}},requiresIfExists:["offset"]};var ye={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=z(n.placement),f=X(s),c=[D,R].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return pe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:le(e,P))}(o.padding,n),p=g(i),l="y"===f?k:D,d="y"===f?E:R,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=Z(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,x=u[l],w=y-p[c]-u[d],O=y/2-p[c]/2+b,j=me(x,O,w),A=f;n.modifiersData[r]=((t={})[A]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&se(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ge(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[k,R,E,D].some((function(t){return e[t]>=0}))}var xe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=de(t,{elementContext:"reference"}),s=de(t,{altBoundary:!0}),f=ge(a,r),c=ge(s,o,i),u=be(f),p=be(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}},we=K({defaultModifiers:[U,J,ee,te.Z,ne,he,ve,ye,xe]})},80888:function(e,t,n){"use strict";var r=n(79047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},52007:function(e,t,n){e.exports=n(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=514.107d74c4.chunk.js.map