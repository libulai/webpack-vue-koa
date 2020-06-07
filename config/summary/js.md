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
this / 原型链 / 原型 / 作用域 / 闭包/类
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
攻击方式
    xss 代码注入js脚本
    csrf 跨站域请求伪造
    SQL注入
    中间人攻击（DNS 欺骗、会话劫持）
防御措施
    https://juejin.im/post/5ec8e8c4f265da76b828b151#heading-18 

# for / while

# 二叉树 
http://www.imooc.com/learn/888

# new 操作符

# 深拷贝

# 手写 bind

# 手写函数柯里化

# 手写 Promise

# 手写防抖函数

# 手写节流函数

# 手写 instanceOf

# typeof vs instanceof

# 
