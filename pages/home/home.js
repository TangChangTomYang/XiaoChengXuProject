

/**
 * 轮播图请求:
 * http://123.207.32.32:8000/home/multidata
 * 
 * 
 * 商品请求:
 * http://123.207.32.32:8000/home/data?type=sell&page=1
 */

const bannerWHRate = 750/390;

// 导入封装的网络工具
import {
  getMultiData,  // banner & recommends
  getGoods       // goods
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

    // tab 控制
    tabCtrs:['流行', '新款', '精选', '我喜欢'],
    currentTabCtrIndex:'0',

    // 商品数据
    goods:{
      'pop':{page:0, list:[]},  // 流行
      'new':{page:0, list: [] },// 新款
      'sell':{page:0, list: [] } // 精选
    }

  },
 
  onLoad: function (options) {

    // 1. 获取banner的高度数据
    this._setBannerH()
    
    // 2. 网络请求 banner 和 recommends 数据
    this._getMultiData()

    // 3. 网络请求 商品数据
    this._getGoods('pop')
    this._getGoods('new')
    this._getGoods('sell')
    
    

  },
  /**
   * js 约定俗称的规定, _ 开头的函数为私有函数
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
  _getGoods(type){
    var page = this.data.goods[type].page + 1
    getGoods(type, page).then(res=>{
      
      console.log(res)

      // 1. 取出数据
      var list = res.data.data.list;
      if(list.length == 0){
        return
      } 

      var oldList = this.data.goods[type].list
      // 方式1: 循环遍历
      // for (let item of list){
      //   // 将数据一条一条的push 到指定的数组中
      //   oldList.push(item)
      // } 
      // 方式2: ES6 写法
      oldList.push(...list) // ...Arr 会将数组 一条条展开并装入, 相当于 arr.addObjectsFromArray(list)
      
      // 2. 将数据设置到 data 中的goods 中
      const listPath = `goods.${type}.list` // 这个是ES6中的字符串拼接, 等价于 'goods.' + type + '.list'
      const pagePath = `goods.${type}.page`
      this.setData({
        // 错误写法
        // goods.pop.list:oldList // 这样写相当于是 使用 list 把goods 替换掉

        // 正确写法(1), 有点类似于 OC 中的setValueForKeyPath
        // 'goods.pop.list': oldList

        // 正确写法(2)
        [listPath]:oldList,  //  [] 的作用是将 [] 内的变量的值取出来
        [pagePath]:page
      })

    }).catch(err=>{

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
    // console.log(e) 
    
    if (e.detail.index != this.data.currentTabCtrIndex){
        this.setData({
          currentTabCtrIndex: e.detail.index
        })
    }

  },
  /**
   * 用户选择了商品
   */
  goodsItemClick(e){
    console.log('用户选择了商品')
    console.log(e)
  }

})