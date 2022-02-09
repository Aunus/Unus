(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{358:function(e,t,s){"use strict";s.r(t);var i=s(0),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"redis-学习计划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-学习计划"}},[e._v("#")]),e._v(" Redis 学习计划")]),e._v(" "),s("h2",{attrs:{id:"学习内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习内容"}},[e._v("#")]),e._v(" 学习内容")]),e._v(" "),s("ul",[s("li",[e._v("官网 "),s("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://redis.io/"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("github "),s("a",{attrs:{href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/antirez/redis"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("《Redis 5设计与源码分析》")]),e._v(" "),s("li",[e._v("《Redis深度历险：核心原理和应用实践》")]),e._v(" "),s("li",[e._v("《Redis设计与实现(第二版)》")])]),e._v(" "),s("h2",{attrs:{id:"redis-源码学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-源码学习"}},[e._v("#")]),e._v(" Redis 源码学习")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("第一阶段阅读Redis的数据结构部分，基本位于如下文件中：\n内存分配 zmalloc.c和zmalloc.h\n动态字符串 sds.h和sds.c\n双端链表 adlist.c和adlist.h\n字典 dict.h和dict.c\n跳跃表 server.h文件里面关于zskiplist结构和zskiplistNode结构，以及t_zset.c中所有zsl开头的函数，比如 zslCreate、zslInsert、zslDeleteNode等等。\n基数统计 hyperloglog.c 中的 hllhdr 结构， 以及所有以 hll 开头的函数")])]),e._v(" "),s("li",[s("p",[e._v("第二阶段 熟悉Redis的内存编码结构\n整数集合数据结构 intset.h和intset.c\n压缩列表数据结构 ziplist.h和ziplist.c")])]),e._v(" "),s("li",[s("p",[e._v("第三阶段 熟悉Redis数据类型的实现\n对象系统 object.c\n字符串键 t_string.c\n列表建 t_list.c\n散列键 t_hash.c\n集合键 t_set.c\n有序集合键 t_zset.c中除 zsl 开头的函数之外的所有函\nHyperLogLog键 hyperloglog.c中所有以pf开头的函数")])]),e._v(" "),s("li",[s("p",[e._v("第四阶段 熟悉Redis数据库的实现\n数据库实现 redis.h文件中的redisDb结构，以及db.c\n文件通知功能 notify.c\nRDB持久化 rdb.c\nAOF持久化 aof.c以及一些独立功能模块的实现发布和订阅 redis.h文件的pubsubPattern结构，以及pubsub.c文件事务 redis.h文件的multiState结构以及multiCmd结构，multi.c文件")])]),e._v(" "),s("li",[s("p",[e._v("第五阶段 熟悉客户端和服务器端的代码\n实现事件处理模块 ae.c/ae_epoll.c/ae_evport.c/ae_kqueue.c/ae_select.c\n网路链接库 anet.c和networking.c\n服务器端 redis.c客户端 redis-cli.c这个时候可以阅读下面的独立功能模块的代码实现lua脚本 scripting.c慢查询 slowlog.c监视 monitor.c")])]),e._v(" "),s("li",[s("p",[e._v("第六阶段 这一阶段主要是熟悉Redis多机部分的代码实现\n复制功能 replication.c\nRedis Sentinel sentinel.c\n集群 cluster.c")])]),e._v(" "),s("li",[s("p",[e._v("其他代码文件介绍关于测试方面的文件有：\nmemtest.c 内存检测\nredis_benchmark.c 用于redis性能测试的实现。\nredis_check_aof.c 用于更新日志检查的实现。\nredis_check_dump.c 用于本地数据库检查的实现。\ntesthelp.c 一个C风格的小型测试框架。")])]),e._v(" "),s("li",[s("p",[e._v("一些工具类的文件如下：\nbitops.c GETBIT、SETBIT 等二进制位操作命令的实现\ndebug.c 用于调试时使用\nendianconv.c 高低位转换，不同系统，高低位顺序不同\nhelp.h  辅助于命令的提示信息\nlzf_c.c 压缩算法系列lzf_d.c  压缩算法系列\nrand.c 用于产生随机数\nrelease.c 用于发布时使用\nsha1.c sha加密算法的实现\nutil.c  通用工具方法\ncrc64.c 循环冗余校验\nsort.c SORT命令的实现")])]),e._v(" "),s("li",[s("p",[e._v("一些封装类的代码实现：\nbio.c background I/O的意思，开启后台线程用的\nlatency.c 延迟类\nmigrate.c 命令迁移类，包括命令的还原迁移等\npqsort.c  排序算法类\nrio.c redis定义的一个I/O类syncio.c 用于同步Socket和文件I/O操作")])])]),e._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://blog.huangz.me/diary/2014/how-to-read-redis-source-code.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何阅读 Redis 源码"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://redissrc.readthedocs.io/en/latest/#id3",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis源码解析"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/17d8fca14147",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis持久化解密"),s("OutboundLink")],1)])])]),e._v(" "),s("h3",{attrs:{id:"完成情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完成情况"}},[e._v("#")]),e._v(" 完成情况")]),e._v(" "),s("ul",[s("li",[e._v("[x] 2019-10-22 Redis 字符串 SDS blog 2019/10/24")]),e._v(" "),s("li",[e._v("[x] 2019-10-25 Redis zmalloc.c/zmalloc.h 内存分配 代码注解")]),e._v(" "),s("li",[e._v("[x] 2019-10-25 Redis sds.c/sds.h 简单动态字符串 代码注解")]),e._v(" "),s("li",[e._v("[x] 2019-10-29 Redis 持久化")]),e._v(" "),s("li",[e._v("[x] 2019-10-30 Redis dict.c/dict.h 字典 代码注解")]),e._v(" "),s("li",[e._v("[x] 2019-10-30 Redis adlist.c/adlist.h 字典 代码注解")]),e._v(" "),s("li",[e._v("[x] 2019-10-30 Redis server.c/server.h 字典 代码注解")])]),e._v(" "),s("ul",[s("li",[e._v("[ ] 2019-10-21 Redis 对象 object.c")])]),e._v(" "),s("h2",{attrs:{id:"redis官方文档阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis官方文档阅读"}},[e._v("#")]),e._v(" Redis官方文档阅读")])])}),[],!1,null,null,null);t.default=r.exports}}]);