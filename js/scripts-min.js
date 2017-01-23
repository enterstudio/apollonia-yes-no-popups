!function(t){if("function"==typeof define&&define.amd&&define("uikit",function(){var n=window.UIkit||t(window,window.jQuery,window.document);return n.load=function(t,e,i,o){var r=t.split(","),s=[],a,u=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!u)throw new Error("Please define base path to UIkit in the requirejs config.");for(a=0;a<r.length;a+=1){var l=r[a].replace(/\./g,"/");s.push(u+"/components/"+l)}e(s,function(){i(n)})},n}),!window.jQuery)throw new Error("UIkit requires jQuery");window&&window.jQuery&&t(window,window.jQuery,window.document)}(function(t,$,n){"use strict";var e={},i=t.UIkit?Object.create(t.UIkit):void 0;if(e.version="2.27.1",e.noConflict=function(){return i&&(t.UIkit=i,$.UIkit=i,$.fn.uk=i.fn),e},e.prefix=function(t){return t},e.$=$,e.$doc=e.$(document),e.$win=e.$(window),e.$html=e.$("html"),e.support={},e.support.transition=function(){var t=function(){var t=n.body||n.documentElement,e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i;for(i in e)if(void 0!==t.style[i])return e[i]}();return t&&{end:t}}(),e.support.animation=function(){var t=function(){var t=n.body||n.documentElement,e={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"},i;for(i in e)if(void 0!==t.style[i])return e[i]}();return t&&{end:t}}(),function(){Date.now=Date.now||function(){return(new Date).getTime()};for(var t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n){var e=t[n];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var n=Date.now(),e=Math.max(i+16,n);return setTimeout(function(){t(i=e)},e-n)},window.cancelAnimationFrame=clearTimeout}}(),e.support.touch="ontouchstart"in document||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,e.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||null,e.Utils={},e.Utils.isFullscreen=function(){return document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement||!1},e.Utils.str2json=function(t,n){try{return n?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,n){return'"'+n+'":'}).replace(/'([^']+)'/g,function(t,n){return'"'+n+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(t){return!1}},e.Utils.debounce=function(t,n,e){var i;return function(){var o=this,r=arguments,s=function(){i=null,e||t.apply(o,r)},a=e&&!i;clearTimeout(i),i=setTimeout(s,n),a&&t.apply(o,r)}},e.Utils.throttle=function(t,n){var e=!1;return function(){e||(t.call(),e=!0,setTimeout(function(){e=!1},n))}},e.Utils.removeCssRules=function(t){var n,e,i,o,r,s,a,u,l,d;t&&setTimeout(function(){try{for(d=document.styleSheets,o=0,a=d.length;o<a;o++){for(i=d[o],e=[],i.cssRules=i.cssRules,n=r=0,u=i.cssRules.length;r<u;n=++r)i.cssRules[n].type===CSSRule.STYLE_RULE&&t.test(i.cssRules[n].selectorText)&&e.unshift(n);for(s=0,l=e.length;s<l;s++)i.deleteRule(e[s])}}catch(t){}},0)},e.Utils.isInView=function(t,n){var i=$(t);if(!i.is(":visible"))return!1;var o=e.$win.scrollLeft(),r=e.$win.scrollTop(),s=i.offset(),a=s.left,u=s.top;return n=$.extend({topoffset:0,leftoffset:0},n),u+i.height()>=r&&u-n.topoffset<=r+e.$win.height()&&a+i.width()>=o&&a-n.leftoffset<=o+e.$win.width()},e.Utils.checkDisplay=function(t,n){var i=e.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",t||document),o;return t&&!i.length&&(i=$(t)),i.trigger("display.uk.check"),n&&("string"!=typeof n&&(n='[class*="uk-animation-"]'),i.find(n).each(function(){var t=e.$(this),n=t.attr("class"),i=n.match(/uk-animation-(.+)/);t.removeClass(i[0]).width(),t.addClass(i[0])})),i},e.Utils.options=function(t){if("string"!=$.type(t))return t;t.indexOf(":")!=-1&&"}"!=t.trim().substr(-1)&&(t="{"+t+"}");var n=t?t.indexOf("{"):-1,i={};if(n!=-1)try{i=e.Utils.str2json(t.substr(n))}catch(t){}return i},e.Utils.animate=function(t,n){var i=$.Deferred();return t=e.$(t),t.css("display","none").addClass(n).one(e.support.animation.end,function(){t.removeClass(n),i.resolve()}),t.css("display",""),i.promise()},e.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},e.Utils.template=function(t,n){for(var e=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),i=0,o,r,s,a,u,l=[],d=0;i<e.length;){if(o=e[i],o.match(/\{\{\s*(.+?)\s*\}\}/))switch(i+=1,o=e[i],r=o[0],s=o.substring(o.match(/^(\^|\#|\!|\~|\:)/)?1:0),r){case"~":l.push("for(var $i=0;$i<"+s+".length;$i++) { var $item = "+s+"[$i];"),d++;break;case":":l.push("for(var $key in "+s+") { var $val = "+s+"[$key];"),d++;break;case"#":l.push("if("+s+") {"),d++;break;case"^":l.push("if(!"+s+") {"),d++;break;case"/":l.push("}"),d--;break;case"!":l.push("__ret.push("+s+");");break;default:l.push("__ret.push(escape("+s+"));")}else l.push("__ret.push('"+o.replace(/\'/g,"\\'")+"');");i+=1}return u=new Function("$data",["var __ret = [];","try {","with($data){",d?'__ret = ["Not all blocks are closed correctly."]':l.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),n?u(n):u},e.Utils.focus=function(t,n){t=$(t);var e=t.find("[autofocus]:first"),i;return e.length?e.focus():(e=t.find(":input"+(n&&","+n||"")).first(),e.length?e.focus():(t.attr("tabindex")||(i=1e3,t.attr("tabindex",i)),t[0].focus(),i&&t.attr("tabindex",""),t))},e.Utils.events={},e.Utils.events.click=e.support.touch?"tap":"click",t.UIkit=e,e.fn=function(t,n){var i=arguments,o=t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),r=o[1],s=o[2];return e[r]?this.each(function(){var t=$(this),o=t.data(r);o||t.data(r,o=e[r](this,s?void 0:n)),s&&o[s].apply(o,Array.prototype.slice.call(i,1))}):($.error("UIkit component ["+r+"] does not exist."),this)},$.UIkit=e,$.fn.uk=e.fn,e.langdirection="rtl"==e.$html.attr("dir")?"right":"left",e.components={},e.component=function(t,n){var i=function(n,o){var r=this;return this.UIkit=e,this.element=n?e.$(n):null,this.options=$.extend(!0,{},this.defaults,o),this.plugins={},this.element&&this.element.data(t,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(i.plugins)).forEach(function(t){i.plugins[t].init&&(i.plugins[t].init(r),r.plugins[t]=!0)}),this.trigger("init.uk.component",[t,this]),this};return i.plugins={},$.extend(!0,i.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,n,i){return e.$(this.element||this).on(t,n,i)},one:function(t,n,i){return e.$(this.element||this).one(t,n,i)},off:function(t){return e.$(this.element||this).off(t)},trigger:function(t,n){return e.$(this.element||this).trigger(t,n)},find:function(t){return e.$(this.element?this.element:[]).find(t)},proxy:function(t,n){var e=this;n.split(" ").forEach(function(n){e[n]||(e[n]=function(){return t[n].apply(t,arguments)})})},mixin:function(t,n){var e=this;n.split(" ").forEach(function(n){e[n]||(e[n]=t[n].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:void(2==arguments.length&&(this.options[arguments[0]]=arguments[1]))}},n),this.components[t]=i,this[t]=function(){var n,i;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?n=$(arguments[0]):i=arguments[0];break;case 2:n=$(arguments[0]),i=arguments[1]}return n&&n.data(t)?n.data(t):new e.components[t](n,i)},e.domready&&e.component.boot(t),i},e.plugin=function(t,n,e){this.components[t].plugins[n]=e},e.component.boot=function(t){e.components[t].prototype&&e.components[t].prototype.boot&&!e.components[t].booted&&(e.components[t].prototype.boot.apply(e,[]),e.components[t].booted=!0)},e.component.bootComponents=function(){for(var t in e.components)e.component.boot(t)},e.domObservers=[],e.domready=!1,e.ready=function(t){e.domObservers.push(t),e.domready&&t(document)},e.on=function(t,n,i){return t&&t.indexOf("ready.uk.dom")>-1&&e.domready&&n.apply(e.$doc),e.$doc.on(t,n,i)},e.one=function(t,n,i){return t&&t.indexOf("ready.uk.dom")>-1&&e.domready?(n.apply(e.$doc),e.$doc):e.$doc.one(t,n,i)},e.trigger=function(t,n){return e.$doc.trigger(t,n)},e.domObserve=function(t,n){e.support.mutationobserver&&(n=n||function(){},e.$(t).each(function(){var t=this,i=e.$(t);if(!i.data("observer"))try{var o=new e.support.mutationobserver(e.Utils.debounce(function(e){n.apply(t,[i]),i.trigger("changed.uk.dom")},50),{childList:!0,subtree:!0});o.observe(t,{childList:!0,subtree:!0}),i.data("observer",o)}catch(t){}}))},e.init=function(t){t=t||document,e.domObservers.forEach(function(n){n(t)})},e.on("domready.uk.dom",function(){e.init(),e.domready&&e.Utils.checkDisplay()}),document.addEventListener("DOMContentLoaded",function(){var t=function(){e.$body=e.$("body"),e.trigger("beforeready.uk.dom"),e.component.bootComponents();var t=requestAnimationFrame(function(){var n={dir:{x:0,y:0},x:window.pageXOffset,y:window.pageYOffset},i=function(){var o=window.pageXOffset,r=window.pageYOffset;n.x==o&&n.y==r||(o!=n.x?n.dir.x=o>n.x?1:-1:n.dir.x=0,r!=n.y?n.dir.y=r>n.y?1:-1:n.dir.y=0,n.x=o,n.y=r,e.$doc.trigger("scrolling.uk.document",[{dir:{x:n.dir.x,y:n.dir.y},x:o,y:r}])),cancelAnimationFrame(t),t=requestAnimationFrame(i)};return e.support.touch&&e.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",i),(n.x||n.y)&&i(),i}());if(e.trigger("domready.uk.dom"),e.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&e.$win.on("load orientationchange resize",e.Utils.debounce(function(){var t=function(){return $(".uk-height-viewport").css("height",window.innerHeight),t};return t()}(),100)),e.trigger("afterready.uk.dom"),e.domready=!0,e.support.mutationobserver){var n=e.Utils.debounce(function(){requestAnimationFrame(function(){e.init(document.body)})},10);new e.support.mutationobserver(function(t){var e=!1;t.every(function(t){if("childList"!=t.type)return!0;for(var n=0,i;n<t.addedNodes.length;++n)if(i=t.addedNodes[n],i.outerHTML&&i.outerHTML.indexOf("data-uk-")!==-1)return(e=!0)&&!1;return!0}),e&&n()}).observe(document.body,{childList:!0,subtree:!0})}};return"complete"!=document.readyState&&"interactive"!=document.readyState||setTimeout(t),t}()),e.$html.addClass(e.support.touch?"uk-touch":"uk-notouch"),e.support.touch){var o=!1,r,s="uk-hover",a=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";e.$html.on("mouseenter touchstart MSPointerDown pointerdown",a,function(){o&&$("."+s).removeClass(s),o=$(this).addClass(s)}).on("mouseleave touchend MSPointerUp pointerup",function(t){r=$(t.target).parents(a),o&&o.not(r).removeClass(s)})}return e}),function(t){"use strict";function n(n,e){if(e)return"object"==typeof n?(n=n instanceof jQuery?n:t.$(n),n.parent().length&&(e.persist=n,e.persist.data("modalPersistParent",n.parent()))):n="string"==typeof n||"number"==typeof n?t.$("<div></div>").html(n):t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: "+typeof n),n.appendTo(e.element.find(".uk-modal-dialog")),e}var e=!1,i=0,o=t.$html,r;t.$win.on("resize orientationchange",t.Utils.debounce(function(){t.$(".uk-modal.uk-open").each(function(){return t.$(this).data("modal")&&t.$(this).data("modal").resize()})},150)),t.component("modal",{defaults:{keyboard:!0,bgclose:!0,minScrollHeight:150,center:!1,modal:!0},scrollable:!1,transition:!1,hasTransitioned:!0,init:function(){if(r||(r=t.$("body")),this.element.length){var n=this;this.paddingdir="padding-"+("left"==t.langdirection?"right":"left"),this.dialog=this.find(".uk-modal-dialog"),this.active=!1,this.element.attr("aria-hidden",this.element.hasClass("uk-open")),this.on("click",".uk-modal-close",function(t){t.preventDefault(),n.hide()}).on("click",function(e){var i=t.$(e.target);i[0]==n.element[0]&&n.options.bgclose&&n.hide()}),t.domObserve(this.element,function(t){n.resize()})}},toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(this.element.length){var n=this;if(!this.isActive())return this.options.modal&&e&&e.hide(!0),this.element.removeClass("uk-open").show(),this.resize(!0),this.options.modal&&(e=this),this.active=!0,i++,t.support.transition?(this.hasTransitioned=!1,this.element.one(t.support.transition.end,function(){n.hasTransitioned=!0,t.Utils.focus(n.dialog,"a[href]")}).addClass("uk-open")):(this.element.addClass("uk-open"),t.Utils.focus(this.dialog,"a[href]")),o.addClass("uk-modal-page").height(),this.element.attr("aria-hidden","false"),this.element.trigger("show.uk.modal"),t.Utils.checkDisplay(this.dialog,!0),this}},hide:function(n){if(!n&&t.support.transition&&this.hasTransitioned){var e=this;this.one(t.support.transition.end,function(){e._hide()}).removeClass("uk-open")}else this._hide();return this},resize:function(t){if(this.isActive()||t){var n=r.width();if(this.scrollbarwidth=window.innerWidth-n,r.css(this.paddingdir,this.scrollbarwidth),this.element.css("overflow-y",this.scrollbarwidth?"scroll":"auto"),!this.updateScrollable()&&this.options.center){var e=this.dialog.outerHeight(),i=parseInt(this.dialog.css("margin-top"),10)+parseInt(this.dialog.css("margin-bottom"),10);e+i<window.innerHeight?this.dialog.css({top:window.innerHeight/2-e/2-i}):this.dialog.css({top:""})}}},updateScrollable:function(){var t=this.dialog.find(".uk-overflow-container:visible:first");if(t.length){t.css("height",0);var n=Math.abs(parseInt(this.dialog.css("margin-top"),10)),e=this.dialog.outerHeight(),i=window.innerHeight,o=i-2*(n<20?20:n)-e;return t.css({"max-height":o<this.options.minScrollHeight?"":o,height:""}),!0}return!1},_hide:function(){this.active=!1,i>0?i--:i=0,this.element.hide().removeClass("uk-open"),this.element.attr("aria-hidden","true"),i||(o.removeClass("uk-modal-page"),r.css(this.paddingdir,"")),e===this&&(e=!1),this.trigger("hide.uk.modal")},isActive:function(){return this.element.hasClass("uk-open")}}),t.component("modalTrigger",{boot:function(){t.$html.on("click.modal.uikit","[data-uk-modal]",function(n){var e=t.$(this);if(e.is("a")&&n.preventDefault(),!e.data("modalTrigger")){var i=t.modalTrigger(e,t.Utils.options(e.attr("data-uk-modal")));i.show()}}),t.$html.on("keydown.modal.uikit",function(t){e&&27===t.keyCode&&e.options.keyboard&&(t.preventDefault(),e.hide())})},init:function(){var n=this;this.options=t.$.extend({target:!!n.element.is("a")&&n.element.attr("href")},this.options),this.modal=t.modal(this.options.target,this.options),this.on("click",function(t){t.preventDefault(),n.show()}),this.proxy(this.modal,"show hide isActive")}}),t.modal.dialog=function(e,i){var o=t.modal(t.$(t.modal.dialog.template).appendTo("body"),i);return o.on("hide.uk.modal",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),n(e,o),o},t.modal.dialog.template='<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>',t.modal.alert=function(n,e){e=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},e);var i=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(n)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+e.labels.Ok+"</button></div>"].join(""),e);return i.on("show.uk.modal",function(){setTimeout(function(){i.element.find("button:first").focus()},50)}),i.show()},t.modal.confirm=function(n,e,i){var o=arguments.length>1&&arguments[arguments.length-1]?arguments[arguments.length-1]:{};e=t.$.isFunction(e)?e:function(){},i=t.$.isFunction(i)?i:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},t.$.isFunction(o)?{}:o);var r=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(n)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+o.labels.Ok+"</button></div>"].join(""),o);return r.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click",function(){t.$(this).is(".js-modal-confirm")?e():i(),r.hide()}),r.on("show.uk.modal",function(){setTimeout(function(){r.element.find(".js-modal-confirm").focus()},50)}),r.show()},t.modal.prompt=function(n,e,i,o){i=t.$.isFunction(i)?i:function(t){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},o);var r=t.modal.dialog([n?'<div class="uk-modal-content uk-form">'+String(n)+"</div>":"",'<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>','<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+o.labels.Ok+"</button></div>"].join(""),o),s=r.element.find("input[type='text']").val(e||"").on("keyup",function(t){13==t.keyCode&&r.element.find(".js-modal-ok").trigger("click")});return r.element.find(".js-modal-ok").on("click",function(){i(s.val())!==!1&&r.hide()}),r.show()},t.modal.blockUI=function(n,e){var i=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(n||'<div class="uk-text-center">...</div>')+"</div>"].join(""),t.$.extend({bgclose:!1,keyboard:!1,modal:!1},e));return i.content=i.element.find(".uk-modal-content:first"),i.show()},t.modal.labels={Ok:"Ok",Cancel:"Cancel"}}(UIkit);