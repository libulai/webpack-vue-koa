# 1.MutationObserver
// 注册监视器, 一旦发生变化会alert
let observer = new MutationObserver(()=>{
    alert('change')
});
// 开始监视
observer.observe(document.querySelector('#app'), { childList: true, subtree: true });
// 停止监视, 释放资源
observer.disconnect()

# 2.node.contains(otherNode)
返回的是一个布尔值，来表示传入的节点(otherNode)是否为该节点(node)的子孙节点.
document.body.contains(document.querySelector('#app'))

# 3.getBoundingClientRect
document.querySelector('#app').getBoundingClientRect()

# 4.insertAdjacentElement
可以通过不同的参数实现jQuery的append | prepend | after | before.