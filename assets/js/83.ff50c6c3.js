(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{557:function(t,e,s){"use strict";s.r(e);var r=s(20),a=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"排他锁-for-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排他锁-for-update"}},[this._v("#")]),this._v(" 排他锁 for update")]),this._v(" "),e("blockquote",[e("p",[this._v("排他锁的申请前提：没有线程对该结果集中的任何行数据使用排他锁或共享锁，否则申请会阻塞。"),e("br"),this._v("\nfor update仅适用于InnoDB，且必须在事务块(BEGIN/COMMIT)中才能生效。在进行事务操作时，通过“for update”语句，MySQL会对查询结果集中每行数据都添加排他锁，其他线程对该记录的更新与删除操作都会阻塞。排他锁包含行锁、表锁。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);