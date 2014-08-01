(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded;charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+";q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
var initConstant = {
    step: 1,
    dataMode: 0,
    zoom : null
}
var Dom = {}
function initDom() {
    Dom = {
        left: $("#left"),
        right: $("#right"),
        attachToMap: $("#attachToMap"),
        changLevel: $("#changLevel"),
        strict: $("#strict"),
        cbCenter: $("#cbCenter"),
        BtnExport: $("#BtnExport"),
        BtnCorrect: $("#BtnCorrect"),
        showLevel: $("#showLevel"),
        delTable: $("#delTable"),
        mbData: $("#mbData"),
        resultToCopy: $("#resultTocopy"),
        btnValidation: $("#btnValidation"),
        feedBackToCopy: $("#feedBackTocopy"),
        dataLi: $(".dataLi"),
        chooseFormat: $(".arrow-down"),
        latLngData: $("#latLngT"),
        photoData: $("#photoT"),
        paramT: $(".paramT"),
        dataTopLi: $(".dataTop li"),
        letd: $('.letd'),
        fRe:$(".fRe")
    }
};
function events() {
    $dDriver.bind("getData", function (evt, count) {
        countView.setTotle(count)
    });
    $dDriver.bind("switch", function (evt, sIndex, eIndex) {
        tableView.fillTable(sIndex, eIndex);
        var point = dDriver.getPoint(sIndex)
        mMap.setBMapCenter(point);
    });
    $dDriver.bind("select", function (evt, data) {
        var rowIndex = data.rowIndex;
        var bpoint = data.bpoint;
        var checkState = data.checkState;
        mMap.setLabelPosition(rowIndex, bpoint, checkState);
        mMap.setBMapCenter(bpoint);
        tableView.updateSelectRow(rowIndex);
        buttomView.showCurLable();
        mMap.setLabelStyle(rowIndex,checkState);
        console.log(data);
        var data2 = dDriver.getDataByRowIndex(rowIndex)
        var grid = data2.pointImageInfo.grid;
        var offset = data2.pointImageInfo.offset;
        tmcTool.cache.get(grid.z+'_'+grid.x+'_'+grid.y ,function (e){
            var result = e.result;
            if(result) {
                myImageData = result.value;
                var ctx = myCanvas.getContext("2d");
                ctx.fill();
                ctx.clearRect(0, 0, 256, 256);
                ctx.beginPath();
                ctx.putImageData(result.value, 0, 0);
                ctx.arc(offset.left,offset.top,1,0,Math.PI*2);
                ctx.stroke();
                ctx.closePath();
            }
        })
    });
    $dDriver.bind("update", function (e, data) {
        var index = data.index;
        var rowIndex = data.rowIndex;
        var left = data.left;
        var top = data.top;
        var url = data.url;
        tableView.updateRow(rowIndex, left, top,url);
        var ctx = myCanvas.getContext("2d");
        ctx.fill();
        ctx.clearRect(0, 0, 256, 256);
        ctx.beginPath();
        ctx.putImageData(myImageData, 0, 0);
        ctx.arc(left,top,1,0,Math.PI*2);
        ctx.stroke();
        ctx.closePath();
    });
    $numberView.bind("switch", function (evt, data) {
        countView.init();
        dDriver.setCurPage(data.pageNum);
        $(".right").hide();
    });
    $dDriver.bind("upload", function (evt, data) {
        countView.setUsed(data.isUsed);
    });
    $dDriver.bind("cbCheck", function (evt, data) {
        countView.setSingleUsed(data.isUsed);
    });
    $dDriver.bind("readStatus", function (evt, data) {
        countView.setCheckCount(data.checkStatus,data.lastCheckStatus);
        mMap.setLabelStyle(data.rowIndex,data.checkStatus);
    });
    $dDriver.bind("checkStatus", function (evt, data) {
        countView.setCheckCount(data.checkStatus,data.lastCheckStatus);
        tableView.updateState(data);
        mMap.setLabelStyle(data.rowIndex,data.checkStatus);
    });
}
function CacheHelper (name, expire) {
	this._name = name;
	if(typeof expire == 'undefined') {
		expire = 24 * 365;		
	};
    if(expire == 0) {
        expire = 0;
    }
	this._expire = expire * 60 * 60 * 1000;
	this._dbname = this._name;
	this._db = null;
	this._opened = false;	
};
CacheHelper.prototype._onerror = function (e, callback) {
    var callbackParam = this._getParamForCallback();
    callbackParam.error = e.target.error;
    callback && callback.apply(this, [callbackParam])
};
CacheHelper.prototype._onsuccess = function (e, callback) {
    var callbackParam = this._getParamForCallback();
    callbackParam.suc = true;
    callbackParam.result = e.target.result;
    return callback && callback.apply(this, [callbackParam])
};
CacheHelper.prototype._getObjectStore = function (mode) {
	if(this._db) {
		mode = mode || 'readonly';
		var transaction = this._db.transaction(this._name, mode);
		if(transaction) {
			return transaction.objectStore(this._name);
		}	
	}	
	return null;
};
CacheHelper.prototype._getParamForCallback = function () {
	return {
		suc : false, 
		result : null, 
		error : null
	};
};
CacheHelper.prototype._openDatabase = function (callback) {
	var _this = this;
	var	request = CacheHelper._DB_SYSTEM.open(this._dbname);
	var callbackParam = this._getParamForCallback();
	request.onerror = function(e) {
		callbackParam.code = e.target.errorCode;
		callback && callback.apply(_this, [callbackParam])
	};
	request.onsuccess = function(e) {	
		_this._opened = true;
		_this._db = e.target.result;
		callbackParam.suc = true;
		callback && callback.apply(_this, [callbackParam])
	};
	request.onupgradeneeded = function (e) {		
		var store = e.currentTarget.result.createObjectStore(_this._name, {keyPath: "id"});
		store.createIndex("value", "value", { unique: false });        
		store.createIndex("expire", "expire", { unique: false });
		store.createIndex("time", "time", { unique: false });		
	};
};
CacheHelper.prototype.getOpenState = function () {
	return this._opened;
};
CacheHelper.prototype.init = function (callback) {
	this._openDatabase(callback);
};
CacheHelper.prototype.exist = function (key, callback) {
	var store = this._getObjectStore();
	if(!store) return;
	var _this = this;	
	var request = store.count(key);
    request.onsuccess = function (e) {
        _this._onsuccess(e, callback);
    };
    request.onerror = function (e) {
        _this._onerror(e, callback);
    };
};
CacheHelper.prototype.add = function (key, value, callback) {	
	var store = this._getObjectStore('readwrite');	
	if(!store) return;
	var _this = this;	
	var record = {
		id : key,
		value : value,
		time : new Date().valueOf(),
		expire : _this._expire
	};
	var request = store.add(record)
	request.onsuccess = function(e) {
        _this._onsuccess(e, callback);
	};
	request.onerror = function(e) {
        _this._onerror(e, callback);
	};	
};
CacheHelper.prototype.update = function (key, value, callback) {
	var store = this._getObjectStore('readwrite');	
	if(!store) return;
	var _this = this;
	var record = {
		id : key,
		value : value,
		time : new Date().valueOf(),
		expire : _this._expire
	};
	store.get(key).onsuccess = function(e) {
		var request = store.put(record);		
		request.onsuccess = function(e) {
            _this._onsuccess(e, callback);
		};			
		request.onerror = function(e) {
            _this._onerror(e, callback);
        };
    };
	store.get(key).onerror = function(e) {
        _this._onerror(e, callback);
	};	
};
CacheHelper.prototype.get = function (key, callback) {
	var store = this._getObjectStore();
	if(!store) return;
	var _this = this;	
	var request = store.get(key)
	request.onsuccess = function(e) {
        _this._onsuccess(e, callback);
	};
	request.onerror = function(e) {
        _this._onerror(e, callback);
	};
};
CacheHelper.prototype.getAll = function (callback) {
    var store = this._getObjectStore();
    if(!store) return;
    var request = store.openCursor();
    var _this = this;
    var result = [];
    request.onsuccess = function(e) {
        var cursor = e.target.result;
        if (cursor) {
            result.push(cursor.value);
            cursor.continue();
        } else {
            _this._onsuccess( {target : {result : result}}, callback);
        }
    };
    request.onerror = function(e) {
        _this._onerror(e, callback);
    };
};
CacheHelper.prototype.clear = function (callback) {
	var store = this._getObjectStore('readwrite');	
	if(!store) return;
	var _this = this;	
	var request = store.clear();
	request.onsuccess = function(e) {
        _this._onsuccess(e, callback);
	};
	request.onerror = function(e) {
	};
};
CacheHelper.prototype.remove = function (callback) {
	if(!this._db) return;
	var _this = this;
	this._db.close();
	var request = CacheHelper._DB_SYSTEM.deleteDatabase(this._dbname);
	request.onsuccess = function (e) {
        _this._onsuccess(e, callback);
	};
	request.onerror = function (e) {
        _this._onerror(e, callback);
	};
	this._name = null;
	this._expire = null;
	this._dbname = null;
	this._db = null;
};
CacheHelper._DB_SYSTEM = undefined;
CacheHelper._DB_SUPPORT = (function () {
	CacheHelper._DB_SYSTEM = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	return CacheHelper._DB_SYSTEM ? true : false;
})();
if(!CacheHelper._DB_SUPPORT) {
	CacheHelper = null;
}
var DataDriver = function (pageSize) {
    this._dataArr = [];
    this._count = this._dataArr.length;
    this._pageNum = 1;
    this._pageSize = pageSize;
    this._length = null;
    this.index = null;
    this._db = 0;
    this.isStrict = false;
    this.isOnlyError = false;
};
DataDriver.prototype.setDataArr = function (dataArr){
    if(dataArr instanceof Array) {
        this._dataArr = dataArr;
        this._count = dataArr.length;
        $(this).trigger("getData",this._count);
    }
};
DataDriver.prototype.setCurPage = function (pageNum) {
    pageNum = pageNum === undefined ? 1 : pageNum;
    this._pageNum = pageNum;
    var ps = this._pageSize;
    var sIndex = (pageNum -1) * ps;
    var pageCount = this.getPageCount();
    var eIndex = this._pageNum === pageCount && this.getCount() % ps ? (this.getCount() % ps + sIndex) : (ps + sIndex);
    this._length = eIndex - sIndex;
    $(this).trigger('switch', [sIndex, eIndex]);
    this.index = null;
    for(var i = sIndex; i < eIndex; i++) {
       this.checkData(i,false, this.isStrict);
        var data = this.getData(i);
        var row = this.getRowIndex(i);
        var isUsed = data.isUsed;
        $(this).trigger("upload",{rowIndex: row,isUsed: isUsed});
    }
};
DataDriver.prototype.getPoint = function (index) {
    index = index === undefined ? this.index : index;
    return index === null ?  null : this._dataArr[index].bdpoint;
}
DataDriver.prototype.getPageSize = function () {
    return this._pageSize;
}
DataDriver.prototype._selectAbsoluteData = function (index) {
    return this._dataArr[index];
};
DataDriver.prototype.selectData = function (rowIndex) {
    if(rowIndex === -1){
        return;
    };
    this.index = this._getIndex(rowIndex);
    var data = this._dataArr[this.index];
    var bdpoint = data.bdpoint;
    var cs = data.checkStatus;
    if(cs != 0) {
        $(this).trigger("select",{rowIndex:rowIndex,bpoint:bdpoint,checkState:cs});
    }
};
DataDriver.prototype.updateData = function (bpoint,zoom){
    if(this.index === null) {
        return;
    }
    var pointImageInfo = tmcTool.getImageInfo(bpoint,zoom);
    var left = pointImageInfo.offset.left;
    var top = pointImageInfo.offset.top;
    var url = pointImageInfo.trafficImg;
    this._dataArr[this.index].bdpoint = bpoint;
    this._dataArr[this.index].point = tmcTool.BD2GCJ(bpoint.lng, bpoint.lat);
    this._dataArr[this.index].pointImageInfo = pointImageInfo;
    $(this).trigger("update",{index:this.index, rowIndex:this.getRowIndex(),left: left,top: top,url: url});
    this.checkData(this.index, true, true);
};
DataDriver.prototype.getZoom = function (){
    var fistData = this._dataArr[0];
    return fistData ? fistData.pointImageInfo.grid.z : null;
};
DataDriver.prototype.updateUsed = function (rowIndex,isUsed,subNum){
    var index = this._getIndex(rowIndex);
    var data = this._dataArr[index];
    data.isUsed = isUsed;
    $(this).trigger("cbCheck",{index: index, rowIndex: rowIndex,isUsed: isUsed,subNum:subNum});
    dataTool.update(index,data);
};
DataDriver.prototype.nextData = function () {
    var min = (this._pageNum - 1)* this._pageSize;
    var max = min + this._length;
    var _index = this.index;
    var index = _index === null ? (min - 1) : _index;
    var j = 0;
    while (index < max) {
        index++;
        j++;
        if (index >= max) {
            index = min - 1;
            continue;
        }
        var arr = this.getData(index);
        if(arr.checkStatus ===1) {
          continue;
        };
        if (arr && arr.checkStatus) {
            break;
        }
        if(j >= 2 * this._length){
            break;
        }
    }
    this.index = index;
    var rowIndex = this.getRowIndex();
    this.selectData(rowIndex);
};
DataDriver.prototype.preData = function () {
    var index = this.index;
    var min = (this._pageNum - 1)* this._pageSize;
    var max = min + this._length;
    while (index >= min) {
        index--;
        if (index < min) {
            index = max - 1;
        }
        if (this.getData(index).checkStatus) {
            break;
        }
    }
    this.index = index;
    var rowIndex = this.getRowIndex();
    this.selectData(rowIndex);
};
DataDriver.prototype.checkData = function (i, single, isStrict) {
    var data = this.getData(i);
    var checkStatus = data.checkStatus;
    var row = this.getRowIndex(i);
    if(single || !checkStatus){
        this._checkData(data,i,isStrict)
    } else {
        $(this).trigger("readStatus",{checkStatus: checkStatus,rowIndex: row,lastCheckStatus:0});
    }
}
DataDriver.prototype._checkData =  function  (data,i,isStrict)  {
    var _this = this;
    var lastCheckStatus = data.checkStatus;
    tmcTool.checkAccuracy(data.pointImageInfo,  (function (i){
        return function (foo){
            var row = _this.getRowIndex(i);
            var checkStatus;
            if(foo){
                checkStatus = 1;
            } else {
                checkStatus = -1;
            }
            _this._dataArr[i].checkStatus = checkStatus;
            if(_this.getPageNum(i) === _this._pageNum){
                $(_this).trigger('checkStatus', {rowIndex : row, index : i,checkStatus: checkStatus,lastCheckStatus: lastCheckStatus});
            }
            dataTool.update(i,data);
        }
    })(i),isStrict);
}
DataDriver.prototype.getPageNum = function (i) {
    return i === undefined ? this._pageNum : (i - i % this._pageSize) / this._pageSize + 1;
};
DataDriver.prototype.getPageCount = function () {
    return  Math.ceil(this._count / this._pageSize);
};
DataDriver.prototype.getCount = function () {
    return this._count;
};
DataDriver.prototype.getData = function (index) {
    return this._dataArr[index];
};
DataDriver.prototype.getDataByRowIndex = function (RowIndex) {
    var index = this._getIndex(RowIndex);
    return this._dataArr[index];
}
DataDriver.prototype.getTableData = function (index) {
    var data = this.getData(index);
    var p = {
        id:data.id,
        direction:data.direction,
        left:data.pointImageInfo.offset.left,
        top:data.pointImageInfo.offset.top,
        checkStatus:data.checkStatus,
        isUsed:data.isUsed,
        url:data.pointImageInfo.trafficImg
    };
    return p;
};
DataDriver.prototype.getRowIndex = function (index) {
    index = index === undefined ? this.index : index;
    return index % this._pageSize;
};
DataDriver.prototype._getIndex = function (rowIndex) {
    return  (this._pageNum - 1) * this._pageSize + rowIndex;
};
DataDriver.prototype._calculatePageNum = function (index) {
    index++;
    return Math.ceil(index / this._pageSize);
};
DataDriver.prototype.finalize = function () {};
var bd = {};
(function (exports) {
    var Hj = [75, 60, 45, 30, 15, 0],
        Qp = [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
            [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
        ],
        Sp = [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Au = [
            [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
            [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
            [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
            [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
            [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
            [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
        ],
        Gi = new BMap.Size(256, 256);
    function ob(zoom) {
        return Math.pow(2, 18 - zoom);
    }
    function wz(zoom) {
        return ob(zoom) * 256;
    }
    function zo(a, b, c) {
        for (; a > c;) a -= c - b;
        for (; a < b;) a += c - b;
        return a
    }
    function Eo(a, b, c) {
        b != null && (a = Math.max(a, b));
        c != null && (a = Math.min(a, c));
        return a
    }
    function Yr(a, b) {
        if (a && b) {
            var c = b[0] + b[1] * Math.abs(a.lng),
                d = Math.abs(a.lat) / b[9],
                d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
                c = c * (0 > a.lng ? -1 : 1),
                d = d * (0 > a.lat ? -1 : 1);
            return new BMap.Point(c, d)
        }
        return null;
    }
    function Wa(a) {
        var b, c;
        a.lng = zo(a.lng, -180, 180);
        a.lat = Eo(a.lat, -74, 74);
        b = new BMap.Point(a.lng, a.lat);
        for (var d = 0; d < Hj['length']; d++)
            if (b.lat >= Hj[d]) {
                c = Qp[d];
                break
            }
        if (!c)
            for (d = Hj['length'] - 1; 0 <= d; d--)
                if (b.lat <= -Hj[d]) {
                    c = Qp[d];
                    break
                }
        a = Yr(a, c);
        return a = new BMap.Point(a.lng.toFixed(2), a.lat.toFixed(2))
    }
    function Ra(a) {
        var b, c;
        b = new BMap.Point(Math.abs(a.lng), Math.abs(a.lat));
        for (var d = 0; d < Sp['length']; d++)
            if (b.lat >= Sp[d]) {
                c = Au[d];
                break
            }
        a = Yr(a, c);
        return a = new BMap.Point(a.lng.toFixed(6), a.lat.toFixed(6))
    }
    function qf(a) {
        return Ra(a);
    }
    function $a(a, b, c, d) {
        if (a) {
            a = Wa(a);
            b = ob(b);
            return new BMap.Pixel(Math.floor((a.lng - c.lng) / b), Math.floor((c.lat - a.lat) / b));
        }
    }
    exports.Wa = Wa;
    exports.Ra = Ra;
    exports.$a = $a;
    exports.wz = wz;
    exports.ob = ob;
    exports.Gi = Gi;
})(bd);
var colorSample = [
    {
        H: 78,
        S: [131, 138],
        L: [124, 195]
    },
    {
        H: 25,
        S: [255, 255],
        L: [140, 190]
    },
    {
        H: 0,
        S: [224, 225],
        L: [145, 190]
    }
];
var ColorConvert = {
    _HUE2RGB: function (v1, v2, v3) {
        if (v3 < 0) v3 += 1;
        if (v3 > 1) v3 -= 1;
        if (v3 * 6 < 1) return v1 + (v2 - v1) * 6 * v3;
        if (v3 * 2 < 1) return v2;
        if (v3 * 3 < 2) return v1 + (v2 - v1) * ((2.0 / 3.0) - v3) * 6;
        return v1;
    },
    RGB2HSL: function (r, g, b) {
        var R = r / 255,
            G = g / 255,
            B = b / 255,
            trueMax = Math.max(r, g, b),
            min = Math.min(R, G, B),
            max = Math.max(R, G, B),
            delMax = max - min,
            delR, delG, delB,
            H, S, L;
        L = (max + min) / 2;
        if (delMax === 0) {
            H = 0;
            S = 0;
        } else {
            if (L < 0.5) {
                S = delMax / (max + min);
            } else {
                S = delMax / (2 - max - min);
            }
            delR = ((max - R) / 6 + delMax / 2) / delMax;
            delG = ((max - G) / 6 + delMax / 2) / delMax;
            delB = ((max - B) / 6 + delMax / 2) / delMax;
            if (r === trueMax) {
                H = delB - delG;
            } else if (g === trueMax) {
                H = (1 / 3) + delR - delB;
            } else if (b === trueMax) {
                H = (2 / 3) + delG - delR;
            }
            if (H < 0) {
                H += 1;
            }
            if (H > 1) {
                H -= 1;
            }
        }
        return {
            H: Math.round(H * 255),
            S: Math.round(S * 255),
            L: Math.round(L * 255)
        };
    },
    HSL2RGB: function (H, S, L) {
        H = H / 255;
        S = S / 255;
        L = L / 255;
        var R, G, B,
            var1, var2;
        if (S === 0) {
            R = L * 255.0;
            G = L * 255.0;
            B = L * 255.0;
        } else {
            if (L < 0.5) {
                var2 = L * (1 + S);
            } else {
                var2 = (L + S) - (S * L);
            }
            var1 = 2.0 * L - var2;
            R = Math.round(255.0 * this._HUE2RGB(var1, var2, H + (1.0 / 3.0)));
            G = Math.round(255.0 * this._HUE2RGB(var1, var2, H));
            B = Math.round(255.0 * this._HUE2RGB(var1, var2, H - (1.0 / 3.0)));
        }
        return {
            R: R,
            G: G,
            B: B
        };
    }
};
var tmcTool = {};
(function (exports) {
    var Wa = bd.Wa,
        Ra = bd.Ra,
        $a = bd.$a,
        wz = bd.wz,
        ob = bd.ob,
        Gi = bd.Gi;
    var canvas, ctx, timer = null;
    var checkCallback = [];
    var cache = new CacheHelper('imgData', 24);
    var trafficTemplate = 'http://its.map.baidu.com:8002/traffic/TrafficTileService?time={{time}}&level={{zoom}}&x={{x}}&y={{y}}',
        baseMapTemplate = 'http://online1.map.bdimg.com/tile/?qt=tile&x={{x}}&y={{y}}&z={{zoom}}&styles=pl&udt={{version}}',
        baseMapVersion = '20131220',
        imageInterface = 'http://192.168.0.175:8008/baiduImg.jsp?';
    var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
    function pixelToPoint(pixel, zoom, pt, size) {
        var pt = Wa(pt);
        return Ra(new BMap.Point(
            pt.lng + zoom * (pixel.x - size['width'] / 2),
            pt.lat - zoom * (pixel.y - size['height'] / 2)
        ));
    }
    function toPoint(gridX, gridY, zoom, offsetX, offsetY) {
        var pt = getGridPoint(gridX, gridY, zoom);
        return pixelToPoint(new BMap.Pixel(offsetX + 128, offsetY + 128), ob(zoom), pt, new BMap.Size(256, 256));
    }
    function getTime() {
        return new Date().getTime();
    }
    function getGrid(point, zoom) {
        var pt = Wa(point),
            gridX = Math.floor(pt.lng / wz(zoom)),
            gridY = Math.floor(pt.lat / wz(zoom));
        return {
            x: gridX,
            y: gridY,
            z: zoom
        };
    }
    function getGridPoint(x, y, z) {
        var pt = new BMap.Point(wz(z) * x, wz(z) * (y + 1));
        return Ra(pt);
    }
    function getOffset(pt1, pt2, z) {
        var _pt1 = Wa(pt1),
            _px2 = $a(pt2, z, _pt1, Gi);
        return {
            top: _px2.y || 1,
            left: _px2.x || 1
        };
    }
    function getPointInfo(pt, zoom) {
        var grid = getGrid(pt, zoom),
            origin = getGridPoint(grid.x, grid.y, zoom),
            offset = getOffset(origin, pt, zoom);
        return {
            grid: grid,
            offset: offset
        };
    }
    function getImageInfo(pt, zoom) {
        var i = getPointInfo(pt, zoom),
            traffic = trafficTemplate.replace('{{time}}', getTime())
                .replace('{{version}}', '16')
                .replace('{{zoom}}', i.grid.z)
                .replace('{{x}}', i.grid.x)
                .replace('{{y}}', i.grid.y),
            baseMap = baseMapTemplate.replace('{{version}}', baseMapVersion)
                .replace('{{x}}', i.grid.x)
                .replace('{{y}}', i.grid.y)
                .replace('{{zoom}}', i.grid.z);
        return {
            trafficImg: traffic,
            grid: i.grid,
            offset: i.offset
        };
    }
    function GCJ2BD(lng, lat) {
        var x = lng, y = lat;
        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
        return {
            lng: z * Math.cos(theta) + 0.0065,
            lat: z * Math.sin(theta) + 0.006
        };
    }
    function BD2GCJ(lng, lat) {
        var x = lng - 0.0065, y = lat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
        return {
            lng: z * Math.cos(theta),
            lat: z * Math.sin(theta)
        };
    }
    function createCanvas() {
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 256;
            ctx = canvas.getContext('2d');
        }
    }
    var getKeyByURL = function (url) {
        var x = url.match(/x=\d+/)[0].match(/\d+/)[0];
        var y = url.match(/y=\d+/)[0].match(/\d+/)[0];
        var z = url.match(/(z|level)=\d+/)[0].match(/\d+/)[0]
        var key = [z, x, y].join('_');
        return key;
    };
    function getCanvasData(key, buffer, order) {
        createCanvas();
        var _blob = new Blob(new Array(buffer), { type: "image/png" });
        var _url = URL.createObjectURL(_blob);
        var _img = new Image();
        var imgData = undefined;
        _img.onload = function () {
            ctx.clearRect(0, 0, 256, 256);
            ctx.drawImage(this, 0, 0);
            URL.revokeObjectURL(_url);
            imgData = ctx.getImageData(0, 0, 256, 256);
            cache[order](key, imgData);
            exeCheckCallback(key, imgData);
        };
        _img.onerror = function () {
            exeCheckCallback(key, imgData);
        };
        _img.src = _url;
    };
    function requestImgData(url, order) {
        if (require("http")) {
            var http = require("http");
            http.get(url,function (res) {
                res.setEncoding('binary');//二进制（binary）
                var re = '';
                res.on('data',function (data) {
                    re += data;
                }).on('end', function () {
                        var key = getKeyByURL(url);
                        var b = new Buffer(re, 'binary');
                        var imageData = toArrayBuffer(b);
                        getCanvasData(key, imageData, order);
                    })
            }).on('error', function (e) {
                    console.log("Got error: " + e.message);
                });
        }
    };
    function toArrayBuffer(buffer) {
        var ab = new ArrayBuffer(buffer.length);
        var view = new Uint8Array(ab);
        for (var i = 0; i < buffer.length; ++i) {
            view[i] = buffer[i];
        }
        return ab;
    }
    function exeCheckCallback(key, data) {
        var cbs = checkCallback[key].cbs;
        var length = cbs.length;
        for (var i = 0; i < length; i++) {
            cbs.pop()(data);
        }
    }
    function isExpire(record) {
        var time = parseInt(record.time) + parseInt(record.expire);
        return getTime() >= time;
    };
    function getImgDataFromDB(key) {
        cache.get(key, function (e) {
            var _cache = checkCallback[key];
            if (!_cache) return;
            var record = e.result;
            var url = _cache.url;
            var order = 'add';
            if (record) {
                if (!isExpire(record)) {
                    return exeCheckCallback(key, record.value);
                } else {
                    order = 'update';
                }
            }
            requestImgData(url, order);
        });
    }
    function getImgCanvasData() {
        for (var key in checkCallback) {
            getImgDataFromDB(key);
        }
    }
    function getImageData(url, callback) {
        timer && window.clearTimeout(timer);
        var key = getKeyByURL(url);
        if (!checkCallback[key]) {
            checkCallback[key] = {
                url: url,
                cbs: []	//callback集合
            };
        }
        checkCallback[key].cbs.push(callback);
        timer = window.setTimeout(getImgCanvasData, 0);
    }
    function checkAccuracy(info, callback, strict, customData) {
        createCanvas();
        getImageData(info.trafficImg, function (data) {
            var flag = data ? checkPixel(info.offset, strict, data) : false;
            callback(flag);
        });
    }
    function checkPixel(offset, strict, imgData) {
        var x = offset.left, y = offset.top;
        var length = (256 * (y - 1) + x) * 4;
        window.imgD = imgData;
        var r = imgData.data[length - 4],
            g = imgData.data[length - 3],
            b = imgData.data[length - 2],
            a = imgData.data[length - 1],
            hsl = ColorConvert.RGB2HSL(r, g, b),
            h = hsl.H,
            s = hsl.S,
            l = hsl.L;
        var boo;
        if (h === 0 && s === 0 && (l === 255 || l === 0)) {
            boo = false;
        } else {
            boo = true;
        }
        return boo;
    }
    cache.init(function () {
        exports.opened = true;
    });
    exports.checkAccuracy = checkAccuracy;
    exports.getImageInfo = getImageInfo;
    exports.GCJ2BD = GCJ2BD;
    exports.BD2GCJ = BD2GCJ;
    exports.toPoint = toPoint;
    exports.cache = cache;
})(tmcTool);
var dataTool = new (function () {
    var _this = this;
    this._db = null;
    if (typeof CacheHelper == 'function') {
        this._db = new CacheHelper('dataInfo', 0);
        this._db.init(function () {
            _this.opened = true;
        });
    }
    function getTime() {
        return new Date().getTime();
    }
    var timer = null;
    var sTime = getTime();
    this.ready = function (callback) {
        timer = window.setInterval(function () {
            if (getTime() - sTime > 6000) {
                alert('\u6570\u636E\u5E93\u8FDE\u63A5\u8D85\u65F6\uFF01');
                window.clearInterval(timer);
            };
            if (tmcTool.opened && _this.opened) {
                window.clearInterval(timer);
                callback && callback.apply(_this);
            }
        }, 0);
    };
    this.add = function (id, value, callback) {
        this._db && this._db.add(id, value, callback);
    };
    this.exist = function (id, callback) {
        this._db && this._db.exist(id, callback);
    };
    this.getAll = function (callback) {
        this._db && this._db.getAll(callback);
    };
    this.get = function (id, callback) {
        this._db && this._db.get(id, callback);
    };
    this.update = function (id, value, callback) {
        console.log(323232);
        this._db && this._db.update(id, value, callback);
    };
    this.clear = function (callback) {
        this._db && this._db.clear(callback);
    };
    this._strToObj = function (str) {
        return obj;
    };
    this._trim = function (data) {
        return data.replace(/^\n+|\n+$/g, "");
    }
    this.getDataFromContainer = function (container, zoomLevel) {
        var myValue = this._trim(container.value);
        if (myValue) {
            var strArr = myValue.split("\n");
            var mbE, _fp, _fps = [];
            strArr.every(function (val) {
                mbE = val.split('\t');
                if (mbE.length !== 4) {
                    return false;
                }
                _fp = {};
                _fp.id = parseFloat(mbE[0]);
                _fp.direction = parseFloat(mbE[1]);
                _fp.point = {lng: parseFloat(mbE[2]), lat: parseFloat(mbE[3])};
                var _bdpoint = tmcTool.GCJ2BD(_fp.point.lng, _fp.point.lat);
                _fp.pointImageInfo = tmcTool.getImageInfo(_bdpoint, zoomLevel);
                _fp.bdpoint = new BMap.Point(_bdpoint.lng, _bdpoint.lat);
                _fp.isUsed = 1;
                _fp.checkStatus = 0;
                _fps.push(_fp);
                return true;
            });
        }
        return _fps;
    };
    this.getDataFromReverse = function (container) {
        var data = this._trim(container.value);
        if (data) {
            var a = data.split('http');
            a.shift();
            var _fps = [];
            var _fp = {};
            var aLen = a.length;
            for (var i = 0, l = aLen; i < l; i++) {
                var ai = a[i];
                var as = ai.match(/level=\d+&x=\d+&y=\d+/).toString().match(/\d+/g);
                var ay = ai.replace(/\:\S+time\=\$time\$[\n]/, '').split(/,\n/);
                if(i !== aLen -1) {
                    ay.pop();
                }
                var grid = {
                    x: parseInt(as[1]),
                    y: parseInt(as[2]),
                    z: parseInt(as[0])
                };
                for (var j = 0, len = ay.length; j < len; j++) {
                    var ayi = ay[j];
                    var tr = ayi.split(',');
                    var  gz = grid['z'];
                    var bdPoint = tmcTool.toPoint(grid['x'], grid['y'], gz, parseInt(tr[2]), parseInt(tr[3]));
                    _fp = {
                        id: parseInt(tr[0]),
                        direction: parseInt(tr[1]),
                        pointImageInfo: {
                            offset: {
                                left: parseInt(tr[2]),
                                top: parseInt(tr[3])
                            },
                            trafficImg: tmcTool.getImageInfo(bdPoint,gz).trafficImg,
                            baseMapImg: tmcTool.getImageInfo(bdPoint,gz).baseMapImg,
                            grid: grid
                        },
                        bdpoint: bdPoint,
                        point: tmcTool.BD2GCJ(bdPoint.lng, bdPoint.lat),
                        isUsed: 1,
                        checkStatus: 0
                    }
                    _fps.push(_fp);
                }
            }
            return _fps;
        }
    };
    this.mergeArr = function (targetArr, sourceArr) {
        return [];
    };
})();
function ButtonView (containerId) {
    this._$container = $('#' + containerId);
    this._$checkBoxes = $('input[type="checkbox"]');
    this._$traffic = this._$checkBoxes.eq(0);
    this._$cross = this._$checkBoxes.eq(1);
    this._$label = this._$checkBoxes.eq(2);
    this._$removeRight = this._$checkBoxes.eq(3);
    this._Map = null;
    this._tableView = null;
};
ButtonView.prototype.setDriver = function (driver) {
    this._driver = driver;
};
ButtonView.prototype.setTableView = function (tableView) {
    this._tableView = tableView;
};
ButtonView.prototype.setMap = function (map) {
    this._Map = map;
};
ButtonView.prototype.setTrafficVisible = function () {
    var _this = this;
    this._$traffic.bind('click', function () {
        _this._Map.setTrafficVisible(this.checked);
    });
};
ButtonView.prototype.setRightTrHide = function () {
    var _this = this;
    this._$removeRight.bind('click', function () {
        _this._tableView.filterRightPoint(this.checked);
    });
};
ButtonView.prototype.setCrossVisible = function () {
    var _this =  this;
    this._$cross.bind("click",function (){
        _this._Map.setCrossVisible(this.checked)
    });
};
ButtonView.prototype.setAllLabelVisible = function () {
    var _this =  this;
    this._$label.bind("click",function (){
        _this._Map.setAllLabelVisible(this.checked)
    });
};
ButtonView.prototype.switchLable =  function () {
    var _this = this;
    var cb = $('#cbMk').get(0);
    if (cb.checked === true) {
        cb.checked = false;
    } else {
        cb.checked = true;
    }
    _this._Map.setAllLabelVisible(cb.checked);
    _this._Map.lbSetListenerEvent();
}
ButtonView.prototype.switchCross =  function () {
    var _this = this;
    var cb = $('#cbCenter').get(0);
    if (cb.checked === true) {
        cb.checked = false;
    } else {
        cb.checked = true;
    }
    _this._Map.setCrossVisible(cb.checked);
}
ButtonView.prototype.switchTraffic =  function () {
    var _this = this;
    var cb = $('#cbTraffic').get(0);
    if (cb.checked === true) {
        cb.checked = false;
    } else {
        cb.checked = true;
    }
    _this._Map.setTrafficVisible(cb.checked);
}
ButtonView.prototype.switchFilter =  function () {
    var cb = this._$removeRight.get(0);
    if (cb.checked === true) {
        cb.checked = false;
    } else {
        cb.checked = true;
    }
    this._tableView.filterRightPoint(cb.checked);
}
ButtonView.prototype.showCurLable = function () {
    var cur = this._$label.get(0);
    if(cur.checked){
        cur.checked = false;
        this._Map.setAllLabelVisible(false);
    }
};
ButtonView.prototype.finalize = function () {};
function CountView (containerId) {
    this._$container = $('#' + containerId);
    this._$containerPosterity = $('[_tmc]',this._$container);
    this._errorCon = this._$containerPosterity.eq(0);
    this._error = 0;
    this._checkStateCon = this._$containerPosterity.eq(1);
    this._checkState = 0;
    this._isUsedCon = this._$containerPosterity.eq(2);
    this._isUsed = 0;
    this._noUsedCon = this._$containerPosterity.eq(3);
    this._noUsed = 0;
    this._totleCon = this._$containerPosterity.eq(4);
    this._totle = [];
    this._mapZoom = this._$containerPosterity.eq(5);
    this._init();
};
CountView.prototype._init = function (){
    this._$container.show();
}
CountView.prototype.init = function (){
    this._error = 0;
    this._checkState = 0;
    this._isUsed = 0;
    this._noUsed = 0;
}
 CountView.prototype.setTotle = function (count) {
    this._totleCon.html(count);
    return this;
};
 CountView.prototype.setCheckCount = function (checkStatus,lastCheckStatus) {
    if(lastCheckStatus){
        if(checkStatus === -1 && lastCheckStatus === 1) {
            this._error++;
        } else if(checkStatus === 1 && lastCheckStatus === -1) {
            this._error--;
        }
        this._errorCon.html(this._error);
    } else {
        if(checkStatus === -1){
            this._error++;
        }
        this._errorCon.html(this._error);
        this._checkStateCon.html(++this._checkState);
    }
    return this;
};
CountView.prototype.setUsed = function (isUsed) {
    if(isUsed === 1){
        this._isUsedCon.html(++this._isUsed);
    } else {
        this._noUsedCon.html(++this._noUsed);
    }
    return this;
};
CountView.prototype.setMapZoom = function (zoom) {
    console.log(zoom);
    this._mapZoom.html(zoom);
    return this;
};
CountView.prototype.setSingleUsed = function (isUsed) {
    if(isUsed === 1){
        this._isUsedCon.html(++this._isUsed);
        this._noUsedCon.html(--this._noUsed);
    } else {
        this._isUsedCon.html(--this._isUsed);
        this._noUsedCon.html(++this._noUsed);
    }
    return this;
};
CountView.prototype.setCheckState = function (data) {};
CountView.prototype.showCount = function () {};
function NumberView (containerId, opts) {
    this._$container = $('#' + containerId);
    this._$numContainer = null;
    this._$home = null;
    this._$end = null;
    this._$next = null;
    this._$pre = null;
    this._showCount = opts.showCount;
    this._pageCount = 0;
    this._pageNum = 1;
    this._setListenerEvent();
};
NumberView.prototype._setListenerEvent = function () {
    var _this =this;
    this._$container.bind('click', function (e) {
        e.preventDefault();
        var target = e.target;
        var value = target.getAttribute('_tmc');
        if (!isNaN(value)) {
            value= parseInt(value);
        }
        var pageNum = _this._pageNum;
        var pageCount = _this._pageCount;
        if(!value){
            return;
        }
        if(typeof value === 'number'){
            _this.selectPage(value,_this._pageCount);
        }else {
            _this[value]();
        }
    });
};
NumberView.prototype._render = function (pageNum) {
    var dom = '',pageCount = this._pageCount,showCount = this._showCount;
    this._pageNum = pageNum;
    var halfCount = Math.ceil(showCount/2);
    var sIndex,count;
    if(showCount >= pageCount) {
        count = pageCount;
        sIndex = 1;
    } else{
        count = showCount;
        if(pageNum <= halfCount + 1) {
            sIndex = 1;
        } else if(pageNum > (pageCount - halfCount)){
            sIndex = pageCount - showCount + 1;
        } else {
            sIndex = pageNum - halfCount + 1;
        }
    }
    var s = pageNum ===1 ? '':'<a  href="#" _tmc="first">&lt;&lt;</a><a href="#" _tmc="pre">&lt;</a>';
    dom += s ;
    for(var i = sIndex;i < count + sIndex;i++){
        var s = i === pageNum ? 'class="on"':'';
        dom +=  '<a ' + s +' _tmc='+ i +' href="#">'+ i +'</a>'
    }
    var s = pageNum === pageCount ? '':'<a href="#" _tmc="next">&gt;</a><a href="#" _tmc="last">&gt;&gt;</a>'
    dom +=  s;
    this._$container.empty().append(dom);
};
NumberView.prototype.selectPage = function (pageNum, pageCount) {
    if(typeof pageCount === 'number' && pageCount > 0){
        this._pageCount = pageCount;
    }
    this._render(pageNum);
    $(this).trigger('switch', {pageNum : pageNum});
    return this;
};
NumberView.prototype.next = function () {
    if(this._pageNum < this._pageCount) {
        this.selectPage(++this._pageNum);
    }
    return this;
};
NumberView.prototype.pre = function () {
    if(this._pageNum > 1) {
        this.selectPage(--this._pageNum);
    }
    return this;
};
NumberView.prototype.first = function () {
    this.selectPage(1);
    return this;
};
NumberView.prototype.last = function () {
    this.selectPage(this._pageCount);
    return this;
};
NumberView.prototype.setVisible = function (visible) {
    return this;
};
function MapView(opts) {
    var _tmc = '_tmc',
        _posterity = 'posterity',
        _bMap = 'bMap';
    this._$container = $('#' + opts.containerId);
    this._$containerPosterity = $('[' + _tmc + '="' + _posterity + '"]', this._$container);
    this._$crossContainer = this._$containerPosterity.eq(0);
    this._$mapContainer = this._$containerPosterity.eq(1);
    this._bMapContainer =  $('[_tmc="'+ _bMap +'"]', this._$mapContainer).get(0);
    this._bZoom = opts.bZoom;
    this._bCenter = opts.bCenter;
    this.bMap = null;
    this._bMapTraffic =  new BMap.TrafficLayer();
    this._driver = null;
    this._lbArr = [];
    this._initBMap(opts);
    this._curLabelArr = [new BMap.Label()]
};
MapView.prototype.setDriver = function (driver) {
    this._driver = driver;
    this._createLabelA(driver);
};
MapView.prototype._createLabelA = function  (driver) {
    var len = driver.getPageSize();
    for (var i = 0; i < len; i++) {
        var t = new BMap.Label('<a id="mapLab' + i + '" class = "mapLab"></a>');
        t.hide();
        this.bMap.addOverlay(t);
        this._lbArr.push(t);
    }
    this.lbSetListenerEvent();
}
MapView.prototype.lbSetListenerEvent = function () {
    var numReg = /\d+/;
    $(".mapLab").hover(function () {
        var num = parseInt(this.id.match(numReg));
        $("#ptr" + num).addClass('hover');
        var firstTrTop = $("#TbBody").offset().top;
        var trTp = $("#ptr"+num).offset().top;
        var cT = trTp - firstTrTop;
        console.log(cT);
        $(".taP").animate({scrollTop: cT},"fast");
    }, function () {
        var num = parseInt(this.id.match(numReg));
        $("#ptr" + num).removeClass('hover');
    });
    $('.mapLab').click(function () {
        var num = parseInt(this.id.match(numReg));
        dDriver.selectData(num);
    });
}
MapView.prototype.setBtn = function (btn) {
};
MapView.prototype.setLabelPosition = function (rowIndex, point, state) {
    var lb = this._lbArr[rowIndex];
    var la = this._lbArr[rowIndex].getPosition();
    var clickLb = this._curLabelArr;
    lb.setStyle({
        background: 'black',
        fontSize: "0px",
        height: "1px",
        width: '1px',
        lineHeight: "0px",
        padding: "0px",
        border: "0px"
    });
    lb.setPosition(point);
    clickLb.push(lb);
    clickLb.shift().hide();
    lb.show();
}
MapView.prototype.setLabelStyle = function (rowIndex, state) {
    var lb = this._lbArr[rowIndex], color;
    if (state === 1) {
        color = 'blue';
    } else if (state === -1) {
        color = 'red';
    };
    lb.setStyle({
        background: color
    });
}
MapView.prototype.getLabel = function (rowIndex) {
    return this._lbArr[rowIndex];
}
MapView.prototype._initBMap = function (opts) {
    this.bMap = map;
    this._setMapSize(opts);
    var resizeTimer = null;
    var _this = this;
    this.bMap.addEventListener("rightclick", function (e) {
        if(_this._driver.index === null) {
            return;
        }
        $(".mapLab").unbind();
        var x = e.offsetX, y = e.offsetY;
        var point = this.pixelToPoint(new BMap.Pixel(x,y));
        _this.setLabelPosition(_this._driver.getRowIndex(),point);
        var zoom = _this._driver.getZoom();
        _this._driver.updateData(point, zoom);
        var rowIndex = _this._driver.getRowIndex(_this._driver.index);
        e.returnValue = false;
        return false;
    });
    $(window).bind("resize",function () {
        resizeTimer = resizeTimer ? null : setTimeout(_this._setMapSize(opts), 0);
    });
    this.bMap.addEventListener("resize", function () {
        if(_this._driver && _this._driver.index) {
            var boint = _this._driver.getPoint();
            this.bMap.setCenter(boint);
        }
    });
};
MapView.prototype._setMapSize = function (opts) {
    var bc = this._bMapContainer;
    bc.style.height = (window.innerHeight - opts.height)+"px";
    bc.style.width = (window.innerWidth - opts.width) + "px"
}
MapView.prototype.zoomOutView = function (zoom) {
    var container = this._$mapContainer;
    var _zoom = parseInt(container.css('-webkit-transform').match(/(?=\()?\d+(?=\,)/));
    _zoom--;
    if (typeof zoom == 'boolean' && zoom || _zoom < 1) {
        _zoom = 1;
        console.log();
    }
    container.css({
        "-webkit-transform": "scale(" + _zoom + ")"
    });
};
MapView.prototype.zoomInView = function () {
    var sc = parseInt(this._$mapContainer.css('-webkit-transform').match(/(?=\()?\d+(?=\,)/));
    sc++;
    this._$mapContainer.css({
        "-webkit-transform": "scale(" + sc + ")"
    });
};
MapView.prototype.panByView = function (x, y) {
    this.bMap.panBy(x, y, {noAnimation: true});
};
MapView.prototype.getBMapZoom = function () {
    return this.bMap.getZoom();
};
MapView.prototype.getBMapCenter = function () {
    return this.bMap.getCenter();
};
MapView.prototype.setBMapZoom = function (bZoom) {
    bZoom = bZoom ? bZoom :  this._driver.getData(0).pointImageInfo.grid.z;
    this.bMap.setZoom(bZoom);
};
MapView.prototype.setBMapCenter = function (bpoint) {
    this.bMap.setCenter(bpoint);
};
MapView.prototype.setCrossVisible = function (visible) {
    visible ? this._$crossContainer.show() : this._$crossContainer.hide();
};
MapView.prototype.setTrafficVisible = function (visible) {
    var map  = this.bMap;
};
MapView.prototype.setAllLabelVisible = function (visible) {
    var curNum = this._driver.getRowIndex();
    var arr = this._lbArr;
    var len = this._lbArr.length;
    arr.forEach(function (a,index){
        if(index !== curNum){
            if(visible){
                a.show();
            }else{
                a.hide();
            }
        }
    });
};
var T, baidu = T = baidu || {version: "1.5.2.1"};
baidu.guid = "$BAIDU$";
baidu.$$ = window[baidu.guid] = window[baidu.guid] || {global: {}};
baidu.lang = baidu.lang || {};
baidu.lang.isString = function (a) {
    return"[object String]" == Object.prototype.toString.call(a)
};
baidu.isString = baidu.lang.isString;
baidu.lang.inherits = function (i, f, d) {
    var c, g, a = i.prototype, b = new Function();
    b.prototype = f.prototype;
    g = i.prototype = new b();
    for (c in a) {
        g[c] = a[c]
    }
    i.prototype.constructor = i;
    i.superClass = f.prototype;
    typeof d == "string" && (g.__type = d);
    i.extend = function (k) {
        for (var j in k) {
            g[j] = k[j]
        }
        return i
    };
    return i
};
baidu.inherits = baidu.lang.inherits;
baidu.dom = baidu.dom || {};
baidu.dom.g = function (a) {
    if (!a) {
        return null
    }
    if ("string" == typeof a || a instanceof String) {
        return document.getElementById(a)
    } else {
        if (a.nodeName && (a.nodeType == 1 || a.nodeType == 9)) {
            return a
        }
    }
    return null
};
baidu.g = baidu.G = baidu.dom.g;
baidu.event = baidu.event || {};
baidu.event._listeners = baidu.event._listeners || [];
baidu.dom._g = function (a) {
    if (baidu.lang.isString(a)) {
        return document.getElementById(a)
    }
    return a
};
baidu._g = baidu.dom._g;
baidu.event.on = function (b, f, i) {
    f = f.replace(/^on/i, "");
    b = baidu.dom._g(b);
    var g = function (k) {
        i.call(b, k)
    }, a = baidu.event._listeners, d = baidu.event._eventFilter, j, c = f;
    f = f.toLowerCase();
    if (d && d[f]) {
        j = d[f](b, f, g);
        c = j.type;
        g = j.listener
    }
    if (b.addEventListener) {
        b.addEventListener(c, g, false)
    } else {
        if (b.attachEvent) {
            b.attachEvent("on" + c, g)
        }
    }
    a[a.length] = [b, f, i, g, c];
    return b
};
baidu.on = baidu.event.on;
baidu.event.un = function (c, g, b) {
    c = baidu.dom._g(c);
    g = g.replace(/^on/i, "").toLowerCase();
    var k = baidu.event._listeners, d = k.length, f = !b, j, i, a;
    while (d--) {
        j = k[d];
        if (j[1] === g && j[0] === c && (f || j[2] === b)) {
            i = j[4];
            a = j[3];
            if (c.removeEventListener) {
                c.removeEventListener(i, a, false)
            } else {
                if (c.detachEvent) {
                    c.detachEvent("on" + i, a)
                }
            }
            k.splice(d, 1)
        }
    }
    return c
};
baidu.un = baidu.event.un;
baidu.sio = baidu.sio || {};
baidu.sio._createScriptTag = function (b, a, c) {
    b.setAttribute("type", "text/javascript");
    c && b.setAttribute("charset", c);
    b.setAttribute("src", a);
    document.getElementsByTagName("head")[0].appendChild(b)
};
baidu.sio._removeScriptTag = function (b) {
    if (b.clearAttributes) {
        b.clearAttributes()
    } else {
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                delete b[a]
            }
        }
    }
    if (b && b.parentNode) {
        b.parentNode.removeChild(b)
    }
    b = null
};
baidu.sio.callByBrowser = function (a, i, k) {
    var d = document.createElement("SCRIPT"), f = 0, l = k || {}, c = l.charset, j = i || function () {
    }, g = l.timeOut || 0, b;
    d.onload = d.onreadystatechange = function () {
        if (f) {
            return
        }
        var m = d.readyState;
        if ("undefined" == typeof m || m == "loaded" || m == "complete") {
            f = 1;
            try {
                j();
                clearTimeout(b)
            } finally {
                d.onload = d.onreadystatechange = null;
                baidu.sio._removeScriptTag(d)
            }
        }
    };
    if (g) {
        b = setTimeout(function () {
            d.onload = d.onreadystatechange = null;
            baidu.sio._removeScriptTag(d);
            l.onfailure && l.onfailure()
        }, g)
    }
    baidu.sio._createScriptTag(d, a, c)
};
baidu.object = baidu.object || {};
baidu.extend = baidu.object.extend = function (c, a) {
    for (var b in a) {
        if (a.hasOwnProperty(b)) {
            c[b] = a[b]
        }
    }
    return c
};
baidu.browser = baidu.browser || {};
baidu.browser.ie = baidu.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp["\x241"]) : undefined;
baidu.array = baidu.array || {};
baidu.array.remove = function (c, b) {
    var a = c.length;
    while (a--) {
        if (a in c && c[a] === b) {
            c.splice(a, 1)
        }
    }
    return c
};
baidu.lang = baidu.lang || {};
baidu.lang.isArray = function (a) {
    return"[object Array]" == Object.prototype.toString.call(a)
};
baidu.lang.isFunction = function (a) {
    return"[object Function]" == Object.prototype.toString.call(a)
};
baidu.lang.toArray = function (b) {
    if (b === null || b === undefined) {
        return[]
    }
    if (baidu.lang.isArray(b)) {
        return b
    }
    if (typeof b.length !== "number" || typeof b === "string" || baidu.lang.isFunction(b)) {
        return[b]
    }
    if (b.item) {
        var a = b.length, c = new Array(a);
        while (a--) {
            c[a] = b[a]
        }
        return c
    }
    return[].slice.call(b)
};
var Fe = Fe || {version: "20080809", emptyFn: function () {
}};
Fe.Ajax = function (b) {
    this.url = "";
    this.data = "";
    this.async = true;
    this.duration = -1;
    this.overtime = false;
    this.username = "";
    this.password = "";
    this.method = "GET";
    if (typeof b == "object" && b) {
        for (var a in b) {
            this[a] = b[a]
        }
    }
};
(function () {
    Fe.Ajax.prototype.request = function (d, l) {
        var j = this, g = b(), m = g.xhr;
        g.active = true;
        j.url = d;
        if (typeof l == "string" && l) {
            j.data = l
        }
        if (typeof j.onexecute == "function") {
            j.onexecute(m)
        }
        try {
            if (!j.username) {
                m.open(j.method, j.url, j.async)
            } else {
                m.open(j.method, j.url, j.async, j.username, j.password)
            }
            if (j.async) {
                m.onreadystatechange = i
            }
            if (j.method.toUpperCase() == "POST") {
                m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            }
            j.beginTime = new Date().getTime();
            if (j.duration > 0) {
                k()
            }
            m.send(j.data)
        } catch (f) {
            if (typeof j.onerror == "function") {
                j.onerror(f)
            }
        }
        if (!j.async) {
            i()
        }
        function i() {
            if (m.readyState == 4) {
                try {
                    m.status
                } catch (n) {
                    if (typeof j.ondisconnect == "function") {
                        j.ondisconnect(m)
                    }
                    g.active = false;
                    return
                }
                j.duration = -1;
                if (!j.overtime) {
                    if (typeof j["on" + m.status] == "function") {
                        j["on" + m.status](m)
                    }
                    if (m.status == 200 && m.statusText.toLowerCase() == "ok") {
                        if (typeof j.onsuccess == "function") {
                            j.onsuccess(m)
                        }
                    } else {
                        if (typeof j.onfailure == "function") {
                            j.onfailure(m)
                        }
                    }
                }
                g.active = false;
                m.onreadystatechange = function () {
                }
            }
        }
        function k() {
            if (j.duration == -1) {
                return
            }
            if (new Date().getTime() - j.beginTime > j.duration) {
                j.duration = -1;
                try {
                    m.abort()
                } catch (n) {
                }
                j.overtime = true;
                g.active = false;
                if (typeof j.ontimeout == "function") {
                    j.ontimeout(m)
                }
            }
            setTimeout(function () {
                k()
            }, 10)
        }
    };
    var c = [];
    function b() {
        var g = c;
        for (var f = null, d = 0; d < g.length; d++) {
            f = g[d];
            if (!f.active) {
                break
            }
        }
        if (d >= g.length) {
            f = {active: false, xhr: a()};
            g[g.length] = f
        }
        return f
    }
    function a() {
        if (window.XMLHttpRequest) {
            var g = new XMLHttpRequest();
            Fe.on(window, "onunload", function () {
                g.abort()
            });
            return g
        } else {
            if (window.ActiveXObject) {
                var j = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "Msxml2.XMLHTTP", "MSXML.XMLHttp", "Microsoft.XMLHTTP"];
                for (var f = 0; j[f]; f++) {
                    try {
                        var g = new ActiveXObject(j[f]);
                        Fe.on(window, "onunload", function () {
                            g.abort()
                        });
                        return g
                    } catch (d) {
                    }
                }
                throw new Error("Your browser do not support XMLHttp")
            }
        }
    }
})();
Fe.Ajax.get = function (a, b) {
    return this.request(a, b)
};
Fe.Ajax.request = function (b, c, a) {
    if (typeof c == "object" && c) {
        a = c;
        c = null
    } else {
        if (typeof c == "function") {
            a = a || {};
            a.onsuccess = c;
            c = null
        }
    }
    var d = new Fe.Ajax(a);
    d.request(b, c);
    return d
};
(function () {
    Fe._log = [];
    var a = 0;
    var b = {};
    Fe.BaseClass = function (c) {
        b[(this.hashCode = (c || Fe.BaseClass.guid()))] = this
    };
    Fe.BaseClass.guid = function () {
        return"mz_" + (a++).toString(36)
    };
    Fe.BaseClass.create = function () {
        var d = new Fe.BaseClass();
        d.decontrol();
        return d
    };
    window.Instance = Fe.instance = Fe.I = function (c) {
        return b[c]
    };
    Fe.BaseClass.prototype.dispose = function () {
        if (this.hashCode) {
            delete b[this.hashCode]
        }
        for (var c in this) {
            if (typeof this[c] != "function") {
                delete this[c]
            }
        }
    };
    Fe.BaseClass.prototype.getHashCode = function () {
        if (!this.hashCode) {
            b[(this.hashCode = Fe.BaseClass.guid())] = this
        }
        return this.hashCode
    };
    Fe.BaseClass.prototype.decontrol = function () {
        delete b[this.hashCode]
    };
    Fe.BaseClass.prototype.toString = function () {
        return"[object " + (this._className || "Object") + "]"
    };
    Fe.BaseClass.prototype._wlog = function (d, f) {
        var c = Fe._log;
        if (c.length > 100) {
            c.reverse().length = 50;
            c.reverse()
        }
        c[c.length] = "[" + d + "][" + (this._className || "Object") + " " + this.hashCode + "] " + f
    }
})();
Function.prototype.inherits = function (c, b) {
    var a, d, g = this.prototype, f = function () {
    };
    f.prototype = c.prototype;
    d = this.prototype = new f();
    if (typeof(b) == "string") {
        d._className = b
    }
    for (a in g) {
        d[a] = g[a]
    }
    this.prototype.constructor = g.constructor;
    g = f = null;
    return d
};
Fe.Browser = (function () {
    var c = navigator.userAgent;
    var i = 0, a = 0, g = 0, f = 0;
    var d = 0, j = 0, b = 0;
    if (typeof(window.opera) == "object" && /Opera(\s|\/)(\d+(\.\d+)?)/.test(c)) {
        a = parseFloat(RegExp.$2)
    } else {
        if (/MSIE (\d+(\.\d+)?)/.test(c)) {
            i = parseFloat(RegExp.$1)
        } else {
            if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(c)) {
                f = parseFloat(RegExp.$2)
            } else {
                if (navigator.vendor == "Netscape" && /Netscape(\s|\/)(\d+(\.\d+)?)/.test(c)) {
                    b = parseFloat(RegExp.$2)
                } else {
                    if (c.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/.test(c)) {
                        g = parseFloat(RegExp.$1)
                    }
                }
            }
        }
    }
    if (c.indexOf("Gecko") > -1 && c.indexOf("KHTML") == -1 && /rv\:(\d+(\.\d+)?)/.test(c)) {
        j = parseFloat(RegExp.$1)
    }
    return{ie: i, firefox: f, gecko: j, netscape: b, opera: a, safari: g}
})();
window.FeBrowser = Fe.Browser;
Fe.copy = function (b) {
    var a = Fe.copy._node;
    if (!a) {
        a = Fe.copy._node = document.createElement("DIV");
        a.style.position = "absolute";
        a.style.top = "-1000px";
        a.style.left = "-1000px";
        document.body.appendChild(a)
    }
    a.innerHTML = ["<embed ", 'src="img/clipboard.swf" ', 'FlashVars="clipboard=', encodeURIComponent(String(b)), '" ', 'width="0" ', 'height="0" ', 'type="application/x-shockwave-flash"></embed>'].join("")
};
Fe.G = function () {
    for (var b = [], c = arguments.length - 1; c > -1; c--) {
        var d = arguments[c];
        b[c] = null;
        if (typeof d == "object" && d && d.dom) {
            b[c] = d.dom
        } else {
            if ((typeof d == "object" && d && d.tagName) || d == window || d == document) {
                b[c] = d
            } else {
                if (typeof d == "string" && (d = document.getElementById(d))) {
                    b[c] = d
                }
            }
        }
    }
    return b.length < 2 ? b[0] : b
};
try {
    if (typeof(HTMLElement) != "undefined" && !window.opera) {
        HTMLElement.prototype.__defineGetter__("children", function () {
            for (var c = [], d = 0, g, f = 0, b = this.childNodes.length; f < b; f++) {
                g = this.childNodes[f];
                if (g.nodeType == 1) {
                    c[d++] = g;
                    if (g.name) {
                        if (!c[g.name]) {
                            c[g.name] = []
                        }
                        c[g.name][c[g.name].length] = g
                    }
                    if (g.id) {
                        c[g.id] = g
                    }
                }
            }
            return c
        })
    }
} catch (e) {
}
Fe.ac = function (a, b) {
    if (!(a = this.G(a))) {
        return
    }
    b = this.trim(b);
    if (!new RegExp("(^| )" + b.replace(/(\W)/g, "\\$1") + "( |$)").test(a.className)) {
        a.className = a.className.split(/\s+/).concat(b).join(" ")
    }
};
Fe.addClassName = Fe.ac;
Fe.extend = function (g, d) {
    if (g && d && typeof(d) == "object") {
        for (var f in d) {
            g[f] = d[f]
        }
        var c = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        for (var a = 0, b; a < c.length; a++) {
            b = c[a];
            if (Object.prototype.hasOwnProperty.call(d, b)) {
                g[b] = d[b]
            }
        }
    }
    return g
};
Fe.on = function (c, b, a) {
    if (!(c = Fe.G(c))) {
        return c
    }
    b = b.replace(/^on/, "").toLowerCase();
    if (c.attachEvent) {
        c[b + a] = function () {
            a.call(c, window.event)
        };
        c.attachEvent("on" + b, c[b + a])
    } else {
        c.addEventListener(b, a, false)
    }
    return c
};
Fe.un = function (c, b, a) {
    if (!(c = Fe.G(c))) {
        return c
    }
    b = b.replace(/^on/, "").toLowerCase();
    if (c.attachEvent) {
        c.detachEvent("on" + b, c[b + a]);
        c[b + a] = null
    } else {
        c.removeEventListener(b, a, false)
    }
    return c
};
Fe.rc = function (a, b) {
    if (!(a = this.G(a))) {
        return
    }
    b = this.trim(b);
    var d = a.className.replace(new RegExp("(^| +)" + b.replace(/(\W)/g, "\\$1") + "( +|$)", "g"), "$2");
    if (a.className != d) {
        a.className = d
    }
};
Fe.removeClassName = Fe.rc;
Fe.trim = function (a) {
    return a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
};
Fe.copy = function (b) {
    var a = Fe.copy._node;
    if (!a) {
        a = Fe.copy._node = document.createElement("DIV");
        a.style.position = "absolute";
        a.style.top = "-1000px";
        a.style.left = "-1000px";
        document.body.appendChild(a)
    }
    a.innerHTML = ["<embed ", 'src="img/clipboard.swf" ', 'FlashVars="clipboard=', encodeURIComponent(String(b)), '" ', 'width="0" ', 'height="0" ', 'type="application/x-shockwave-flash"></embed>'].join("")
};
Fe.Array = {};
Fe.Array.indexOf = function (d, a, b) {
    var c = d.length, f = Number(b) || 0;
    f = (f < 0) ? Math.ceil(f) : Math.floor(f);
    if (f < 0) {
        f += c
    }
    for (; f < c; f++) {
        if (f in d && d[f] === a) {
            return f
        }
    }
    return -1
};
Fe.Array.contains = function (a, b) {
    return Fe.Array.indexOf(a, b) >= 0
};
Fe.Array.unique = function (b) {
    var c = [];
    for (var a = 0; a < b.length; a++) {
        if (!Fe.Array.contains(c, b[a])) {
            c.push(b[a])
        }
    }
    return c
};
Fe.Cookie = function (b) {
    var a = "";
    b = b || {};
    if (/https?:\/\/[^\/]+([^\?]+)/i.test(location.href)) {
        a = RegExp.$1
    }
    this.path = (b.path || a || "/").replace(/(\/)[^\/]*$/, "$1");
    this.expires = b.expires || "";
    this.domain = b.domain || document.domain || "";
    this.secure = b.secure || ""
};
Fe.Cookie.set = function (c, d, a) {
    if (/;=/g.test(c)) {
        throw new Error('Invalid cookie name "' + c + '"')
    }
    if (/;/g.test(d)) {
        throw new Error('Invalid cookie value "' + d + '"')
    }
    var b = new Fe.Cookie(a);
    b.set(c, d);
    return b
};
Fe.Cookie.prototype.set = function (b, c) {
    var a = new Date();
    if (typeof(this.expires) == "number") {
        a.setTime(a.getTime() + this.expires)
    }
    document.cookie = b + "=" + escape(c) + ";expires=" + a.toGMTString() + ";path=" + this.path + (this.domain == "" ? "" : ("; domain=" + this.domain)) + (this.secure ? "; secure" : "")
};
Fe.Cookie.add = function (a, b, c) {
    return Fe.Cookie.set(a, b, c)
};
Fe.Cookie.remove = function (a) {
    return Fe.Cookie.set(a, "", {expires: -1 * 57005 * 57005})
};
Fe.Cookie.get = function (b) {
    var c = new RegExp("(^| )" + b + "=([^;]*)(;|$)");
    var a = document.cookie.match(c);
    if (a) {
        return unescape(a[2])
    }
    return null
};
Fe.getByteLength = function (a) {
    return a.replace(/[^\x00-\xff]/g, "mm").length
};
Fe.subByte = function (m, c, j) {
    if (Fe.getByteLength(m) <= c) {
        return m
    }
    var o, n, k, d;
    for (var g = Math.floor(c / 2) - 1, f = m.length; g < f; g++) {
        o = m.substr(0, g);
        k = Fe.getByteLength(o);
        if (k == c) {
            if (j) {
                o += j
            }
            return o
        } else {
            n = m.substr(0, g + 1);
            d = Fe.getByteLength(n);
            if (k < c && d > c) {
                if (j) {
                    o += j
                }
                return o
            }
        }
    }
    return m
};
var POPUP_ANCHOR_MAP_CENTER = 1;
function Popup(a) {
    Fe.BaseClass.call(this);
    this.visible = false;
    this.config = a;
    if (!this.config) {
        return
    }
    this.config.addDom = this.config.addDom ? T.g(this.config.addDom) : document.body;
    if (a.clickClose != null && a.clickClose == false) {
        this.config.clickClose = false
    } else {
        this.config.clickClose = true
    }
    this.connectDom = new Array()
}
Fe.extend(Popup.prototype, {render: function () {
    var b = this.config;
    this.main = beforeEndHTML(b.addDom, '<div class="map_popup" style="width:390px;display:none"></div>');
    var a = this.popBox = beforeEndHTML(this.main, '<div class="popup_main"></div>');
    if (b.isTitle != false) {
        this.title = beforeEndHTML(a, '<div class="title">系统信息</div>')
    }
    this.content = beforeEndHTML(a, '<div class="content"></div>');
    if (!!this.config.closeButton) {
        this.button = beforeEndHTML(a, this.config.closeButton)
    } else {
        this.button = beforeEndHTML(a, '<button id="popup_close" title="关闭"></button>')
    }
    this.shadow = beforeEndHTML(this.main, '<div class="poput_shadow"></div>');
    this.addConnectDom(this.main);
    this.initialize()
}, initialize: function () {
    var b = this.config;
    this.setTitle(b.title);
    this.setContent(b.content);
    this.setWidth(b.width);
    this.setHeight(b.height);
    this.show();
    var c = this;
    var a = function (g) {
        var d = g.srcElement || g.target;
        while (d) {
            var j = c.connectDom;
            for (var f = 0; f < j.length; f++) {
                if (d == j[f]) {
                    return
                }
            }
            if (d == document.body) {
                c.close();
                return
            }
            d = d.parentNode
        }
    };
    if (this.config.clickClose) {
        T.on(document.body, "mousedown", a)
    }
    T.on(this.button, "click", function (d) {
        if (c.config.clickClose) {
            T.un(document.body, "mousedown", a)
        }
        if (c.config.closeEffect && typeof(c.config.closeEffect) == "function") {
            c.config.closeEffect()
        } else {
            c.main.parentNode.removeChild(c.main)
        }
        c.visible = false;
        if (c.config.close && typeof(c.config.close) == "function") {
            c.config.close()
        }
        if (this.resizeTimer) {
            window.clearInterval(this.resizeTimer);
            this.resizeTimer = null
        }
        if (T.g("imgLogo")) {
            T.g("imgLogo").style.display = "";
            T.g("imgLogo").style.display = "inline"
        }
    });
    if (b.open && typeof(b.open) == "function") {
        b.open()
    }
    this.setPosition()
}, setPosition: function () {
    switch (this.config.defaultAnchor) {
        case POPUP_ANCHOR_MAP_CENTER:
            this.updatePos();
            break
    }
}, setTitle: function (a) {
    if (a && this.title) {
        this.title.innerHTML = a;
        this.config.title = a
    }
}, setContent: function (a) {
    if (a) {
        if (typeof(a) == "string") {
            this.content.innerHTML = a
        } else {
            this.content.innerHTML = "";
            this.content.appendChild(a)
        }
        this.config.content = a
    }
}, setWidth: function (a) {
    if (a) {
        this.main.style.width = (a - 8) + "px";
        this.config.width = a
    }
}, setHeight: function (a) {
    if (this.resizeTimer) {
        window.clearInterval(this.resizeTimer);
        this.resizeTimer = null
    }
    if (a) {
        this.main.style.height = this.shadow.style.height = (a - 9) + "px";
        this.config.height = a;
        if (this.config.isTitle == false) {
            this.content.style.height = (a - 2) + "px"
        } else {
            this.content.style.height = (a - 24 - 9) + "px"
        }
        this.content.style.overflowY = "auto"
    } else {
        this.content.style.height = "auto";
        this.resize()
    }
}, hide: function () {
    this.main.style.display = "none";
    this.visible = false
}, show: function () {
    this.main.style.display = "block";
    this.popBox.scrollTop = 0;
    this.visible = true
}, getDom: function () {
    return this.main
}, resize: function () {
    var a = this;
    var b = function () {
        if (a.config.isAddBottomHeight == false) {
            var c = a.content.offsetHeight
        } else {
            var c = a.content.offsetHeight + 24
        }
        if (a.mainHeight) {
            if (a.mainHeight != c) {
                a.mainHeight = c
            }
        }
        a.popBox.style.height = a.shadow.style.height = a.main.style.height = c + "px";
        a.popBox.scrollTop = 0
    };
    if (this.resizeTimer) {
        window.clearInterval(this.resizeTimer);
        this.resizeTimer = null
    }
    this.resizeTimer = window.setInterval(b, 50)
}, updatePos: function () {
    var b = this.main, d = this.config, g = map.getSize(), i = d.offset || [], f = i[0] || 0, c = i[1] || 0, a = g.width <= d.width ? 0 : g.width / 2 - d.width / 2, j = g.height <= d.height ? 0 : g.height / 2 - d.height / 2;
    if (d && typeof d.right != "undefined") {
        b.style.right = d.right + f + "px"
    } else {
        if (d && typeof d.left != "undefined") {
            b.style.left = d.left + f + "px"
        } else {
            b.style.left = a + f + "px"
        }
    }
    if (d && typeof d.top != "undefined") {
        b.style.top = d.top + c + "px"
    } else {
        if (d && typeof d.bottom != "undefined") {
            b.style.top = d.bottom + c + "px"
        } else {
            b.style.top = j + c + "px"
        }
    }
}, close: function () {
    this.button.click()
}, addConnectDom: function (a) {
    this.connectDom.push(a)
}});
window.FeBrowser = Fe.Browser;
function scriptRequest(url, echo, id, charset) {
    var isIe = /msie/i.test(window.navigator.userAgent);
    if (isIe && Fe.G("_script_" + id)) {
        var script = Fe.G("_script_" + id)
    } else {
        if (Fe.G("_script_" + id)) {
            Fe.G("_script_" + id).parentNode.removeChild(Fe.G("_script_" + id))
        }
        var script = document.createElement("script");
        if (charset != null) {
            script.charset = charset
        }
        if (id != null && id != "") {
            script.setAttribute("id", "_script_" + id)
        }
        script.setAttribute("type", "text/javascript");
        document.body.appendChild(script)
    }
    var t = new Date();
    if (url.indexOf("?") > -1) {
        url += "&t=" + t.getTime()
    } else {
        url += "?t=" + t.getTime()
    }
    var _complete = function () {
        if (script.readyState == "loaded" || !script.readyState) {
            if (typeof(echo) == "function") {
                echo()
            } else {
                eval(echo)
            }
        }
    };
    if (isIe) {
        script.onreadystatechange = _complete
    } else {
        script.onload = _complete
    }
    script.setAttribute("src", url)
}
Component = function (a) {
    a = a || {};
    for (var b in a) {
        this[b] = a[b]
    }
    this.renderTo.innerHTML = this.render();
    this.initialize()
};
function beforeEndHTML(b, a) {
    b.insertAdjacentHTML("beforeEnd", a);
    return b.lastChild
}
function jsonToQuery(a, c) {
    var b = [];
    c = c || function (g) {
        return g
    };
    for (var f in a) {
        var d = a[f];
        if (d != "" && d != null && typeof(d) != "undefined") {
            b.push(f + "=" + c(d))
        }
    }
    return b.join("&")
}
function getClientSize() {
    var b = h = 0;
    if (window.innerHeight) {
        b = window.innerWidth;
        h = window.innerHeight
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            b = document.documentElement.clientWidth;
            h = document.documentElement.clientHeight
        } else {
            b = document.body.clientWidth;
            h = document.body.clientHeight
        }
    }
    return{width: b, height: h}
}
function getParam(a) {
    if (a.indexOf("?") > -1) {
        var d = a.slice(a.indexOf("?") + 1)
    } else {
        if (a.indexOf("#") > -1) {
            var d = a.slice(a.indexOf("#") + 1)
        } else {
            return
        }
    }
    if (d == "") {
        return
    }
    var g = {};
    var f = d.split("&");
    for (var b = 0; b < f.length; b++) {
        var c = f[b].split("=");
        g[c[0]] = c[1]
    }
    return g
}
(function () {
    var b = "/fwmap/zt/traffic/index.html?city=";
    var a = {beijing: {point: {x: 116.389645, y: 39.915986}, fullPt: {x: 116.39737, y: 39.946316}, level: 12, cityName: "beijing", titleName: "北京", shareUrl: b + "beijing", pre: 1}, shanghai: {point: {x: 121.487899, y: 31.249162}, fullPt: {x: 121.541018, y: 31.292355}, level: 12, cityName: "shanghai", titleName: "上海", shareUrl: b + "shanghai", pre: 1}, guangzhou: {point: {x: 113.30765, y: 23.120049}, fullPt: {x: 113.329497, y: 23.215408}, level: 12, cityName: "guangzhou", titleName: "广州", shareUrl: b + "guangzhou", pre: 1}, hangzhou: {point: {x: 120.162027, y: 30.279019}, level: 12, cityName: "hangzhou", titleName: "杭州", shareUrl: b + "hangzhou", pre: 1}, changchun: {point: {x: 125.331177, y: 43.892609}, level: 12, cityName: "changchun", titleName: "长春", shareUrl: b + "changchun", pre: 0}, shenyang: {point: {x: 123.43978, y: 41.808954}, level: 12, cityName: "shenyang", titleName: "沈阳", shareUrl: b + "shenyang", pre: 0}, dalian: {point: {x: 121.650404, y: 38.927423}, level: 12, cityName: "dalian", titleName: "大连", shareUrl: b + "dalian", pre: 1}, tianjin: {point: {x: 117.218395, y: 39.144154}, level: 12, cityName: "tianjin", titleName: "天津", shareUrl: b + "tianjin", pre: 1}, qingdao: {point: {x: 120.383458, y: 36.093433}, level: 12, cityName: "qingdao", titleName: "青岛", shareUrl: b + "qingdao", pre: 0}, wulumuqi: {point: {x: 87.614107, y: 43.809825}, level: 12, cityName: "wulumuqi", titleName: "乌鲁木齐", shareUrl: b + "wulumuqi", pre: 0}, chengdu: {point: {x: 104.072217, y: 30.663449}, level: 12, cityName: "chengdu", titleName: "成都", shareUrl: b + "chengdu", pre: 1}, chongqing: {point: {x: 106.554925, y: 29.55931}, level: 12, cityName: "chongqing", titleName: "重庆", shareUrl: b + "chongqing", pre: 1}, shijiazhuang: {point: {x: 114.520501, y: 38.048731}, level: 12, cityName: "shijiazhuang", titleName: "石家庄", shareUrl: b + "shijiazhuang", pre: 1}, nanjing: {point: {x: 118.790614, y: 32.04799}, level: 12, cityName: "nanjing", titleName: "南京", shareUrl: b + "nanjing", pre: 1}, nanchang: {point: {x: 115.915734, y: 28.681022}, level: 12, cityName: "nanchang", titleName: "南昌", shareUrl: b + "nanchang", pre: 1}, wenzhou: {point: {x: 120.669615, y: 28.025799}, level: 12, cityName: "wenzhou", titleName: "温州", shareUrl: b + "wenzhou", pre: 0}, wuxi: {point: {x: 120.311313, y: 31.587203}, level: 12, cityName: "wuxi", titleName: "无锡", shareUrl: b + "wuxi", pre: 0}, jinhua: {point: {x: 119.650276, y: 29.094693}, level: 12, cityName: "jinhua", titleName: "金华", shareUrl: b + "jinhua", pre: 0}, taizhou: {point: {x: 121.427183, y: 28.662337}, level: 12, cityName: "taizhou", titleName: "台州", shareUrl: b + "taizhou", pre: 0}, changzhou: {point: {x: 119.980999, y: 31.816083}, level: 12, cityName: "changzhou", titleName: "常州", shareUrl: b + "changzhou", pre: 1}, wuhan: {point: {x: 114.343796, y: 30.550983}, level: 12, cityName: "wuhan", titleName: "武汉", shareUrl: b + "wuhan", pre: 1}, changsha: {point: {x: 113.019956, y: 28.200681}, level: 12, cityName: "changsha", titleName: "长沙", shareUrl: b + "changsha", pre: 1}, ningbo: {point: {x: 121.56528, y: 29.878307}, level: 12, cityName: "ningbo", titleName: "宁波", shareUrl: b + "ningbo", pre: 1}, fuzhou: {point: {x: 119.303362, y: 26.080652}, level: 12, cityName: "fuzhou", titleName: "福州", shareUrl: b + "fuzhou", pre: 1}, xiamen: {point: {x: 118.140465, y: 24.508302}, level: 12, cityName: "xiamen", titleName: "厦门", shareUrl: b + "xiamen", pre: 0}, quanzhou: {point: {x: 118.61283, y: 24.908305}, level: 12, cityName: "quanzhou", titleName: "泉州", shareUrl: b + "quanzhou", pre: 0}, dongguan: {point: {x: 113.75826, y: 23.026728}, level: 12, cityName: "dongguan", titleName: "东莞", shareUrl: b + "dongguan", pre: 0}, foshan: {point: {x: 113.128448, y: 23.027703}, level: 12, cityName: "foshan", titleName: "佛山", shareUrl: b + "foshan", pre: 0}, zhuhai: {point: {x: 113.5558, y: 22.262334}, level: 12, cityName: "zhuhai", titleName: "珠海", shareUrl: b + "zhuhai", pre: 0}, zhongshan: {point: {x: 113.39892, y: 22.522612}, level: 12, cityName: "zhongshan", titleName: "中山", shareUrl: b + "zhongshan", pre: 0}, shenzhen: {point: {x: 114.065967, y: 22.574123}, fullPt: {x: 113.994354, y: 22.613329}, level: 12, cityName: "shenzhen", titleName: "深圳", shareUrl: b + "shenzhen", pre: 1}};
    window.trafficCfg = a
})();
function SelectCity(a) {
    Component.apply(this, arguments)
}
T.lang.inherits(SelectCity, Component, "SelectCity");
T.object.extend(SelectCity.prototype, {cityData: [
    {cname: "北京", name: "beijing"},
    {cname: "上海", name: "shanghai"},
    {cname: "广州", name: "guangzhou"},
    {cname: "杭州", name: "hangzhou"},
    {cname: "长春", name: "changchun"},
    {cname: "沈阳", name: "shenyang"},
    {cname: "大连", name: "dalian"},
    {cname: "天津", name: "tianjin"},
    {cname: "青岛", name: "qingdao"},
    {cname: "成都", name: "chengdu"},
    {cname: "重庆", name: "chongqing"},
    {cname: "南京", name: "nanjing"},
    {cname: "南昌", name: "nanchang"},
    {cname: "温州", name: "wenzhou"},
    {cname: "无锡", name: "wuxi"},
    {cname: "金华", name: "jinhua"},
    {cname: "台州", name: "taizhou"},
    {cname: "常州", name: "changzhou"},
    {cname: "武汉", name: "wuhan"},
    {cname: "长沙", name: "changsha"},
    {cname: "宁波", name: "ningbo"},
    {cname: "福州", name: "fuzhou"},
    {cname: "厦门", name: "xiamen"},
    {cname: "泉州", name: "quanzhou"},
    {cname: "东莞", name: "dongguan"},
    {cname: "佛山", name: "foshan"},
    {cname: "珠海", name: "zhuhai"},
    {cname: "中山", name: "zhongshan"},
    {cname: "深圳", name: "shenzhen"},
    {cname: "石家庄", name: "shijiazhuang"},
    {cname: "乌鲁木齐", name: "wulumuqi"}
], render: function (d, c) {
    var a = window.cityConfig.titleName || "北京";
    var b = '<div id="curCity">当前城市：' + a + "</div>";
    var f = this.getCityList();
    d = b + f + "</div>";
    return d
}, initialize: function () {
}, getCityList: function () {
    var b = ['<div class="city_cont">'], d = null, c = "";
    for (var a = 0, f = this.cityData.length; a < f; a++) {
        d = this.cityData[a];
        c = '<a href="javascript:void(0)" cname="' + d.cname + '" name="' + d.name + '" onclick="window.selectCity.selCity(\'' + d.name + "');return false;\">" + d.cname + "</a>";
        b.push(c)
    }
    b.push("</div>");
    return b.join("")
}, selCity: function (b) {
    var a = window.trafficCfg;
    if (!b || !a[b]) {
        return
    }
    cityConfig = a[b] || cityConfig;
    window.location.search = "?city=" + b;
    setPrecBtnStatus()
}, switchCity: function (b) {
    var d = {qt: "cur", wd: encodeURIComponent(b), cb: "getCurCityCallback", url: "http://map.baidu.com"};
    var c = "http://map.baidu.com/maps/services/get_proxy?";
    var a = c + jsonToQuery(d);
    T.sio.callByBrowser(a)
}});
function getCurCityCallback(a) {
}
var fullScrollMap = fullScrollMap || 0;
function setCfgInfoByUrl() {
    var a = getParam(location.href);
    if (a && a.city && window.trafficCfg) {
        cityConfig = window.trafficCfg[a.city] || cityConfig
    }
    document.title = "百度地图-" + cityConfig.titleName + "地区实时路况"
}
var cityConfig = {point: {x: 116.403856, y: 39.914882}, level: 12, cityName: "beijing", titleName: "北京", shareUrl: "/fwmap/zt/traffic/index.html?city=beijing", pre: 1};
var temp = {};
setCfgInfoByUrl();
function creatMap() {
    var b = new BMap.Map("mapContenter");
    var c = cityConfig.point;
    var a = new BMap.Point(c.x, c.y);
    b.setCenter(a);
    b.setDefaultCursor("crosshair");
    b.disableDoubleClickZoom();
    b.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
    window.map = b;
    if (fullScrollMap) {
        setMapContentStyle();
        setMapContentClient()
    }
    initControl();
    initEvent();
    if (!fullScrollMap) {
        getTrafficTime()
    }
    setPrecBtnStatus()
}
function setMapContentClient() {
    var d = T.g("mapContenter");
    var f = getClientSize().width;
    var g = getClientSize().height - 97;
    d.style.width = f + "px";
    d.style.height = g + "px"
}
function setMapContentStyle() {
    var b = T.g("mapContenter");
    b.style.marginTop = "0px";
    b.style.border = "0"
}
function initControl() {
    var c = new BMapLib.TrafficControl();
    temp.traffic = c;
    c.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);
    c.setOffset(new BMap.Size(-100, -100));
    map.addControl(c);
    c.show();
    temp.traffic.popDom = T.g("tcWrap");
    T.g("tcViewPrediction").onclick = function () {
        T.g("tcUpdate").style.display != "none" ? T.g("tcUpdate").style.display = "none" : null;
        setTimeout(function () {
            T.g("tcUpdate").style.display != "none" ? T.g("tcUpdate").style.display = "none" : null
        }, 1)
    };
    changeTrafficCtrl();
    if (!fullScrollMap) {
        hideTrafficCtrl()
    }
    if (!fullScrollMap) {
        var b = new fullScreenCtrl();
        map.addControl(b)
    }
    var a = BMAP_NAVIGATION_CONTROL_ZOOM;
    if (fullScrollMap) {
        a = BMAP_NAVIGATION_CONTROL_LARGE
    }
}
function initEvent() {
    if (!fullScrollMap) {
        map.addEventListener("load", hideTrafficCtrl);
        map.addEventListener("zoomstart", hideTrafficCtrl);
        map.addEventListener("zoomend", hideTrafficCtrl)
    } else {
        map.addEventListener("load", changeTrafficCtrl);
        map.addEventListener("zoomstart", changeTrafficCtrl);
        map.addEventListener("zoomend", changeTrafficCtrl);
        window.onresize = setMapContentClient
    }
}
function hideTrafficCtrl() {
    var b = null;
    var a = function () {
        temp.traffic.popDom.style.display = "none"
    };
    if (temp.traffic.popDom && T.g("tcClose")) {
        a()
    } else {
        b = setInterval(a, 1)
    }
}
function changeTrafficCtrl() {
    var b = null;
    var a = function () {
        if (b) {
            clearInterval(b)
        }
        temp.traffic.popDom.style.top = "10px";
        temp.traffic.popDom.style.right = "10px";
        T.g("tcUpdate").style.display = "none";
        T.g("tcClose").style.display = "none";
        T.g("tcTitle").style.backgroundPosition = "155px -85px"
    };
    if (temp.traffic.popDom && T.g("tcClose")) {
        a()
    } else {
        b = setInterval(a, 1)
    }
}
function fullScreenCtrl() {
    this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
    this.defaultOffset = new BMap.Size(10, 10)
}
fullScreenCtrl.prototype = new BMap.Control();
fullScreenCtrl.prototype.initialize = function () {
    var a = "http://" + window.location.host + cityConfig.shareUrl;
    var b = document.createElement("div");
    var c = '<div style="width:51px;height:20px;background:url(img/bgs.gif)"><a href="' + a + '" target="_blank" style="display:block;width:100%;height:20px;" onclick ="this.blur()"></a></div>';
    b.innerHTML = c;
    map.getContainer().appendChild(b);
    return b
};
function getTrafficTime() {
    scriptRequest("http://its.map.baidu.com:8002/traffic/GetCurrentTime?callback=setTrafficTime", null, "traffic", "utf-8");
    setTimeout(getTrafficTime, 3000 * 60)
}
function setTrafficTime(b) {
    var a = new Date(b) || new Date();
    var c = T.g("trafficTime");
    if (c) {
        c.innerHTML = (a.getHours() < 10 ? ("0" + a.getHours()) : a.getHours()) + ":" + (a.getMinutes() < 10 ? ("0" + a.getMinutes()) : a.getMinutes())
    }
}
function getCurrentCityName() {
    var a = map.getZoom();
    var c;
    var j = 10000;
    if (a <= 7) {
        c = a;
        setCurrentMapInfo("全国");
        return
    }
    var k = function () {
        var m = map.getBounds();
        var n = m.getSouthWest();
        var l = m.getNorthEast();
        var o = function (q) {
            return parseInt(q / 1000) * 1000
        };
        return o(n.lng) + "," + o(n.lat) + ";" + o(l.lng) + "," + o(l.lat)
    };
    var f = getCurrentCityName.eP || map.getCenter();
    var d = getCurrentCityName.eP = map.getCenter();
    var g = Math.sqrt((f.lng - d.lng) * (f.lng - d.lng) + (f.lat - d.lat) * (f.lat - d.lat));
    if (g > j || a != c) {
        c = a;
        var b = "http://map.baidu.com/?newmap=1&qt=cen&b=" + k() + "&l=" + a;
        scriptRequest(b, i, "_MAP_CENTER_", "gbk")
    }
    function i() {
        if (typeof _mapCenter == "undefined") {
            return
        }
        var l = _mapCenter;
        var m = l.content;
        if (!m) {
            return
        }
        console.log(m)
    }
}
function selectSubCity(f, d) {
    var b = {title: "城市列表", content: "", height: 195, width: 340, left: "50px", top: "95px", clickClose: true, close: function () {
        if (window.cityPop) {
            window.cityPop = null
        }
    }};
    var a = window.cityPop = new Popup(b);
    a.render();
    a.hide();
    var c = a.getDom();
    c.style.left = "50px";
    c.style.top = "95px";
    window.selectCity = new SelectCity({renderTo: a.content});
    a.show();
    setCurCityName()
}
function setCurCityName() {
    var b = window.cityConfig.titleName, a = T.g("toolCurCity"), c = T.g("curCity");
    if (c) {
        c.innerHTML = "当前城市：" + b
    }
    if (a) {
        a.innerHTML = b + "市"
    }
}
function setPrecBtnStatus() {
    var b = window.cityConfig.pre || 0, a = T.g("tcViewPrediction");
    if (a) {
        a.style.display = (b == 1 ? "block" : "none")
    }
};
function TableView (containerId) {
    this._$container = $('#' + containerId);
    this._container = this._$container.get(0);
     this._$containerTitle = this._$container.children().eq(0);
    this._$containerTBContent = this._$container.children().eq(1);
    this._$containerBody = this._$containerTBContent.children();
     this._rowIndex = 0;
    this._driver = null;
    this._lastNumArr = [0];
    this._lastRowIndex = null;
    this._height = 0;
    this._trHeight = 0;
    this.trShowArr = [];
    this._tbBody = $("#TbBody");
    this._setSize();
};
TableView.prototype.setTableHeight = function (){
    var tHeight = window.innerHeight - 250;
    var _height = this._$containerBody.height()
    this._$containerTBContent.height(tHeight + "px");
    this._height = this._$containerTBContent.height();
    this._realheight =  _height;
    this._trHeight = this._$containerTBContent.find('tr').height();
}
TableView.prototype._setSize = function () {
    var _this = this;
    $(window).bind("resize",function () {
        _this.setTableHeight();
    });
}
TableView.prototype.filterRightPoint = function  (boo) {
    if(boo) {
        this._$containerBody.find(".right").hide();
    } else {
        this._$containerBody.find(".right").show();
    }
}
TableView.prototype._setListenerEvent = function () {
    var numReg = /\d+/,_this = this;
    this._$containerBody.find("tr").bind("click",function (){
       var num = parseInt(this.id.match(numReg));
           _this.selectRow(num);
   });
    var usedNum = 0;
    var noUsedNum = 0;
   this._$containerBody.find("tr input").bind("click",function (e){
        var num = parseInt($(this).parent().parent().attr("id").match(numReg));
        var tf;
       if (this.checked) {
           usedNum++;
           noUsedNum--;
           tf = 1;
       } else {
           tf = 0;
           usedNum--;
           noUsedNum++;
       }
       _this._driver.updateUsed(num,tf,usedNum);
        e.stopPropagation();
   });
};
TableView.prototype._showTitle = function (){
    this._$containerTitle.show();
}
TableView.prototype.setDriver = function (driver) {
    this._driver = driver;
    this._$driver = $(driver);
    return this;
};
TableView.prototype.fillTable = function (sIndex, eIndex) {
    var data = null;
    var dom = '';
    this._showTitle();
    var i,j;
    for (i = sIndex,j = 0; i < eIndex; i++,j++) {
        data = this._driver.getTableData(i);
        var st = data.checkStatus;
        var cls;
        if (st ===1) {
            cls = 'right';
        } else if (st === -1){
            cls = 'error'
        } else if (!st){
            cls = 'loading'
        }
        var ckStatus = data.isUsed === 0? '':'checked="checked"';
        var trId = "ptr";
        dom +='<tr id="'+ trId + j +'" class="'+ cls +'"><td class="tbId">'
            + data.id + '<a  class="tbUrl" target="_blank" href="'+ data.url +'">&nbsp;</a></td><td class="tbDirection">'
            + data.direction + '</td><td class="tbLeft" >'
            + data.left + '</td><td class="tbTop">'
            + data.top + '</span></td><td class="ckInput"><input id="ckInput"'+ ckStatus +' type="checkbox"></td></tr>';
    }
    this._$containerBody.empty().append(dom);
    var _this = this;
    setTimeout(function (){
        _this.setTableHeight();
    },0)
    this._setListenerEvent();
    return this;
};
TableView.prototype.selectRow = function (rowIndex) {
    this._driver.selectData(rowIndex);
    var data = this._driver.getDataByRowIndex(rowIndex);
    var grid = data.pointImageInfo.grid;
    var offset = data.pointImageInfo.offset;
    var _this = this;
    return this;
};
TableView.prototype.updateRow = function (rowIndex,left,top,url){
    this._removeRowClass(rowIndex,'right');
    this._removeRowClass(rowIndex,'error');
    this._addRowClass(rowIndex,'loading');
    this._addRowClass(rowIndex,'afterChanges');
    this._$containerBody.find("#ptr"+rowIndex).find(".tbLeft").html(left);
    this._$containerBody.find("#ptr"+rowIndex).find(".tbTop").html(top);
    this._$containerBody.find("#ptr"+rowIndex).find(".tbUrl").attr("href",url);
};
TableView.prototype.updateSelectRow = function (rowIndex){
    this._addRowClass(rowIndex,'on');
    var lastArr = this._lastNumArr;
    lastArr.push(rowIndex);
    this._lastRowIndex = lastArr.shift();
    if(this._lastRowIndex!== rowIndex){
        this._removeRowClass(this._lastRowIndex,'on');
    }
    this._rowIndex = rowIndex;
}
TableView.prototype.updateState = function (data){
    var checkStatus = data.checkStatus;
    var rowIndex = data.rowIndex;
    this._removeRowClass(rowIndex,"loading");
    this._removeRowClass(rowIndex,"right");
    this._removeRowClass(rowIndex,"error");
    if(checkStatus === -1){
        this._addRowClass(rowIndex,"error");
    }else if(checkStatus === 1) {
        this._addRowClass(rowIndex,"right");
    }
}
TableView.prototype.updateOneState = function (data){
    var checkStatus = data.checkStatus;
    var rowIndex = data.rowIndex;
    this._removeRowClass(rowIndex,"loading");
    this._removeRowClass(rowIndex,"right");
    this._removeRowClass(rowIndex,"error");
    if(checkStatus === -1){
        this._addRowClass(rowIndex,"error");
    }else if(checkStatus === 1) {
        this._addRowClass(rowIndex,"right");
    }
}
TableView.prototype._showClass = function (rowIndex) {
    this._$containerBody.find("tr").eq(rowIndex).show();
    return this;
};
TableView.prototype._hideClass = function (rowIndex) {
    this._$containerBody.find("tr").eq(rowIndex).hide();
    return this;
};
TableView.prototype._addRowClass = function (rowIndex, cls) {
    this._$containerBody.find("tr").eq(rowIndex).addClass(cls);
    return this;
};
TableView.prototype._removeRowClass = function (rowIndex, cls) {
    this._$containerBody.find("tr").eq(rowIndex).removeClass(cls);
    return this;
};
TableView.prototype.setScroll = function () {
    var bodyTop = this._$containerTBContent.offset().top;
    var trIdNum = this._rowIndex;
    var trHeight = this._trHeight;
    var _height = this._height;
    var  scrollContainer = this._$containerTBContent.get(0);
    var sTop = scrollContainer.scrollTop;
    var firstTrTop = this._tbBody.offset().top;
    var trTp = $("#ptr"+trIdNum).offset().top;
    if(trTp + trHeight > _height + bodyTop) {
        var s = trTp - firstTrTop  - _height  - sTop + trHeight;
        scrollContainer.scrollTop += s;
    }
    if(trTp < bodyTop) {
        var s = bodyTop - trTp;
        scrollContainer.scrollTop -= s;
    }
};
TableView.prototype.empty = function () {
    return this;
};
function KeyBoardLisenters (opts) {
    $(document).bind('keydown', function (evt) {
        var factor = evt.shiftKey ? 10 : 1;
        if (evt.keyCode === 187) {
            opts.mapView.zoomInView();
            return false;
        } else if (evt.keyCode === 189) {
            opts.mapView.zoomOutView();
            return false;
        } else if (evt.keyCode === 48) {
            opts.mapView.zoomOutView(true);
            return false;
        } else if (evt.keyCode === 38) {
            opts.mapView.panByView(0,1*factor);
            return false;
            return false;
        } else if (evt.keyCode === 40) {
            opts.mapView.panByView(0, -1 * factor);
            return false;
        } else if (evt.keyCode === 37) {
            opts.mapView.panByView(1 * factor, 0);
            return false;
        } else if (evt.keyCode === 39) {
            opts.mapView.panByView(-1 * factor, 0);
            return false;
        } else if (evt.ctrlKey === true && evt.keyCode === 13) {
            var step = initConstant.step;
            if (step === 1) {
                Kbfunction.analyze();
             } else if (step === 2) {
                Kbfunction.outPutData();
             }
             return false;
        } else if (evt.keyCode === 13) {
            if(initConstant.step === 2) {
                Kbfunction.hitPoint(opts.mapView.getBMapCenter());
            }
        } else if (evt.ctrlKey === true && evt.keyCode === 65) {
            evt.keyCode === 404;
        }
        else if (evt.keyCode === 65) {
            buttomView.switchLable();
        } else if (evt.shiftKey === true && evt.keyCode === 9) {
            dDriver.preData();
            tableView.setScroll();
            return false;
        } else if (evt.keyCode === 9) {
            dDriver.nextData();
            tableView.setScroll();
            return false;
        } else if (evt.keyCode === 34) {
             numberView.next();
        } else if (evt.keyCode === 33) {
            numberView.pre();
        } else if (evt.keyCode === 36) {
            numberView.first();
        } else if (evt.keyCode === 35) {
            numberView.last();
        } else if (evt.keyCode === 88) {
            buttomView.switchCross();
        } else if (evt.keyCode === 90) {
            buttomView.switchTraffic();
        } else if(evt.keyCode === 70) {
            buttomView.switchFilter()
        }
    });
};
var Dom = {};
var myCanvas, myImageData;
var dDriver = new DataDriver(500);
var $dDriver = $(dDriver);
var mMap, tableView, numberView, $numberView, countView, buttomView;
var Kbfunction = {
    analyze: function () {
        var domData = Dom.mbData.get(0);
        var data;
        if (initConstant.dataMode) {
            data = dataTool.getDataFromReverse(domData);
        } else {
            var zoom = parseInt(Dom.changLevel.val());
            data = dataTool.getDataFromContainer(domData, zoom);
        }
        if (data && data.length !== 0) {
            dataTool.clear(function () {
                dataTool.add('all', data);
                getDate(data);
            });
        } else {
            alert('数据不能为空！');
        }
    },
    outPutData: function () {
        loadingPlugis.start();
        setTimeout(function () {
            showStep(3);
            var SourceArr = [], str = "", exDataNum = 0, len = dDriver.getCount();
            for (var i = 0; i < len; i++) {
                var _fd = dDriver.getData(i);
                if (_fd.isUsed) {
                    exDataNum++;
                    var top = _fd.pointImageInfo.offset.top;
                    var left = _fd.pointImageInfo.offset.left;
                    var tbId = _fd.id;
                    var url = _fd.pointImageInfo.trafficImg;
                    var toUrl = url.match(/(\S+)?(time=\d+)(\S+)/);
                    var newUrl = (toUrl[1] + toUrl[3] + '&time=$time$').replace(/&label=web2D&v=\d+&/, '');
                    var direction = _fd.direction;
                    var ieu = {};
                    ieu.url = newUrl;
                    ieu.str = tbId + ',' + direction + ',' + left + ',' + top + ',\n';
                    SourceArr.push(ieu);
                    str += _fd.id + '\t' + _fd.direction + '\t' + _fd.point.lng + '\t' + _fd.point.lat + '\n';
                }
            }
            SourceArr = Tools.arrCombine(SourceArr);
            var s = '';
            for (var i = 0; i < SourceArr.length; i++) {
                var o = SourceArr[i];
                s += o.url + '\n' + o.str;
            }
            Dom.feedBackToCopy.html(str);
            Dom.resultToCopy.html(s);
            var Rlenght = Dom.resultToCopy.html().replace(/(http)(\S+)(\$\n)/g, '').replace(/\n$/, '').split(/\n/).length;
            if (Rlenght === exDataNum) {
                Dom.fRe.html('<span style="color:blue;">\u6570\u636e\u65e0\u7f3a\u5931\uff0c\u7ed3\u679c\u6570\u636e\u6570\u91cf\u4e3a\uff1a' + Rlenght + '</span>');
            } else {
                Dom.fRe.html('<span style="color:red;">\u9519\u8bef\uff01\u8f93\u51fa\u6570\u636e\u6709\u4e22\u5931\uff01\u4e22\u5931\u7684\u6570\u91cf\uff1a' + (exDataNum - Rlenght) + '</span>');
            }
            loadingPlugis.end();
        }, 100)
    },
    hitPoint: function (point) {
        mMap.setLabelPosition(dDriver.getRowIndex(), point);
        dDriver.updateData(point, dDriver.getZoom());
    }
};
function inits() {
    mMap = new MapView({
        bZoom: 1,
        bCenter: new BMap.Point(116.404, 39.915),
        containerId: 'container',
        height: 0,
        width: 320
    });
    tableView = new TableView("processTb");
    numberView = new NumberView("pager", {showCount: 6});
    countView = new CountView("psIt");
    buttomView = new ButtonView("topOption");
    buttomView.setDriver(dDriver);
    buttomView.setMap(mMap);
    buttomView.setTableView(tableView);
    buttomView.setTrafficVisible();
    buttomView.setCrossVisible();
    buttomView.setAllLabelVisible();
    buttomView.setRightTrHide();
    $dDriver = $(dDriver);
    $numberView = $(numberView);
}
function showStep(st) {
    initConstant.step = st;
    var index = st - 1;
    var letd = Dom.letd;
    toggle(Dom.dataTopLi, st, 'ov');
    letd.eq(index).show();
    letd.not(letd.eq(index)).hide();
}
function toggle(dom, num, cla) {
    dom.eq(num - 1).addClass(cla);
    dom.not(dom.eq(num - 1)).removeClass(cla);
}
function bindDomEvent() {
    Dom.dataTopLi.bind("click", function () {
        showStep($(this).index() + 1);
    });
    Dom.chooseFormat.bind("click", function () {
        $('div', Dom.dataLi).each(function (i) {
            var _this = $(this);
            if (_this.is(":visible")) {
                _this.hide();
            } else {
                _this.show();
                initConstant.dataMode = i;
                if (i === 0) {
                    Dom.paramT.show();
                } else {
                    Dom.paramT.hide();
                }
            }
        });
    });
    Dom.attachToMap.bind("click", function () {
        dDriver.isStrict = document.getElementById("strict").checked;
        loadingPlugis.start();
        setTimeout(function () {
            Kbfunction.analyze();
        }, 0);
    });
    Dom.BtnExport.bind("click", function () {
        Kbfunction.outPutData();
    })
    Dom.delTable.bind("click", function () {
        dataTool.clear(function () {
            window.location.reload();
        });
    });
}
var Tools = {
    arrCombine: function (arr) {
        var equalsByURL = function (sobj, tobj) {
            var flag = 'url' in sobj ? sobj['url'] === tobj['url'] : false;
            return flag;
        };
        var _targetArr = [];
        var tarObj = null;
        var curObj = null;
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            curObj = arr[i];
            if (!curObj) continue;
            for (var j = i + 1; j < length; j++) {
                tarObj = arr[j];
                if (!tarObj) continue;
                var flag = equalsByURL(curObj, tarObj);
                if (flag) {
                    if (curObj.str)
                        curObj.str += tarObj.str;
                    var s = curObj.str.split('\n');
                    s.pop();
                    s.sort(function (x, y) {
                        x = parseInt(x);
                        y = parseInt(y)
                        return x - y;
                    });
                    curObj.str = s.join('\n') + '\n';
                    arr[j] = undefined;
                }
            }
            _targetArr.push(curObj);
            arr[i] = undefined;
        }
        return _targetArr;
    }
}
function getDate(dataArr) {
    if (dataArr && dataArr.length !== 0) {
        dDriver.setDataArr(dataArr);
        tableView.setDriver(dDriver);
        mMap.setDriver(dDriver);
        mMap.setBMapZoom();
        countView.setMapZoom(mMap.getBMapZoom());
        numberView.selectPage(1, dDriver.getPageCount());
        showStep(2);
        loadingPlugis.end();
    }
}
$(function () {
    creatMap();
    initDom();
    bindDomEvent();
    inits();
    events();
    myCanvas = document.getElementById("myCanvas");
    dataTool.ready(function () {
        KeyBoardLisenters({mapView: mMap});
        dataTool.getAll(function (e) {
            var result = e.result;
            if (result.length === 0) {
                return;
            }
            var all = result.pop().value;
            var data = [];
            if (all instanceof  Array) {
                all.forEach(function (v, i) {
                    function objToMbpoint(objPoint) {
                        return new BMap.Point(objPoint.lng, objPoint.lat);
                    }
                    var checkDate = result[i] ? result[i].value : null;
                    var allDate = all[i];
                    data[i] = checkDate ? checkDate : allDate;
                    data[i].bdpoint = objToMbpoint(data[i].bdpoint);
                });
                getDate(data);
            }
        });
    });
});
var loadingPlugis = new (function () {
    var dom;
    var tp;
    this.setDom = function (dom) {
        dom = document.querySelector(dom);
    };
    this.setType = function (type) {
        tp = type;
    }
    this.start = function (){
        var div = document.createElement("div");
        var spinner = document.createElement("div");
        div.id = "loadingPlugin_mask";
        if(tp === 2) {
            div.innerHTML = "<div id='loading-spinner'></div>";
        } else if(!tp){
            div.innerHTML='<div class="spinner">' +
                '<div class="bar1"></div>' +
                '<div class="bar2"></div>' +
                '<div class="bar3"></div>' +
                '<div class="bar4"> </div>' +
                '<div class="bar5"></div>' +
                '<div class="bar6"></div>' +
                '<div class="bar7"></div>' +
                '<div class="bar8"></div>' +
                '<div class="bar9"></div>' +
                '<div class="bar10"></div>' +
                '<div class="bar11"></div>' +
                '<div class="bar12"></div></div>';
        }
        dom = dom ? dom : document.body;
        dom.appendChild(div);
    }
    this.end = function () {
        var my1 = document.getElementById("loadingPlugin_mask");
        if (my1 != null)
            my1.parentNode.removeChild(my1);
    }
})();
var gui = require('nw.gui');
var proWin = gui.Window.get();
$(function () {
    proWin.show();
    proWin.maximize();
    document.addEventListener("keydown",function(evt) {
        var kc = evt.keyCode;
        if(kc === 123) {
            proWin.showDevTools();
        } else if(kc === 116) {
            proWin.reloadIgnoringCache();
        }
    });
});
