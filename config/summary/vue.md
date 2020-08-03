# 组件通讯
props、$emit
vuex
attrs和listeners
provide和inject
$parent和$children
$refs
$root
v-slot
EventBus
路由传参

# v-slot
https://juejin.im/post/5ef6d1325188252e75366ab5#heading-0

# vue 自定义指令

# vue2 实现原理

## 过程
1.利用Object.defineProperty去监听data中的数据，处理get和set
2.把挂载vue实例dom中的所有节点生成文档片段（虚拟dom）
3.解析模板，处理元素节点和文本节点。元素节点处理属性如v-bind，v-on之类的指令，文本节点处理{{}}模板语法
4.把每一个订阅者watcher都放在一个队列里，当data中的属性发生变化时，通知订阅该字段的订阅者

## 步骤
1.监听数据，实现双向绑定
2.解析模板，生成虚拟dom
3.订阅发布模式，watcher

# vue3 新特性（TS）

# hook 生命周期（js实现钩子函数）
http://www.tensweets.com/article/5e032df8362e5434baf63394

# vue-router
1.动态匹配路由 /user/:id
2.this.$router.push() / this.$router.go()
3.{ path: '/a', redirect: '/b' }
4.router.beforeEach

实现
1.hash
根据hashchange来实现，第一次渲染页面用DOMContentLoaded

window.addEventListener('hashchange', ()=>{
    let hash = location.hash;
    routerView.innerHTML = hash
})

2.history
监听popState来实现，可通过history.go,back,forward来触发

window.addEventListener('popstate', ()=>{
    routerView.innerHTML = location.pathname
})

history.pushState(null, '', el.getAttribute('href'))



# vuex
state => mapState
getters
actions
mutations

# 生命周期
1.created
已经创建实例，可以更改数据，更改数据不会触发updated，可以做一些数据的获取，但是无法操作dom，可以使用$nextTick获取dom

2.beforeMount
发生在挂在之前，template模板已经渲染，虚拟dom已经生成，即将开始渲染

3.mounted
已经挂在完成，可以操作dom

# vue 操作数组、对象不生效情况
1.数组
通过下标操作数组
直接改变数组长度
可以通过$set 或者 splice

2.对象
对象属性的添加或删除
$set 或者 Object.assign()

# 全局注册组件
require.context拿到某目录下所有文件，遍历数组，根据文件名通过vue.component去批量注册到全局

#

