class Animation {
    constructor() {
        this._baseData;

        this._container;

        this.htmlDOMData = {};
    }

    update(opts) {
        if (opts.el) this._container = opts.el;
        
        this._beginAnimate(opts.data)
    }

    // 随机生成bar背景颜色
    _createBgColor() {
        return `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`
    }

    // 创建单个bar元素
    createLiDom(data, index) {}

    // 动态变更元素css
    changeLiDomCSS(el, data, index) {}

    // 开始动画的函数
    _beginAnimate(opts) {
        let bar = document.querySelector(this._container);
        let newData = this._reoederBasedata(opts); // 重排数据
        let htmlDOMData = this.htmlDOMData;
        let newDataKey = [];

        // 新数据0
        newData.forEach(i => newDataKey.push(i.name));

        if (newData.length == 0) {
            for (let k in htmlDOMData) {
                if (htmlDOMData[k].el.remove) htmlDOMData[k].el.remove();
                else htmlDOMData[k].el.removeNode(true);
                delete htmlDOMData[k]
            }
        }

        for (let j = 0; j < newData.length; j++) {
            // 原数据0
            if (Object.keys(htmlDOMData).length == 0) {
                let el = this.transfDom(this.createLiDom(newData[j], j));
                bar.appendChild(el);
                htmlDOMData[newData[j].name] = {
                    el,
                    name: newData[j].name
                }
            }

            for (let i in htmlDOMData) {

                if (!newDataKey.includes(i)) {

                    // 兼容ie
                    if (htmlDOMData[i].el.remove) htmlDOMData[i].el.remove();
                    else htmlDOMData[i].el.removeNode(true);

                    delete htmlDOMData[i]
                }

                if (!htmlDOMData[newData[j].name]) {
                    let el = this.transfDom(this.createLiDom(newData[j], j));
                    bar.appendChild(el);
                    htmlDOMData[newData[j].name] = {
                        el,
                        name: newData[j].name
                    }
                }

                if (i == newData[j].name) {
                    this.changeLiDomCSS(htmlDOMData[i].el, newData[j], j);
                }
            }
        }
    }

    // 重新排序
    _reoederBasedata(opts) {
        opts.sort((l, n) => n.count - l.count)

        opts = opts.slice(0, 10);

        this._baseData = opts;

        return this._baseData;
    }

    // string转dom
    transfDom(str) {
        let objE = document.createElement("div");

        objE.innerHTML = str;

        return objE.childNodes[0];
    }
}

class Animate extends Animation {
    constructor(opts) {
        super(opts);

        this.createLiDom = opts.createDom;

        this.changeLiDomCSS = opts.DOMchanged;

        this.update({
            data: opts.data,
            el: opts.el
        })
    }
}




// 使用

let createDom = function(data, index) {
    return `<li class="att-li" style="transform:translateY(${index * 32}px);opacity:1">
                <span class="location">${data.name}</span>
                <div class="p-g">
                    <div class="progress" style="width:${data.per}"></div>
                </div>
                <span class="number">${data.count}</span>
            </li>`
}

let DOMchanged = function(el, data, index) {
    el.style.transform = `translateY(${index * 32}px)`;
    el.querySelector('.number').innerText = data.count;
    el.querySelector('.progress').style.width = data.per;
}

this.attackAreaAnimate = new Animate({
    data: [{name:'', count: 33, per: '100%'}],
    el: '#attack-area-animate',
    createDom,
    DOMchanged
});



export default Animate