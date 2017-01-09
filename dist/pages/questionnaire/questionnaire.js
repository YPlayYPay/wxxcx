// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    idx: 1,
    date: '2017/01/01',
    queTabList: [{
      idx: 0,
      tabName: '首页'
    }]
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
   * 绑定日期函数
   */
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
  },

  /**
   * 问卷选项卡添加
   */
  handleQueAdd(e) {
    let queTabList = this.data.queTabList;
    queTabList.push({
      idx: this.data.idx + 1,
      tabName: '第' + this.data.idx + '组'
    });
    this.setData({
      queTabList: queTabList,
      idx: this.data.idx + 1
    });
  }
});
//# sourceMappingURL=questionnaire.js.map
