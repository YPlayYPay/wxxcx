/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js')

/**
 * Ancademy API 模块
 * @type {Object}
 */
const ancademy = require('./utils/ancademy.js')

App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: 'Ancademy+',
    version: '0.1.0'
  },

  /**
   * WeChat API
   */
  wechat: wechat,

  /**
   * ancademy API
   */
  ancademy: ancademy,

  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch () {
    console.log(' ========== Application is launched ========== ')
    ancademy.login().then(res => {
      if (res.code) {
        console.log('登录成功！' + res.code)
      } else {
        console.error('获取用户登录态失败！' + res.errMsg)
      }
    });

  },
  /**
   * 生命周期函数--监听小程序显示
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow () {
    console.log(' ========== Application is showed ========== ')
  },
  /**
   * 生命周期函数--监听小程序隐藏
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide () {
    console.log(' ========== Application is hid ========== ')
  }
})
