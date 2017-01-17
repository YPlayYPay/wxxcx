// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    editFlag: false,
    pullDownFlag: false,
    sexIndex: 0,
    sexArray: [
      '男',
      '女'
    ]
  },

  /**
   * 分享test
   */
  onShareAppMessage() {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/pages/profile/profile'
    }
  },

  getUserInfo () {
    const that = this
    app.wechat.getUserInfo()
      .then(res => that.setData({ userInfo: res.userInfo }))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    app.wechat.login()
      .then(res => {
        if (res.code) {
          console.log('登录成功！' + res.code)
        } else {
          console.error('获取用户登录态失败！' + res.errMsg)
        }
      })
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
   * 编辑
   */
  handleEdit (e) {
    this.setData({
      editFlag: true
    })
  },

  /**
   * 点击下拉后弹出下拉框
   */
  handleSelect (e) {
    this.setData({
      pullDownFlag: true
    })
  },

  /**
   * 编辑
   */
  handleSexSelect (e) {
    let idx = e.currentTarget.dataset.idx
    this.setData({
      sexIndex: idx,
      pullDownFlag: false
    })
  },

  /**
   * 确定按钮
   */
  formSubmit (e) {
    let nickName = e.detail.value.nickName
    let phoneNum = e.detail.value.phoneNum
    console.log(nickName)
    console.log(phoneNum)
    this.setData({
      editFlag: false
    })
  },

  /**
   * 充值按钮
   */
  handleRecharge (e) {
    wx.navigateTo({
      url: '../recharge/recharge'
    })
  },

  /**
   * 发票按钮
   */
  handleInvoice (e) {
    wx.navigateTo({
      url: '../invoice/invoice'
    })
  },

  /**
   * 流水按钮
   */
  handleJournal (e) {
    wx.navigateTo({
      url: '../statements/statements'
    })
  },

  /**
   * 邀请研究者
   */
  handleInvite (e) {
    wx.navigateTo({
      url: '../investigator/investigator'
    })
  }
})
