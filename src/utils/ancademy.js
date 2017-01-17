import Promise from './es6-promise.js'
const URI = 'https://www.ancademy.org/apiv1/'

var globalData = {
  userInfo: null
}
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
      header: {'Content-Type': 'application/json'},
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
  const params = {start: (page - 1) * count, count: count}
  return fetchApi(type, search ? Object.assign(params, {q: search}) : params)
    .then(res => {
      console.log(res.data)
      return res.data
    })
}

/**
 * 获取单条类型的数据 TODO
 * @param  {Number} id
 * @return {Promise}       包含抓取任务的Promise
 */
function findOne (id) {
  fetchApi('subject/' + id)
    .then(res => {
      return res.data
    })
}

function login () {
  return new Promise((resolve, reject) => {
    if (this.globalData.userInfo) {
      resolve(this.globalData.userInfo)
    } else {
      wx.login({
        success: function (reslogin) {
          wx.getUserInfo({
            success: function (res) {
              var code = reslogin.code
              var encryptedData = res.encryptedData
              var iv = res.iv
              var userInfo = res.userInfo
              console.log(userInfo)
              wx.request({
                method: 'POST',
                url: 'http://192.168.2.204:3001/apiv2/user/login/xcx',
                data: {
                  code: code,
                  encrypteddata: encryptedData,
                  iv: iv
                },
                success: (result) => {
                  console.log(result.data.orgCode)
                  userInfo.orgCode = result.data.orgCode
                  userInfo.orgName = result.data.orgName
                  resolve(userInfo)
                },
                fail: (err) => {
                  reject(err)
                }
              })
            }
          })
        }
      })
    }
  })
}
module.exports = {find, findOne, globalData, login}
