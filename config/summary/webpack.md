# path.join() / path.resolve() / __dirname

## js => babel
1.polyfill（挂载在全局）一般项目中用polyfill
2.runtime（不会全局污染）开发插件一般用runtime（transform-runtime）

# tree shaking 摇树
没有用到的方法不需要打包

# code 分割 （打包分割）
把第三方库（比如匹配/node_modules/）和设置懒加载的模块分开打包
设置import动态加载，其实就是懒加载，可以让用户点击时加载，也可以让网络请求空闲时加载（设置魔法注释）

optimization:{    
    //帮我们自动做代码分割    
    splitChunks:{        
        chunks:"all",//默认是支持异步，我们使用all    
    } 
}

# loader
原理就是在rules中use一个自定义的函数，如有多个loader时，从后往前执行，[a.js, b.js]

# plugins
原理就是在plugins中引入一个类的实例，在webpack编译打包的生命周期中做一些处理

# devSever

# webpack 编译原理
