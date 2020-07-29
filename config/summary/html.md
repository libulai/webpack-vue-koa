# js dom 操作
var parent = document.createElement('div')
var child = document.createElement('div')


## 插入
1.parent.append(child) 不兼容ie11
2.parent.appendChild(child) 插入最后

## 移除
1.parent.remove() 不兼容ie11
2.parent.removeNode(true) ie

## 字符串转dom
var objE = document.createElement("div");
objE.innerHTML = li;
return objE.childNodes[0];

## class
parent.classList.add('test')
parent.classList.contains('test') 
parent.classList.remove('test') 




