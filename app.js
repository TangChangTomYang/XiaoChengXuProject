


App({

  /**
   * 定义全局数据共外部使用
   */
  globalData:{
      screenW:0,
      screenH:0
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this._initSetUp()
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  /**
   * 初始化, 获取设备数据
   */
  _initSetUp(){
    var sysInfo = wx.getSystemInfoSync();
    // console.log(sysInfo) 
    this.globalData.screenW = sysInfo.screenWidth
    this.globalData.screenH = sysInfo.screenHeight
  }
})
