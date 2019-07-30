

/**
 * 轮播图请求:
 * http://123.207.32.32:8000/home/multidata
 */

const bannerWHRate = 750/390;

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
    banners:[],
    recommends:[],
    bannerHeight:0,
    tabCtrs:['流行', '新款', '精选', '我喜欢']

  },
 
  onLoad: function (options) {

    // 1. 获取banner的高度数据
    this._setBannerH()
    
    // 2.
    this._getMultiData()
    

  },
  /**
   * 
   */
  _getMultiData(){
    // 发送网络请求, 获取数据
    getMultiData().then(res => {
      // 拿到banner 数据
      var banners = res.data.data.banner.list

      // 拿到 推荐数据
      var recommends = res.data.data.recommend.list
      // 将banners 和 recommend 数据保存在 data 中, 供外部使用
      this.setData({
        banners: banners,
        recommends: recommends
      })

    }).catch(err => {
      console.log('------网络请求 失败')
      console.log(err)
    })

  },

  _setBannerH(){
      var app = getApp()
      this.setData({
        bannerHeight: Math.ceil(app.globalData.screenW / bannerWHRate)
      })
  },

  /**
   * 轮播组件事件 回调函数
   */
  bannerItemDidClick(e){
    console.log(e)
  },
  /**
   * 轮播组件事件 回调函数
   */
  recommendsDidClick(e) {
    console.log(e)
  },

  /**
   * tabCtrDidClick
   */
  tabCtrDidClick(e){
    console.log(e)

  }

})