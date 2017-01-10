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
    currentIdx: 0,
    flag: 0,
    date: '2017/01/01',
    queTabList: [
      {
        tabName: '首页'
      }
    ],
    queList: []
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
   * 绑定日期函数
   */
  bindDateChange (e) {
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 问卷选项卡添加
   */
  handleQueAdd (e) {
    let queTabList = this.data.queTabList
    queTabList.push({
      tabName: '第' + (this.data.idx + 1) + '组'
    })
    this.setData({
      queTabList: queTabList,
      idx: this.data.idx + 1,
      currentIdx: queTabList.length - 1
    })
  },

  /**
   * 问卷选项卡删除
   */
  bindQueDelete (e) {
    let idx = e.currentTarget.dataset.idx
    let queTabList = this.data.queTabList
    queTabList.splice(idx, 1)
    this.setData({
      queTabList: queTabList,
      currentIdx: idx - 1
    })
    if (queTabList.length === 0) {
      this.setData({
        idx: -1
      })
    }
  },

  /**
   * 添加问题
   */
  addQuestion (e) {
    this.setData({
      flag: 2
    })
  },

  /**
   * 选项卡点击
   * flagAll标志组下没题目则为true
   */
  setQueCurrent (e) {
    let idx = parseInt(e.currentTarget.dataset.idx)
    this.setData({
      currentIdx: idx
    })
  },

  /**
   * 遮罩层关闭
   */
  bindQueClose (e) {
    if (this.data.queList.length === 0) {
      this.setData({
        flag: 0
      })
    } else {
      this.setData({
        flag: 1
      })
    }
  },

  /**
   * 题目添加
   */
  chooseQue (e) {
    var idx = parseInt(e.currentTarget.dataset.idx)
    console.log(idx)
    switch (idx) {
      case 0:
        this.data.queList.push({
          currentIdx: this.data.currentIdx,
          typeId: 0,
          myChoice: false,
          important: true,
          item: ['12434', '21344123'],
          range: [1, 10],
          sceneId: 0
        })
        this.setData({
          queList: this.data.queList,
          flag: 1
        })
        break
      case 1:
        this.data.queList.push({
          currentIdx: this.data.currentIdx,
          typeId: 1,
          myChoice: false,
          important: true,
          item: ['12434', '21344123'],
          range: [1, 10],
          sceneId: 0
        })
        this.setData({
          queList: this.data.queList,
          flag: 1
        })
        break
      case 2:
        this.data.queList.push({
          currentIdx: this.data.currentIdx,
          typeId: 2,
          myChoice: false,
          important: true,
          item: ['12434', '21344123'],
          range: [1, 10],
          sceneId: 0
        })
        this.setData({
          queList: this.data.queList,
          flag: 1
        })
        break
      case 3:
        this.data.queList.push({
          currentIdx: this.data.currentIdx,
          typeId: 3,
          myChoice: false,
          important: true,
          item: ['12434', '21344123'],
          range: [1, 10],
          sceneId: 0
        })
        this.setData({
          queList: this.data.queList,
          flag: 1
        })
        break
      case 4:
        this.data.queList.push({
          currentIdx: this.data.currentIdx,
          typeId: 4,
          myChoice: false,
          important: true,
          item: ['12434', '21344123'],
          range: [1, 10],
          sceneId: 0
        })
        this.setData({
          queList: this.data.queList,
          flag: 1
        })
        break
    }
  }
})
