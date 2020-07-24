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

## 判断是不是数组
1.[] instanceof Array
2.Array.isArray([])
3.Object.prototype.toString.call([])

# 设计模式

# 数据存储
堆
栈
1.Undefined、Null、Boolean、String、Number、Symbol都是直接按值直接存在栈中（基本类型）
2.Object，Array，Function这样的数据存在堆内存中，但是数据指针是存放在栈内（引用类型）


# 垃圾回收

## 内存泄漏
不再用到的内存，没有及时释放，就叫做内存泄漏。

## 垃圾回收机制
1.标记清除法
它的实现原理就是通过判断一个变量是否在执行环境中被引用，来进行标记删除。

2.引用计数法

# 事件循环 event loop

## 过程
主线程先执行执行栈中的同步代码，遇到异步事件时，会把异步事件（宏任务或者微任务）挂载到任务队列中（task queue），存贮异步事件的回调。等到所有的同步代码都执行完成之后，再去任务队列中查看是否任务，如果有就进入执行栈，执行异步事件的回调函数。等任务栈中的同步代码执行完毕，再去任务队列中查看并执行异步事件，反复循环。

## 异步事件
异步任务：setTimeout和setInterval、ajax、事件绑定等
同步任务：除了异步任务外的所有任务
微任务：process.nextTick、new Promise().then(回调）、MutationObserver
宏任务：setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作、UI 渲染等

先同步再异步，在此基础上先微任务再宏任务

1.
setTimeout(function () {
    console.log(1);
});
new Promise(function(resolve,reject){
    console.log(2)
    resolve(3)
}).then(function(val){
    console.log(val);
})
console.log(4);

// 2 4 3 1

2.
Promise.resolve().then(()=>{
    console.log('Promise1')
    setTimeout(()=>{
        console.log('setTimeout2')
    },0)
})
setTimeout(()=>{
    console.log('setTimeout1')
    Promise.resolve().then(()=>{
        console.log('Promise2')
    })
},0)

解答
<!-- 一开始执行栈的同步任务（这属于宏任务）执行完毕，会去查看是否有微任务队列，上题中存在(有且只有一个)，然后执行微任务队列中的所有任务输出 Promise1，同时会生成一个宏任务 setTimeout2
然后去查看宏任务队列，宏任务 setTimeout1 在 setTimeout2 之前，先执行宏任务 setTimeout1，输出 setTimeout1
在执行宏任务 setTimeout1 时会生成微任务 Promise2 ，放入微任务队列中，接着先去清空微任务队列中的所有任务，输出 Promise2
清空完微任务队列中的所有任务后，就又会去宏任务队列取一个，这回执行的是 setTimeout2

总结
当某个宏任务执行完后,会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务，如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。栈空后，再次读取微任务队列里的任务，依次类推。 -->


# 浏览器安全
攻击方式
    xss 代码注入js脚本
    csrf 跨站域请求伪造
    SQL注入
    中间人攻击（DNS 欺骗、会话劫持）
防御措施
    xss 使用转义字符过滤html标签
    csrf token验证鉴权
    sql注入 过滤sql代码
    
    https://juejin.im/post/5ec8e8c4f265da76b828b151#heading-18 


# typeof vs instanceof
1.基础类型 和 引用类型
2.typeof 只能判断 String Number Function Object等
3.[] instanceof Array === true （instanceof 只能判断出是不是数组，对象无法判断）
4.Object.prototype.toString.call([]) 可以判断是数组还是对象

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

## 总结
1.构造函数 -> new出来的对象
2.普通函数 -> window
3.函数作为对象属性，作为对象的属性被调用 -> 该对象
4.函数作为对象属性，不作为对象的属性被调用 -> window
5.函数用call或者apply调用 -> 传入的对象
6.全局 -> window

# apply / call / bind

## 改变this指向（重点）
call 和 apply 的运用主要是让调用者可以使用原来函数中this上绑定的方法或属性

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
    obj.__proto__ = Con.prototype;
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

# 原型 原型链

## prototype / __proto__ / constructor 
a是对象，c是函数 b是c的实例 
var a = {}
var c = new Function()
var b = new c() 

1.__proto__隐式原型, prototype显示原型

2.只有函数有prototype，对象和函数都有__proto__(指向的都是创建它本身的函数的prototype)

3.c.prototype.constructor  === c (c.prototype指向一个对象)

4.b.__proto__ === c.prototype，每个对象都有一个__proto__属性，指向创建该对象的函数的prototype。

5.c.prototype.__proto__ === Object.prototype (c.prototype本质上是被Object创建的)

6.Object.prototype.__proto__ === null （特列）  

7.Object.__proto__ === Function.prototype（证明对象都是通过函数来创建的）

8.c.__proto__ === Function.prototype（函数也是一种对象，__proto__也指向创建其自身的函数的prototype）

# 继承

##js的继承 是继承的原型链上的属性和方法（继承实现方式）

# 执行上下文环境 / 作用域

1.函数在定义的时候（不是调用的时候），就已经确定了函数体内部自由变量的作用域

2.给执行上下文环境下一个通俗的定义——在执行代码之前，把将要用到的所有的变量都事先拿出来，有的直接赋值了，有的先用undefined占个空。

3.执行上下文是调用函数时产生的；而作用域是在函数创建时就产生的，同一个作用域下可能同时存在不同的执行上下文

## 创建上下文环境 -> 执行上下文环境

1.创建上下文环境（定义变量，但是不赋值，只有代码运行时才会变量赋值）

2.函数执行获取变量要去创建这个函数的作用域取值，而不是“父作用域”

在函数中this到底取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了。因为this的取值是执行上下文环境的一部分，每次调用函数，都会产生一个新的执行上下文环境

# 闭包

闭包形成的原因是调用一个函数，如果内部返回值如果为函数时，内部函数会创建一个私有的作用域，该内部函数调用的变量可能存在于创建该函数的作用域中获取，所以就产生了闭包，上下文环境没有被销毁

function debounce(fn, delay) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}

此防抖函数中的 timer 就一直保存在内存中，相当于timer绑定在window上，如下

let timer;

function debounce(fn, delay) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
        fn.apply(this, arguments)
    }, delay);
}

# 深拷贝

## JSON.parse(JSON.stringify())

## 
function deepClone(target) {
    if (typeof target === 'object') {
        let copy = Array.isArray(target) ? [] : {}
        for (let i in target) {
            copy[i] = deepClone(target[i])
        }
        return copy
    } else {
        return target;
    }
}

# 手写 bind
https://www.cnblogs.com/goloving/p/9380076.html（实现原理）

Function.prototype.bind2 = function (ctx) {
    if (typeof this !== 'function') {
        throw 'not a function'
    }

    let fn = this;

    let arg = [...arguments].slice(1)

    let newf =  function () {
        fn.apply(this instanceof newf ? this : ctx, [...arg, ...arguments])
    }
    
    // 解决 new 找不到原型的问题
    function f() {}
    f.prototype = this.prototype
    newf.prototype = new f();
    return newf
}

let obj = {
    value: 111
}

function fn () {
    this.b = 222
    console.log(arguments)
    console.log(this.value)
}

let newf = fn.bind2(obj, 222)
newf()
let p = new newf()
console.log(p.b)


# 手写 call
Function.prototype.call2 = function (ctx) {
    let isObj = Object.prototype.toString.apply(ctx).toLowerCase() == '[object object]';

    if(!isObj) {
        throw 'first argument must be an Object';
    }
    ctx.fn = this;
    let arg = [...arguments].slice(1);
    let result = ctx.fn(...arg);
    delete ctx.fn;
    return result;
}

let c = {
    age: '111'
}

function p (name) {
    console.log(name)
    console.log(this.age)
}

p.call2(c, 'zoo')


# 手写 apply
Function.prototype.apply2 = function (ctx) {
    ctx.fn = this;
    let arg = [...arguments].slice(1);
    let rs;
    if (arg.length>0) {
        rs = ctx.fn(...arg[0])
    } else {
        rs = ctx.fn();
    }
    delete ctx.fn;
    return rs;
}

let obj = {
    value: '111'
}

function p (name) {
    console.log(name)
    console.log(this.value)
}

p.apply2(obj, ['name'])


# 手写 instanceOf
function _instanceof (l, r) {
    let proto = l.__proto__;
    let prototype = r.prototype;
    while(true) {
    if (proto == null) return false;
    if (proto == prototype) return true;
    proto = proto.__proto__;
    }
}

_instanceof({},Object)


# 函数柯里化
function ke(fn, arg = []) {
    return function () {
        newArgs = [...arg, ...arguments]
        if (newArgs.length < fn.length) {
            return ke.call(this, fn, newArgs)
        } else {
            return fn.apply(this, newArgs)
        }
    }
}

let k = ke(test)

function test(a, b, c) {
    console.log(a + b + c)
}

// k(1,2,3)
k(1)(2)(3)

# Promise

## 简易版
function promise2(fn) {
    let _this = this;
    _this.stats = 'pendding';

    function solve(val) {
        setTimeout(function(){
            if (_this.stats === 'pendding') {
                _this.stats = 'resolved';
                _this.val = val;
            }
        })
    }

    function reject(reason) {
        setTimeout(function(){
            if (_this.stats === 'pendding') {
                _this.stats = 'rejected';
                _this.reason = reason;
            }
        })
    }
    try {
        fn.call(this, solve, reject);
    } catch (error) {
        reject(error);
    }
}

promise2.prototype.then = function (fn1, fn2) {
    if (this.stats === 'resolved') {
        fn1.call(this, this.val)
    } 
    if (this.stats === 'rejected') {
        fn2.call(this, this.reason)
    }
}

let p = new promise2(function (solve, reject) {
    solve(2)
})

p.then(function(rs){
    console.log(rs)
},function(err) {
    console.log(err)
})

## 完善版

# 防抖
    window.addEventListener('scroll', debounce(move, 1000))

    function debounce(fn, delay) {
        let timer;
        return function () {
            if (timer) clearTimeout(timer)

            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, delay);
        }
    }


    function move() {
        console.log(arguments)
    }

# 节流

    window.addEventListener('scroll', throttle(move, 1000))

    function throttle(fn, delay) {
        let prev = new Date()
        return function () {
            let now = new Date()
            if (now - prev > delay) {
                fn.apply(this, arguments)
                prev = now
            }
        }
    }


    function move() {
        console.log(arguments)
    }



