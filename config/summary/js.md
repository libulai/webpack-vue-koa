# MutationObserver
// 注册监视器, 一旦发生变化会alert
let observer = new MutationObserver(()=>{
    alert('change')
});
// 开始监视
observer.observe(document.querySelector('#app'), { childList: true, subtree: true });
// 停止监视, 释放资源
observer.disconnect()

# node.contains(otherNode)
返回的是一个布尔值，来表示传入的节点(otherNode)是否为该节点(node)的子孙节点.
document.body.contains(document.querySelector('#app'))

# getBoundingClientRect 
获取元素距离各项参数
document.querySelector('#app').getBoundingClientRect()

# insertAdjacentElement
js 实现 jq 方法
可以通过不同的参数实现jQuery的append | prepend | after | before.

# js高程 王福朋
this/原型链/原型/作用域/闭包/类
https://www.cnblogs.com/wangfupeng1988/p/3977987.html

# (new Object).__proto__ === Object.prototype  （对象、数组、函数）的隐式原型指向构造函数的显示原型

# new Object() 对象即函数

# 设计模式（发布订阅，）

# 数据存储
堆
栈

# 垃圾回收

# 事件循环
微任务
宏任务

# 浏览器安全
