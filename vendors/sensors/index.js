/**
 * 神策数据
 */
 
import { sensorsConfig, sensorsReportUrlConfig } from './config'
import sensors from './sensorsdata.min'
// import { APPID } from '../../configs/env'

let APPID = 'xxxxxx'

// 如果是正式包替换上报的 正式地址 否则开发地址
const server_url = __wxConfig.envVersion === 'release' ? sensorsReportUrlConfig.release : sensorsReportUrlConfig.dev


function init(){

  sensors.setPara({
    ...sensorsConfig,
    appid: APPID,
    server_url,
})

 _init()

}

function _init(){

  try {
    // const result = await request({ path: 'xxx', data: {} })
    const result = ''
    if (result.OpenID) {
        sensors.setOpenid(result.OpenID)
    }
    console.log(result)
  } catch (e) {
    console.error(e)
  } finally {
    sensors.init()
    wx._$report = function(type='click',params){
        console.log('arguments:',arguments)
        sensors.track(type,{
            ...params,
        });
         
    }
  }

}



export default { init }