
/**
 * 小程序 数据埋点
 * 无埋点方案
 *  
 */

import Hooks from '../sensors/hooks/index'

const CreatePage = obj => {
    for(let key in Hooks){
        const eventName =  Hooks[key].eventName
        const hooksFn =  Hooks[key].hooksFn
        if(obj && obj[eventName]){
            const _method_ = obj[eventName]
            delete obj[eventName]
            obj[eventName] = function(event){
                     hooksFn.call(this,event)
                    _method_.call(this,event)
            }
        } 
    }
    Page(obj)
}

const CreateComponent = obj => {
    for(let key in Hooks){
        const eventName =  Hooks[key].eventName
        const hooksFn =  Hooks[key].hooksFn
        if(obj.methods && obj.methods[eventName]){
            const _method_ = obj.methods[eventName]
            delete obj.methods[eventName]
            obj.methods[eventName] = function(event){
                     hooksFn.call(this,event)
                    _method_.call(this,event)
            }
            break;
        }
    }
    Component(obj)

}

 

export {
    CreateComponent,
    CreatePage
}