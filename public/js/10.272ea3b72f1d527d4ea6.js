(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1sG+":function(t,e,r){"use strict";var n=r("aU1f");r.n(n).a},NUPf:function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),o=r.n(n);function i(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var a={data:function(){return{modules:[],selectedPermissions:[]}},created:function(){var t,e=this;return(t=o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Promise.all([e.loadRole(),e.loadPermissions()]);case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))})()},methods:{savePermissions:function(){var t=this;this.$http.post("role/".concat(this.$route.params.id,"/permissions"),{permissions:this.selectedPermissions}).then((function(){t.$router.push({name:"dashboard.role"})}))},loadRole:function(){var t=this;this.$http.get("role/".concat(this.$route.params.id,"/edit")).then((function(e){var r=e.data;t.selectedPermissions=r.data.permission_ids}))},loadPermissions:function(){var t=this,e={};["user","article","discussion","comment","file","tag","category","link","role","visitor","system"].forEach((function(r){e[r]={name:t.$t("permission.".concat(r)),permissions:[]}})),this.$http.get("permissions").then((function(r){r.data.data.forEach((function(t){var r=t.name.split("_")[1];Object.keys(e).forEach((function(n){r==n&&e[n].permissions.push(t)}))})),t.modules=e}))}}},s=(r("1sG+"),r("KHd+")),c=Object(s.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"box box-radius shadow-sm"},[r("div",{staticClass:"box-title d-flex justify-content-between align-items-center"},[r("h5",{staticClass:"m-0"},[t._v(t._s(t.$t("form.set_permissions")))]),t._v(" "),r("small",[r("button",{staticClass:"btn btn-sm btn-primary mr-2",on:{click:t.savePermissions}},[t._v(t._s(t.$t("form.submit")))]),t._v(" "),r("router-link",{staticClass:"btn btn-sm btn-secondary",attrs:{to:{name:"dashboard.role"},exact:""}},[t._v(t._s(t.$t("form.back")))])],1)]),t._v(" "),r("div",{staticClass:"box-content p-0"},[r("div",{staticClass:"row m-0"},t._l(t.modules,(function(e){return r("div",{staticClass:"card col-md-12 p-3 border-0"},[r("h6",{staticClass:"card-title font-weight-bold text-upper"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"card-body p-0"},t._l(e.permissions,(function(e){return r("div",{staticClass:"custom-control custom-checkbox d-inline-block pr-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPermissions,expression:"selectedPermissions"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e.name},domProps:{value:e.id,checked:Array.isArray(t.selectedPermissions)?t._i(t.selectedPermissions,e.id)>-1:t.selectedPermissions},on:{change:function(r){var n=t.selectedPermissions,o=r.target,i=!!o.checked;if(Array.isArray(n)){var a=e.id,s=t._i(n,a);o.checked?s<0&&(t.selectedPermissions=n.concat([a])):s>-1&&(t.selectedPermissions=n.slice(0,s).concat(n.slice(s+1)))}else t.selectedPermissions=i}}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:e.name}},[t._v(t._s(e.label))])])})),0)])})),0)])])])}),[],!1,null,"769688c3",null);e.default=c.exports},aU1f:function(t,e,r){var n=r("zxej");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,o);n.locals&&(t.exports=n.locals)},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=w(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function l(){}function h(){}function f(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(E([])));v&&v!==e&&r.call(v,o)&&(d=v);var m=f.prototype=l.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,s){var u=c(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,s)}))}s(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=m.constructor=f,f.constructor=h,f[a]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(m),m[a]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")},zxej:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".card[data-v-769688c3] {\n  border-radius: 0;\n  border-bottom: 1px solid #e7eaec !important;\n}\n.card[data-v-769688c3]:last-child {\n  border-bottom: 0 !important;\n  border-radius: 5px;\n}\n.card .custom-control input[data-v-769688c3],\n.card .custom-control label[data-v-769688c3] {\n  cursor: pointer;\n}",""])}}]);