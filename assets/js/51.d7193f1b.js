(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{520:function(t,s,a){"use strict";a.r(s);var e=a(20),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"openvpn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openvpn"}},[t._v("#")]),t._v(" openvpn")]),t._v(" "),a("ul",[a("li",[t._v("使用Nyr大神的一键脚本即可（注：数据源上面吃了小亏，package 错误，不再犯）")])]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://git.io/vpn -O openvpn-install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" openvpn-install.sh\n")])])]),a("h2",{attrs:{id:"frp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frp"}},[t._v("#")]),t._v(" frp")]),t._v(" "),a("h6",{attrs:{id:"站在巨人的肩膀上-同样简单操作-注意需要配置服务以防频繁掉-linux-配置系统服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#站在巨人的肩膀上-同样简单操作-注意需要配置服务以防频繁掉-linux-配置系统服务"}},[t._v("#")]),t._v(" - 站在巨人的肩膀上，同样简单操作，注意需要配置服务以防频繁掉（linux 配置系统服务）")]),t._v(" "),a("p",[a("code",[t._v("vi /lib/systemd/system/frpc.service")])]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("frpc "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network.target syslog.target\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Wants")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network.target\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("simple\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/frp_0.33.0_linux_amd64/frpc -c /root/frp_0.33.0_linux_amd64/frpc.ini\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n\n")])])]),a("p",[a("code",[t._v("systemctl enable frpc")])]),t._v(" "),a("p",[a("code",[t._v("systemctl start frpc")])]),t._v(" "),a("ul",[a("li",[t._v("配置frp的过程中有个小坑，frpc的映射必须填所在网段的地址")])]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vpn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tcp\nlocal_ip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0\nlocal_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \nremote_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);