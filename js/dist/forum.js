(()=>{var e={n:o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};(()=>{"use strict";e.r(o);const t=flarum.core.compat["forum/app"];var r=e.n(t);const n=flarum.core.compat["common/extend"],a=flarum.core.compat["common/models/User"];var s=e.n(a);const u=flarum.core.compat["common/utils/ItemList"];var c=e.n(u);function i(e,o){return i=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},i(e,o)}const l=flarum.core.compat["common/Component"];var p=function(e){var o,t;function r(){return e.apply(this,arguments)||this}return t=e,(o=r).prototype=Object.create(t.prototype),o.prototype.constructor=o,i(o,t),r.prototype.view=function(){var e=this.attrs,o=e.group,t=o.color(),r=o.icon(),n=void 0===e.label?o.nameSingular():e.label;return m("div",{className:"RankBadge",style:"--badge-bg:"+t+";"},m("i",{className:r}),m("span",null,n))},r}(e.n(l)());const d=flarum.core.compat["components/Badge"];var f=e.n(d);r().initializers.add("hazbin/rank-badges",(function(){(0,n.override)(s().prototype,"badges",(function(){var e=new(c());if(this.groups().forEach((function(o){e.add("group"+(null==o?void 0:o.id()),m(p,{group:o}))})),r().initializers.has("flarum-suspend")){var o=this.suspendedUntil();new Date<o&&e.add("suspended",m(f(),{icon:"fas fa-ban",type:"suspended",label:r().translator.trans("flarum-suspend.forum.user_badge.suspended_tooltip")}))}return e}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map