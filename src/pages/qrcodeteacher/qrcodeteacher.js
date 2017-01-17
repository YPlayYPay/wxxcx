// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    qrcode: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGm8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAySmFxWklHLTdiWC0xSWUyNmhvMTYAAgSOh31YAwSAOgkA'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  },

  /**
   * 分享，点击右上角竖着三个点既可以分享该页图片（屏高80%）
   */
  onShareAppMessage () {
    return {
      title: '成为研究者吧',
      desc: '扫描二维码即可获得研究者身份',
      path: '/pages/qrcodeteacher/qrcodeteacher'
    }
  }
})
