
/**
 * 这个模块是 加购上报
 * 
 */


const hooksFn = function(event){
  console.log('在这里处理 自定义点击事件')
  console.log('事件传值：',event)
  console.log('当前this：',this)
}

export default {
  eventName:'handlePageReport',
  hooksFn
}