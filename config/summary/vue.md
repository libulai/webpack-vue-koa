# 组件通讯
props
$emit
vuex
attrs和listeners
provide和inject
parent和children
$refs
$root
v-slot
EventBus
路由传参

# v-slot
https://juejin.im/post/5ef6d1325188252e75366ab5#heading-0

# Object.defineProperty / proxy

# vue如何实现自定义指令呢

# vue2 实现原理
1.利用Object.defineProperty去监听data中的数据，处理get和set
2.把挂载vue实例的目标dom下的所有dom节点生成文档片段（虚拟dom）
3.解析模板，处理元素节点和文本节点。元素节点处理属性如v-bind，v-on之类的指令，文本节点处理{{}}模板语法
4.把每一个订阅者watcher都放在一个队列里，当data中的属性发生变化时，通知订阅该字段的订阅者

# vue3 新特性（TS）

# hook 生命周期（js实现钩子函数）
http://www.tensweets.com/article/5e032df8362e5434baf63394
