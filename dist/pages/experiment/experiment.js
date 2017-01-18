// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    title: '实验',
    array: ['Public Goods', 'Trust Game', 'Beauty Contest', 'Vickrey Auction', 'Vickrey Auction', 'Traveler Dilemma', 'Common Value Auction', 'Cournot Competition', 'Betrand Competition'],
    index: 0,
    gameIndex: null,
    flag: true,
    flagInvite: false,
    flagShare: false,
    flagFresh: false,
    flagInfo: false,
    flagInviteSearch: false,
    flagInviteMyStu: true,
    flagYaoa: false,
    inputValue0: '',
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    inputValue4: '',
    inputValue5: '',
    inputValue6: '',
    inputValue7: '',
    textAreaArray: ['在本次实验中，你将会被随机的分配到某个组中，每组有若干名成员。在该组中，每名成员都有一些美金，他们可以选择拿出一部分资金出来作为公共资金投资。不管有多少人在公共资金里面投多少钱，这比钱将会翻一定倍数然后平均返给该组中的每个人，每个人的收益就是你从公共资金里面得到的回报加上你未投入公共资金的钱。', '你会和另外一名参与者被随机分配到一组，而且你们彼此之间互相不知道对方的身份。其中某一个人会被给予参与人player1的身份，另外一个称为参与人player2的身份，在做决定之前，你会知道你是参与人player1还是参与人player2。开始时，参与人player1会得到一些点数；参与人player2得到0点。player1选择从他拥有的点中拿出一部分player2，player2得到的点数是player1给予点数的特定倍，然后player2从他拥有的点数中给一部分给player1。最后的收益就是player1和player2各自拥有的点数', '选美比赛博弈：在本次实验中，你将会被随机的分配到某个组中，每组有若干名成员，你可以选择在0到100之间任选任意一个数，如果你选的数和包括你在内的所有人选的数的平均值乘以计算参数最接近，那么你就是赢家，享受到老师的奖励和获胜的快感。', '在本次实验中，你将会随机的被分配到某个小组中，你对拍卖品有个估值，估值是0到100之间的随机值，每个人对产品的估值都不同。拍卖开始，你会对产品出一个报价，报价范围0-100，出价最高者中标。中标者的收益是100+中标者对标物的估值-第二高的报价。', '在本次实验中，你将会被随机的分配到某个小组中。小组中有三名成员，每个人选择是否要充当志愿者，如果有两个以上的人担任志愿者，每个人将会获得奖励100，如果只有少于一个人担任志愿者，那么每个人就不会获得奖励，不论是否获得奖励，担任志愿者都要付出成本40。', '在本次实验中，你将会被随机的分配到某个组中，每组有若干名成员。在该组中，每名成员都有一些美金，他们可以选择拿出一部分资金出来作为公共资金投资。不管有多少人在公共资金里面投多少钱，这比钱将会翻一定倍数然后平均返给该组中的每个人，每个人的收益就是你从公共资金里面得到的回报加上你未投入公共资金的钱。', '在本次实验中，你将会和其它组成员随机分配到一起。你的任务是参与一个拍卖竞标项目。在投标之前,每个玩家将对标物有一个基于自身偏好的估值，玩家之间的估计可能会有所不同。物品的实际价值对所有参与人可见,并且将会显示在招标中。每个玩家在给定的投标区间内给出基于自身对标物估值的一个出价值。所有的出价都是不会被其它人看到的,并且同时提交。出价最高者将获得物品的实际价值回报减去自己的出价金额。如果赢家的出价金额高于实际价值的项目,回报将是零多个人出价最高，获胜者随机给出，其它人的收益为0', '在本次实验中，你将会被随机的分配到某个小组中。小组中有2名成员，你将选择你的产量，产量选择区间(基础点数)是0—Q/2，你选择的产量越高，市场价格越低，你选择的产量越低，市场价格越高。每单位市场价格：P=Q-你的产量-你的对手的产量你的利润：π=P*你的产量', '在本次实验中，你将会和另一名参与人随机被分配到同一个小组。你们每个人将代表一个公司。每家公司生产一个单位相同的产品。你们每个人私下里设置自己的价格,从0到100点，但是买方市场总是购买价格更低的同类商品，因此价格更高的会被淘汰。在报价相同的情况下，买方会选择随机的一个人进行购买，你的利润取决于你的产品是否卖出，若卖出则你的利润为你的报价，未卖出则为0'],
    titleFu: '',
    textarea: '',
    groupIndex: '',
    circleIndex: '',
    groupArray: null,
    circleArray: null
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
  arrGen(data) {
    let index = data;
    let arr = [];
    for (let i = 0; i < index; i++) {
      arr.push(i + 1);
    }
    return arr;
  },

  bindPickerChange(e) {
    let index = e.detail.value;
    this.setData({
      index: index
    });
  },

  bindKeyInput0(e) {
    this.setData({
      inputValue0: e.detail.value
    });
  },

  bindKeyInput1(e) {
    this.setData({
      inputValue1: e.detail.value
    });
  },

  bindKeyInput2(e) {
    this.setData({
      inputValue2: e.detail.value
    });
  },

  bindKeyInput3(e) {
    this.setData({
      inputValue3: e.detail.value
    });
  },

  bindKeyInput4(e) {
    this.setData({
      inputValue4: e.detail.value
    });
  },

  bindKeyInput5(e) {
    this.setData({
      inputValue5: e.detail.value
    });
  },

  bindKeyInput6(e) {
    this.setData({
      inputValue6: e.detail.value
    });
  },

  bindKeyInput7(e) {
    this.setData({
      inputValue7: e.detail.value
    });
  },

  setExp0() {
    this.setData({
      gameIndex: 0,
      flag: false,
      textarea: this.data.textAreaArray[0],
      titleFu: this.data.inputValue0,
      groupArray: this.arrGen(this.data.inputValue1),
      circleArray: this.arrGen(this.data.inputValue3)
    });
  },

  setExp1() {
    this.setData({
      gameIndex: 1,
      flag: false,
      textarea: this.data.textAreaArray[1],
      titleFu: this.data.inputValue0,
      groupArray: this.arrGen(this.data.inputValue1),
      circleArray: this.arrGen(this.data.inputValue5)
    });
  },

  setExp2() {
    this.setData({
      gameIndex: 2,
      flag: false,
      textarea: this.data.textAreaArray[2],
      titleFu: this.data.inputValue0,
      groupArray: this.arrGen(this.data.inputValue1),
      circleArray: this.arrGen(this.data.inputValue3)
    });
  },

  setExp3() {
    this.setData({
      gameIndex: 0,
      flag: false,
      textarea: this.data.textAreaArray[3],
      titleFu: this.data.inputValue0,
      groupArray: this.arrGen(this.data.inputValue1),
      circleArray: this.arrGen(this.data.inputValue3)
    });
  },

  setExp4() {
    this.setData({
      gameIndex: 4,
      flag: false,
      textarea: this.data.textAreaArray[4],
      titleFu: this.data.inputValue0,
      groupArray: this.arrGen(this.data.inputValue1),
      circleArray: this.arrGen(this.data.inputValue3)
    });
  },

  setExp5() {
    this.setData({
      gameIndex: 5,
      flag: false,
      textarea: this.data.textAreaArray[5],
      titleFu: this.data.inputValue0,
      groupArray: this.arrGen(this.data.inputValue1),
      circleArray: this.arrGen(this.data.inputValue3)
    });
  },

  setExp6() {
    this.setData({
      gameIndex: 6,
      flag: false,
      textarea: this.data.textAreaArray[6],
      titleFu: this.data.inputValue0,
      groupArray: this.arrGen(this.data.inputValue1),
      circleArray: this.arrGen(this.data.inputValue3)
    });
  },

  setExp7() {
    this.setData({
      gameIndex: 7,
      flag: false,
      textarea: this.data.textAreaArray[7],
      titleFu: this.data.inputValue0,
      groupArray: this.arrGen(this.data.inputValue1),
      circleArray: this.arrGen(this.data.inputValue3)
    });
  },

  setExp8() {
    this.setData({
      gameIndex: 8,
      flag: false,
      textarea: this.data.textAreaArray[8],
      titleFu: this.data.inputValue0,
      groupArray: this.arrGen(this.data.inputValue1),
      circleArray: this.arrGen(this.data.inputValue3)
    });
  },

  seeMember() {
    // 在这里发送ajax请求 if else 判断 gameIndex
    this.setData({
      flagInvite: true,
      flag: false
    });
  },

  share() {
    // 在这里发送ajax请求 if else 判断 gameIndex
    this.setData({
      flagShare: true,
      flag: false
    });
  },

  fresh() {
    // 在这里发送ajax请求 if else 判断 gameIndex
    this.setData({
      flagFresh: true,
      flag: false
    });
  },

  info() {
    // 在这里发送ajax请求 if else 判断 gameIndex
    this.setData({
      flagInfo: true,
      flag: false
    });
  },

  invite() {
    this.setData({
      flagYaoa: true,
      flagInvite: false
    });
  },

  inviteSearch() {
    this.setData({
      flagInviteSearch: true,
      flagInviteMyStu: true
    });
  },

  inviteMyStu() {
    this.setData({
      flagInviteMyStu: false,
      flagInviteSearch: false
    });
  },

  inviteCourse() {
    this.setData({
      flagInviteSearch: false
    });
  },

  cancel() {
    this.setData({
      flagInviteMyStu: true

    });
  },

  backLast() {
    this.setData({
      flagYaoa: false
    });
  },

  shut() {
    this.setData({
      flagInvite: false,
      flagShare: false,
      flagFresh: false,
      flagInfo: false
    });
  }

});
//# sourceMappingURL=experiment.js.map
