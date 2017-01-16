// 获取全局应用程序实例对象
const app = getApp()
// 引入ancademy工具
const ancademy = require('../../utils/ancademy.js')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['课程', '研究'],
    currentNavbar: '0',
    joinOrCreate: '0',
    correspondFlag: 0,
    userInfo: {},
    loading: true,
    toggleJoinCreate1: true,
    toggleJoinCreate2: true,
    toggleJoinCreate3: true,
    list: [],
    list2: []
  },
  /**
   *设置ancademy工具到Page
   */
  ancademy: ancademy,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    app.getUserInfo((userInfo) => {
      this.setData({
        userInfo: userInfo,
        loading: false
      })
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
    this.setData({
      joinOrCreate: '0',
      list: [
        {
          rowId: 'x1',
          name: '测试课程1',
          year: '2017',
          season: '夏'
        },
        {
          rowId: 'x2',
          name: '测试课程2',
          year: '2017',
          season: '夏'
        }
      ]
    })
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

  bindViewTap () {
    wx.navigateTo({
      url: '../profile/profile'
    })
  },

  /**
   * 切换 navbar
   */
  swichNav (e) {
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
    })
    if (e.currentTarget.dataset.idx === 0) {
      this.setData({
        currentNavbar: '0',
        list: [
          {
            rowId: 'x1',
            name: '测试课程1',
            year: '2017',
            season: '夏'
          },
          {
            rowId: 'x2',
            name: '测试课程2',
            year: '2017',
            season: '夏'
          }
        ]
      })
    }
    if (e.currentTarget.dataset.idx === 1) {
      this.setData({
        currentNavbar: '1'
      })
    }
  },

  /**
   * 切换 课程navbar
   */
  switchJC (e) {
    this.setData({
      joinOrCreate: e.currentTarget.dataset.idx
    })
  },

  /**
   * 点击课程
   */
  onItemClick (e) {
    let rowId = e.currentTarget.dataset.rowId
    console.log(rowId)
    wx.navigateTo({
      url: '../course/course?rowId=' + rowId
    })
  },

  /**
   * 切换召集问卷实验
   */
  swichCorrespond (e) {
    this.setData({
      correspondFlag: e.currentTarget.dataset.idx
    })
  },

  /**
   * 召集参与创建切换
   */
  toggleFirst (e) {
    let flag = !this.data.toggleJoinCreate1
    this.setData({
      toggleJoinCreate1: flag
    })
  },

  /**
   * 召集参与创建切换
   */
  toggleSecond (e) {
    let flag = !this.data.toggleJoinCreate2
    this.setData({
      toggleJoinCreate2: flag
    })
  },

  /**
   * 召集参与创建切换
   */
  toggleThird (e) {
    let flag = !this.data.toggleJoinCreate3
    this.setData({
      toggleJoinCreate3: flag
    })
  },

  /**
   * 新建召集跳转
   */
  createCamp (e) {
    wx.navigateTo({
      url: '../convoke/convoke'
    })
  },

  /**
   * 新建问卷跳转
   */
  createQue (e) {
    wx.navigateTo({
      url: '../questionnaire/questionnaire'
    })
  },

    /**
     * 新建问卷跳转
     */
  createExp (e) {
    wx.navigateTo({
      url: '../experiment/experiment'
    })
  }
})
