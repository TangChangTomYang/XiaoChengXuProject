
/**
 * 封装网请求, 使用Promise 防止 回调地狱
 */

export default function netRequest(options){ // 这种导出好像可以改名字
  return new Promise((resolve, reject) => {

    wx.request({
      url: options.url,
      data: options.data || {},
      header: options.header || {},
      method: options.method || 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
  
}