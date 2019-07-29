

/**
 * 轮播图请求:
 * http://123.207.32.32:8000/home/multidata
 */



// 导入封装的网络工具
import {
  getMultiData
} from "../../service/homeNet.js"

// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    // banners:[],
    // recommends:[]

  },

  /**
   *  
   */
  onLoad: function (options) {
    // 发送网络请求, 获取数据
    getMultiData().then(res => { 

      console.log('------网络请求 成功')
      //console.log(res) 
 
      // 拿到banner 数据
      var banners = res.data.data.banner.list

      // 拿到 推荐数据
      var recommends = res.data.data.recommend.list
      //console.log('------')
      console.log(banners)
      //console.log('------')
      console.log(recommends)


      // 将banners 和 recommend 数据保存在 data 中, 供外部使用
      this.setData({
        banners: banners,
        recommends: recommends
      })

    }).catch(err =>{

      console.log('------网络请求 失败')
      console.log(err)  

    })


  }

})