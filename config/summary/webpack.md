# path.join() / path.resolve() / __dirname

# loader
## js => babel
1.polyfill（挂载在全局）一般项目中用polyfill
2.runtime（不会全局污染）开发插件一般用runtime（transform-runtime）

# plugins

# devSever

# tree shaking 摇树
没有用到的方法不需要打包

# code 分割 （打包分割）
把第三方库单独打包