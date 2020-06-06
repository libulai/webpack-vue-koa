# js API

## MutationObserver
// 注册监视器, 一旦发生变化会alert
let observer = new MutationObserver(()=>{
    alert('change')
});
// 开始监视
observer.observe(document.querySelector('#app'), { childList: true, subtree: true });
// 停止监视, 释放资源
observer.disconnect()

## node.contains(otherNode)
返回的是一个布尔值，来表示传入的节点(otherNode)是否为该节点(node)的子孙节点.
document.body.contains(document.querySelector('#app'))

## getBoundingClientRect 
获取元素距离各项参数
document.querySelector('#app').getBoundingClientRect()

## insertAdjacentElement
js 实现 jq 方法
可以通过不同的参数实现jQuery的append | prepend | after | before.

# js高程 王福朋
原型链 / 原型 / 作用域 / 闭包 / 类
https://www.cnblogs.com/wangfupeng1988/p/3977987.html

## (new Object).__proto__ === Object.prototype  （对象、数组、函数）的隐式原型指向构造函数的显示原型

## new Object() 对象即函数

# 设计模式

# 数据存储
堆 
栈

# 垃圾回收

## 内存泄漏
不再用到的内存，没有及时释放，就叫做内存泄漏。

## 垃圾回收机制
1.标记清除法
它的实现原理就是通过判断一个变量是否在执行环境中被引用，来进行标记删除。

2.引用计数法

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


# 深拷贝

# 手写 bind

# 函数柯里化

# Promise

# 防抖

# 节流

# 手写 instanceOf

# typeof vs instanceof

# 冒泡排序
function BubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i ++) {
        for (let j = 1; j < length - i; j ++) {
            if (arr[j] < arr[j-1]) {
                const temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

# this

## 1.对象调用，this 指向该对象
var obj = {
    name:'小鹿',
    age: '21',
    print: function(){
        console.log(this.name + ':' + this.age)
    }
}

// 通过对象的方式调用函数
obj.print();        // this 指向 obj

## 2.直接调用的函数，this指向的是全局 window对象
function print(){
	console.log(this);
}
// 全局调用函数
print();   // this 指向 window

## 3.通过 new的方式，this永远指向新创建的对象
function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(this);
}

var xiaolu = new Person('小鹿',22);  // this = > xaiolu

## 4.箭头函数中的 this 继承上下文
const obj = {
    a:()=>{
        console.log(this);
    }
}
// 对象调用箭头函数
obj.a(); // window


# apply / call / bind

## 改变this指向
var obj = {
    name:'小鹿',
    age:'22',
    adress:'小鹿动画学编程'
}

function print(){
    console.log(this);       // 打印 this 的指向
    console.log(arguments);  // 打印传递的参数
}

// 通过 call 改变 this 指向
print.call(obj,1,2,3);   

// 通过 apply 改变 this 指向
print.apply(obj,[1,2,3]);

// 通过 bind 改变 this 的指向
let fn = print.bind(obj,1,2,3);
fn();

# new

## new 的过程包括以下四个阶段：
1.创建一个新对象。
2.这个新对象的 __proto__ 属性指向原函数的 prototype 属性。(即继承原函数的原型)
3.将这个新对象绑定到 此函数的 this 上 。
4.返回新对象，如果这个函数没有返回其他对象。

## 手写
function create(Con, ...args){
    // 创建空对象
    let obj = {};
    // 设置空对象的原型(链接对象的原型)
    obj._proto_ = Con.prototype;
    // 绑定 this 并执行构造函数(为对象设置属性)
    let result = Con.apply(obj,args)
    // 如果 result 没有其他选择的对象，就返回 obj 对象
    return result instanceof Object ?  result : obj;
}
// 构造函数
function Test(name, age) {
    this.name = name
    this.age = age
}

Test.prototype.sayName = function () {
    console.log(this.name)
}

// 实现一个 new 操作符
const a = create(Test,'小鹿','23')
console.log(a.age)

## new/字面量 与 Object.create(null) 创建对象的区别？
new 和 字面量创建的对象的原型指向 Object.prototype，会继承 Object 的属性和方法。
而通过 Object.create(null) 创建的对象，其原型指向 null，null 作为原型链的顶端，没有也不会继承任何属性和方法。

# 





