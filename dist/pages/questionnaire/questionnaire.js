// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   * zeroQuestion没有分组，即0个分组
   * flag0添加题目 1有自定义问题 2弹出选择问题遮罩层
   */
  data: {
    flagAdd: 0,
    zeroQuestion: true,
    idx: -1,
    curGroupId: 0,
    flag: 0,
    date: '2017/01/01',
    groupInfo: [{
      groupName: '首页',
      groupDesc: ''
    }],
    sceneInfo: [],
    content: []
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
    let groupInfo = this.data.groupInfo;
    groupInfo.push({
      groupName: '第' + (this.data.idx + 1) + '组'
    });
    this.setData({
      groupInfo: groupInfo,
      idx: this.data.idx + 1,
      curGroupId: this.data.groupInfo.length - 1
    });
  },

  /**
   * 问卷选项卡删除
   */
  bindQueDelete(e) {
    let idx = e.currentTarget.dataset.idx;
    let groupInfo = this.data.groupInfo;
    groupInfo.splice(idx, 1);
    this.setData({
      groupInfo: groupInfo,
      curGroupId: idx - 1
    });
    if (groupInfo.length === 0) {
      this.setData({
        idx: -1
      });
    }
  },

  /**
   * 添加组问题
   */
  addQuestion(e) {
    this.setData({
      flag: 1
    });
  },

  /**
   * 选项卡点击
   * flagAll标志组下没题目则为true
   */
  setQueCurrent(e) {
    let idx = parseInt(e.currentTarget.dataset.idx);
    this.setData({
      curGroupId: idx
    });
  },

  /**
   * 遮罩层关闭1
   */
  bindQueClose(e) {
    this.setData({
      flag: 0
    });
  },

  /**
   * 遮罩层关闭2
   */
  bindSceneQueClose(e) {
    this.setData({
      flag: 0
    });
  },

  /**
   * 组题目添加
   */
  chooseQue(e) {
    var idx = parseInt(e.currentTarget.dataset.idx);
    switch (idx) {
      case 0:
        this.data.content.push({
          groupId: this.data.curGroupId,
          typeId: 0,
          myChoice: false,
          important: true,
          item: ['12434', '21344123'],
          range: [1, 10],
          sceneId: -1,
          title: '12323'
        });
        this.setData({
          content: this.data.content,
          flag: 0
        });
        break;
      case 1:
        this.data.content.push({
          groupId: this.data.curGroupId,
          typeId: 1,
          myChoice: false,
          important: true,
          item: ['12434', '21344123'],
          range: [1, 10],
          sceneId: -1,
          title: '12323'
        });
        this.setData({
          content: this.data.content,
          flag: 0
        });
        break;
      case 2:
        this.data.content.push({
          groupId: this.data.curGroupId,
          typeId: 2,
          myChoice: false,
          important: true,
          item: ['12434', '21344123'],
          range: [1, 10],
          sceneId: -1,
          title: '12323'
        });
        this.setData({
          content: this.data.content,
          flag: 0
        });
        break;
      case 3:
        this.data.content.push({
          groupId: this.data.curGroupId,
          typeId: 3,
          myChoice: false,
          important: true,
          item: ['12434', '21344123'],
          range: [1, 10],
          sceneId: -1,
          title: '12323'
        });
        this.setData({
          content: this.data.content,
          flag: 0
        });
        break;
    }
  },

  /**
   * 组题目删除
   */
  queDelete(e) {
    let idx = parseInt(e.currentTarget.dataset.idx);
    this.data.content.splice(idx, 1);
    this.setData({
      content: this.data.content
    });
  }
});
//# sourceMappingURL=questionnaire.js.map
