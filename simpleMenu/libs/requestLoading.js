/**
 * 调用loading需要带上调用者，解决多个模块同时显示loading问题
 */

const loadingFor = {};

class RequestLoading {
    constructor(ns){
        this.ns = ns;
    }
    
    show(...args) {
        _show(this.ns, ...args)
    }

    hide() {
        _hide(this.ns)
    }
}

const _show = (ns, text, mask = false) => {
    if(!text) {
        console.error('未指定loading文本', ns);
    }
    loadingFor[ns] = 1
    const o ={}
    if(typeof text === 'string') {
        o.title = text;
        o.mask = mask;
    }

}

const _hide = (ns)=> {
    delete loadingFor[ns]
    if(Object.keys(loadingFor).length===0){
        console.log('hide really')
    }
}

const instances = {}

module.exports = ns=> {
    if(!instances[ns]){
        instances[ns] = new RequestLoading(ns);
    }
    
    return instances[ns]
}

module.exports.getInstance = module.exports
