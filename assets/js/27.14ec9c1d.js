(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{323:function(e,t,r){"use strict";r(103);var n=r(47),a=r(21),s=r(28),i=r(329),u=r.n(i).a,c=r(327),o=r.n(c),p=function(){function e(){Object(a.a)(this,e),this._=o.a,this.axios=u,this.serverBaseURL="",this.pathURL="",this.timeOut=2e3}var t;return Object(s.a)(e,[{key:"get",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.serverBaseURL+this.pathURL,e.next=3,u.get(r,{method:"GET",params:t});case 3:return n=e.sent,e.abrupt("return",n&&n.data);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}();t.a=p},501:function(e,t,r){"use strict";r.r(t);r(103);var n=r(47),a=(r(107),r(21)),s=r(28),i=r(105),u=r(104),c=function(e){Object(i.a)(c,e);var t,r=Object(u.a)(c);function c(e){var t;return Object(a.a)(this,c),(t=r.call(this,e)).serverBaseURL="https://api.github.com",t}return Object(s.a)(c,[{key:"getStaredList",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,n=t.page,a="".concat(this.serverBaseURL,"/users/").concat(r,"/starred"),e.next=4,this.axios.get(a,{params:{per_page:10,page:n},headers:{Accept:"application/vnd.github.v3+json"}});case 4:return s=e.sent,e.abrupt("return",s&&s.data);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),c}(r(323).a),o={name:"Test",props:{},data:function(){return{list:null}},computed:{},watch:{},beforeCreate:function(){},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getStaredList();case 2:case"end":return t.stop()}}),t)})))()},beforeMount:function(){},mounted:function(){},destroyed:function(){},methods:{getStaredList:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new c,console.log(JSON.stringify(r)),t.next=4,r.getStaredList({username:"gustave001",page:1});case 4:e.list=t.sent;case 5:case"end":return t.stop()}}),t)})))()}}},p=r(20),f=Object(p.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-list",e._l(e.list,(function(t){return r("v-list-item",{key:t.id,staticClass:"elevation-1"},[e._v(e._s(t.full_name))])})),1)],1)}),[],!1,null,null,null);t.default=f.exports}}]);