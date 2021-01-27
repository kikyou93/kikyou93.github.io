(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{577:function(s,t,n){"use strict";n.r(t);var a=n(20),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"nio-bio-aio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nio-bio-aio"}},[s._v("#")]),s._v(" NIO,BIO,AIO")]),s._v(" "),n("ul",[n("li",[s._v("同步(synchronous) IO和异步(asynchronous) IO")]),s._v(" "),n("li",[s._v("阻塞(blocking) IO和非阻塞(non-blocking)IO")]),s._v(" "),n("li",[s._v("同步阻塞(blocking-IO)简称BIO")]),s._v(" "),n("li",[s._v("同步非阻塞(non-blocking-IO)简称NIO")]),s._v(" "),n("li",[s._v("异步非阻塞(synchronous-non-blocking-IO)简称AIO")])]),s._v(" "),n("h2",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),n("h3",{attrs:{id:"创建用户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("RUN "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" -r redis "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -r -g redis redis\n"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" redis\nRUN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis-server"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),n("h3",{attrs:{id:"docker网络"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker网络"}},[s._v("#")]),s._v(" Docker网络")]),s._v(" "),n("ul",[n("li",[s._v("docker inspect -f 指令")])]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker inspect -f '{{.Config.Image}}' risk-admin")]),s._v("\nharbor.zegobird-erp.com/risk-dev/risk-admin-img:latest\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker inspect -f '{{.Config.Image}}' risk-admin |awk -F \":\" '{print $1}'")]),s._v("\nharbor.zegobird-erp.com/risk-dev/risk-admin-img\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker inspect -f '{{.Config.Image}}' risk-admin |awk -F \":\" '{print $2}'")]),s._v("\nlatest\n\n")])])]),n("ul",[n("li",[s._v("获取git tag或者commit")])]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("  rev-parse --abbrev-ref HEAD "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v HEAD "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("  describe --exact-match HEAD "),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("  rev-parse --short HEAD\n")])])]),n("ul",[n("li",[s._v("网络配置详细")])]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("用户使用 --net"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none 后，可以自行配置网络，让容器达到跟平常一样具有访问网络的权限。通过这个过程，可以了解 Docker 配置网络的细节。\n\n首先，启动一个 /bin/bash 容器，指定 --net"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none 参数。\n\n$ docker run -i -t --rm --net"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none base /bin/bash\nroot@63f36fc01b5f:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n在本地主机查找容器的进程 id，并为它创建网络命名空间。\n\n$ docker inspect -f "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.State.Pid}}'")]),s._v(" 63f36fc01b5f\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2778")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pid")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2778")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/run/netns\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /proc/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v("/ns/net /var/run/netns/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v("\n检查桥接网卡的 IP 和子网掩码信息。\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr show docker0\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(": docker0: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ninet "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".42.1/16 scope global docker0\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n创建一对 “veth pair” 接口 A 和 B，绑定 A 到网桥 docker0，并启用它\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" A "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" veth peer name B\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" brctl addif docker0 A\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" A up\n将B放到容器的网络命名空间，命名为 eth0，启动它并配置一个可用 IP（桥接网段）和默认网关。\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" B netns "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dev B name eth0\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" eth0 up\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".42.99/16 dev eth0\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" netns "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" route "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" default via "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".42.1\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);