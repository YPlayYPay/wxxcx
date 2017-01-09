// 获取全局应用程序实例对象
const app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'course',
    switchFlag: 0,
    newWarn: 0,
    commentOn: 0,
    hasComment: 0,
    seeFlag: 0,
    editFlag: 0,
    warnList: [{
      time: '2017-01-04 13:56',
      text: 'test1'
    }],
    list: [{
      rowId: 'x1',
      name: '测试课程1',
      year: '2017',
      season: '夏'
    }, {
      rowId: 'x2',
      name: '测试课程2',
      year: '2017',
      season: '夏'
    }],
    lessons: [{
      idx: 0,
      alreadyCome: 20,
      shouldCome: 20
    }],
    commentList: [{
      nickName: '爪爪',
      time: '2017-01-05 11:29',
      content: '123213'
    }, {
      nickName: '爪爪2',
      time: '2017-01-05 13:29',
      content: '12323333'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(query) {
    // TODO: onLoad
    app.getUserInfo(userInfo => {
      this.setData({
        userInfo: userInfo,
        loading: false
      });
    });
    let list = this.data.list;
    console.log(query.rowId);
    for (let i = 0; i < list.length; i++) {
      if (list[i].rowId === query.rowId) {
        this.setData({
          course: list[i]
        });
      }
    }
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
   * 导航切换
   */
  switchNav(e) {
    this.setData({
      switchFlag: e.currentTarget.dataset.idx
    });
  },

  /**
   * 新建通知
   */
  createNewWarn(e) {
    this.setData({
      newWarn: 1
    });
  },

  /**
   * 新建通知
   */
  returnWarn(e) {
    this.setData({
      newWarn: 0
    });
  },

  /**
   * 开启评论
   */
  startComment(e) {
    this.setData({
      commentOn: 1
    });
  },

  /**
   * 关闭评论
   */
  endComment(e) {
    this.setData({
      commentOn: 0
    });
  },
  /**
   * 新评论
   */
  addComment(e) {
    this.setData({
      hasComment: 1
    });
  },

  /**
   * 查看当节课程
   */
  seeCourse(e) {
    this.setData({
      seeFlag: 1
    });
  },

  /**
   * 开始上课（点名）
   */
  checkoutCome(e) {
    this.setData({
      seeFlag: 2
    });
  },

  /**
   * 查看当节课程后返回/点名后返回
   */
  memberReturn(e) {
    this.setData({
      seeFlag: 0
    });
  },

  /**
   * 简介编辑
   */
  handleEdit(e) {
    this.setData({
      editFlag: 1
    });
  },

  /**
   * 简介完成
   */
  handleComplete(e) {
    this.setData({
      editFlag: 0
    });
  },

  /**
   * 评论返回／取消回复
   */
  ccReturn(e) {
    if (this.data.commentList.length === 0) {
      this.setData({
        hasComment: 0
      });
    } else {
      this.setData({
        hasComment: 2
      });
    }
  },

  /**
   * 评论返回／取消回复
   */
  handleReply(e) {
    this.setData({
      hasComment: 3
    });
  },

  /**
   * 跳到课次列表
   */
  turnToCourseList(e) {
    this.setData({
      switchFlag: 3
    });
  },

  /**
   * 跳转至成员列表
   */
  toMemberlist(e) {
    wx.navigateTo({
      url: '../memberlist/memberlist'
    });
  }
});
//# sourceMappingURL=course.js.map
