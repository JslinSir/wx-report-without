/**
 * sdk 基础配置项
 */
const sensorsConfig = {
  name: 'sensors',
  appid: 'xxxxxxx',
  server_url: 'http://xxxxxx',
  //默认使用队列发数据时候，两条数据发送间的最大间隔
  send_timeout: 5000,
  //   是否使用客户端时间
  use_client_time: false,
  // 全埋点控制开关
  autoTrack: {
      appLaunch: true, // 默认为 true，false 则关闭 $MPLaunch 事件采集
      appShow: true, // 默认为 true，false 则关闭 $MPShow 事件采集
      appHide: true, // 默认为 true，false 则关闭 $MPHide 事件采集
      pageShow: true, // 默认为 true，false 则关闭 $MPViewScreen 事件采集
      pageShare: true, // 默认为 true，false 则关闭 $MPShare 事件采集
      mpClick: false, // 默认为 false，true 则开启 $MPClick 事件采集 
      mpFavorite: true // 默认为 true，false 则关闭 $MPAddFavorites 事件采集
  },

  // 自定义渠道追踪参数，如source_channel: ["custom_param"]
  source_channel: [],
  // 是否允许控制台打印查看埋点数据(建议开启查看)
  show_log: false,
  // 是否允许修改 onShareAppMessage 里 return 的 path，用来增加(登录 ID，分享层级，当前的 path)，在 app onShow 中自动获取这些参数来查看具体分享来源、层级等
  allow_amend_share_path: true,

}

/**
*  server_url 配置项
*/
const sensorsReportUrlConfig = {
  release: 'https://release', //线上正式包 上报地址
  dev: 'https://dev'     //开发地址
}

export {
  sensorsConfig,
  sensorsReportUrlConfig,
}