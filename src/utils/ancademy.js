const URI = 'https://www.ancademy.org/apiv1/'

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
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url:  `${URI}/${type}`,
            header: { 'Content-Type': 'application/json' },
            data: {
              code: res.code
            },
            success: resolve,
            fail: reject
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  })
}
module.exports = { find, findOne }
