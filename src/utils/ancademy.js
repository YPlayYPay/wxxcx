const URI = 'https://www.ancademy.org/apiv1/'

var globalData = {
  userInfo:null
};
/**
 * TODO
 * @param  {String} type   类型，例如：'course','research'
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
function fetchApi (type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${URI}/${type}`,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'application/json' },
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 获取列表类型的数据 TODO
 * @param  {String} type   类型
 * @param  {Number} page   页码
 * @param  {Number} count  页条数
 * @param  {String} search 搜索关键词
 * @return {Promise}       包含抓取任务的Promise
 */
function find (type, page = 1, count = 20, search = '') {
  const params = { start: (page - 1) * count, count: count }
  return fetchApi(type, search ? Object.assign(params, { q: search }) : params)
    .then(res => res.data)
}

/**
 * 获取单条类型的数据 TODO
 * @param  {Number} id
 * @return {Promise}       包含抓取任务的Promise
 */
function findOne (id) {
  return fetchApi('subject/' + id)
    .then(res => res.data)
}

function login(){
  return new Promise((resolve, reject) => {
    if(this.globalData.userInfo){
      resolve(this.globalData.userInfo);
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              //TODO
              var sessionKey = res.sessionKey;
              var encryptedData = res.encryptedData;
              var iv = res.iv;
              var userInfo = res.userInfo;
              wx.request({
                url: 'https://www.ancademy.org/wechat/loginxcx',
                data: {
                  sessionkey: sessionKey,
                  encrypteddata: encryptedData,
                  iv: iv
                },
                success:(result)=>{
                  console.log(result);//{orgCode orgName }
                  userInfo.orgCode = result.orgCode;
                  userInfo.orgName = result.orgName;
                  resolve(userInfo);
                },
                fail:(err)=>{
                  reject(err);
                }
              });
            }
          })
        }
      })
    }
  })
}
module.exports = { find, findOne, globalData }
