// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inviteTeacherList: [
      {
        code: '0bba33',
        state: '进行中，点击生成分享',
        time: '2017-01-16 09:28:28'
      },
      {
        code: '0bba34',
        state: '进行中，点击生成分享',
        time: '2017-01-16 09:28:28'
      }
    ]
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
   * 进入生成二维码页面（在二维码页面分享二维码）
   */
  jumpInviteQR () {
    wx.navigateTo({
      url: '../qrcodeteacher/qrcodeteacher'
    })
  }
})
