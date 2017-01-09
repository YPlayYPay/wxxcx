// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showFlag: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // TODO: onPullDownRefresh
  },

  /**
   * 添加成员按钮
   */
  addMember(e) {
    this.setData({
      showFlag: 1
    });
  },

  /**
   * 添加成员按钮
   */
  memAddReturn(e) {
    this.setData({
      showFlag: 0
    });
  },

  /**
   * 邀请按钮
   */
  handleInvite(e) {
    this.setData({
      showFlag: 2
    });
  }
});
//# sourceMappingURL=memberlist.js.map
