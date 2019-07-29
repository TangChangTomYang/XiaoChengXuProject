

// 导入网络 请求工具 
import netRequest from "./netWork.js"


// 导入外部 变量
import {
  baseUrl
} from "./config.js"


// 封装 Home 页的网络请求工具, 并导出给外面用
export function getMultiData(){
  // 返回的是 Promise, 后面拿到 Promise 后就可以 .then(res=>{})            .catch(err => {}) 处理结果了
  return netRequest({
    // 网络请求路径, 内部有 域名拼接
    url: baseUrl + "/home/multidata"
  })
}